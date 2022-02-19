
from django.shortcuts import render, redirect, HttpResponseRedirect
from django.urls import reverse
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.contrib.auth.models import User
from .models import Quiz
from .models import Review
from .models import Profile
from .models import Course
from .models import Comment

from django.http import JsonResponse
from .forms import MakeUserCreationForm, ProfileEdit, CreateCourse,CreateComment,CreateReview

# Create your views here.

#For reference: Used https://github.com/divanov11/Django-2021 divanov11's (coding) method in login,logout,registry in the procedure
def userToLogin(request):
    page = 'login'

    if request.user.is_authenticated:
        return redirect('index')

    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']

        try:
            user = User.objects.get(username=username)
        except:
            messages.error(request, "Username invalid")

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return redirect('index')

        else:
           messages.error(request, "Username Or Password is invalid")

    return render(request, 'language/login_register.html')

def userToLogout(request):
    logout(request)
    messages.error(request, "User logged out!")

    return redirect('login')


def registerUser(request):
    page = 'register'
    form = MakeUserCreationForm()

    if request.method == 'POST':
        form = MakeUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.username = user.username.lower()
            user.save()


            login(request, user)
            return redirect('index')

        else:
            messages.success(request, 'Error!')   

    reg = {'page': page, 'form' : form}
    return render (request, 'language/login_register.html', reg)


@login_required(login_url="login")
def index(request):
    user = request.user
    
    profile = request.user.profile
    superuser = User.objects.filter(is_superuser=True)
    form = CreateReview()

    quizzes = Quiz.objects.all()
    courses = Course.objects.all()
    context = {'user' : user, 'profile' : profile, 'quizzes' : quizzes, 'courses' : courses, 'superuser' : superuser, 'form' : form}

    return render(request, "language/index.html", context )


def sendReview(request):
    superuser = User.objects.filter(is_superuser=True).values_list('username')

    if request.method == 'POST':
        form = CreateReview(request.POST)
        form.instance.user = request.user
     
        if form.is_valid():
            form.save()

    return HttpResponseRedirect('/')




@login_required(login_url="login")
def quiz_list(request):
    kurzus = Quiz.objects.all()
    return JsonResponse([kurz.serialize() for kurz in kurzus], safe=False)


@login_required(login_url="login")
def courseList(request):
    courses = Course.objects.all()
    return JsonResponse([course.serialize() for course in courses], safe=False)


@login_required(login_url="login")
def reviews(request):
    reviews = Review.objects.all()
    return JsonResponse([review.serialize() for review in reviews], safe=False)

@login_required(login_url="login")
def profileCheck(request):
    user = request.user
    profile = request.user.profile
    print(profile)
    context = {'profile' : profile, 'user' : user}

    return render(request, "language/profile.html", context)

@login_required(login_url="login")
def editProfile(request):
    profile = request.user.profile
    form = ProfileEdit(instance=profile)
    if request.method == "POST":
        form = ProfileEdit(request.POST, instance=profile)
        if form.is_valid:
            form.save()
        return redirect('profile')
    context = {'form' : form}
    return render(request, "language/profile_edit.html", context)


@login_required(login_url="login")
def languageQuiz(request, pk):
    user = request.user
    lang = Quiz.objects.get(title=pk)
    context = {'lang' : lang}

    return render(request, "language/language-quiz.html", context)



def savePoint(request, pk):
    user = request.user
    if request.method == 'POST':
        lang = Quiz.objects.get(title=pk)
        print(lang)
        user.profile.finished_quizzes.add(lang)

        return redirect('index')


def saveCoursePoint(request, pk):
    user = request.user
    if request.method == 'POST':
        lang = Course.objects.get(title=pk)
        user.profile.finished_courses.add(lang)

        return redirect('index')


@login_required(login_url="login")
def createCourse(request):
    profile = request.user
    form = CreateCourse()
    context = {'form' : form, 'profile' : profile}

    if request.method == "POST":
        form = CreateCourse(request.POST)
        form.instance.user = profile
        if form.is_valid():
            form.save()
            return redirect("index")
    
    return render(request, "language/create_course.html", context)


@login_required(login_url="login")
def onCourse(request, pk):
    user = request.user
    comments = Comment.objects.all()
    form = CreateComment()
    the_course = Course.objects.get(title=pk)

    if request.method == 'POST':
        form = CreateComment(request.POST)
        form.instance.user = user
        form.instance.courseToComment = the_course
    
        if form.is_valid():
                form.save()
                form=CreateComment()

    context = {'the_course' : the_course, 'user' : user, 'form' : form}

    return render(request, "language/on_course.html", context)
