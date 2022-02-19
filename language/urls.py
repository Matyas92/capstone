from django.urls import path
from . import views

urlpatterns = [
    path("login/", views.userToLogin, name="login"),
    path("logout/", views.userToLogout, name="logout"),

    path("", views.index, name="index"),

    path("quizzes/", views.quiz_list, name="quiz_list"),
    path("reviews/", views.reviews, name="reviews"),
    path("send-review/", views.sendReview, name="send-review"),

    path("courses/", views.courseList, name="courses"),

    path("oncourse/<str:pk>", views.onCourse, name="oncourse"),


    path("register/", views.registerUser, name="register"),
    path("profile/", views.profileCheck, name="profile"),
    path("edit-profile/", views.editProfile, name="edit-profile"),
    path("language-quiz/<str:pk>", views.languageQuiz, name="language-quiz"),

    path("save-point/<str:pk>", views.savePoint, name="save-point"),
    path("save-course-point/<str:pk>", views.saveCoursePoint, name="save-course-point"),

    path("create-course/", views.createCourse, name="create-course"),

]