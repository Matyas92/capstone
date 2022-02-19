from django.forms import ModelForm
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from .models import Profile
from .models import Course
from .models import Comment
from .models import Review

from django import forms


class MakeUserCreationForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['username', 'password1', 'password2']
        labels = {
            'username': 'Name',
            
        }

    def __init__(self, *args, **kwargs):
        super(MakeUserCreationForm, self).__init__(*args, **kwargs)

        for name, field in self.fields.items():
            field.widget.attrs.update({'class' : 'form-control'})

class ProfileEdit(ModelForm):
    class Meta:
        model = Profile
        fields = ['name', 'email', 'location']

    def __init__(self, *args, **kwargs):
        super(ProfileEdit, self).__init__(*args, **kwargs)

        for name, field in self.fields.items():
            field.widget.attrs.update({'class' : 'form-control'})



class CreateCourse(ModelForm):
    class Meta:
        model = Course
        fields = ['title','content','video']
        labels = {
         'title': '',
         'content' : '',
         'video' : ''
                }
        widgets = {

                'title' :forms.TextInput(attrs={'style': 'width:50rem','class' :'form-control', 'placeholder' :'Title' }),
                'content':forms.Textarea(attrs={'style': 'width:50rem; height:10rem', 'class' :'form-control', 'placeholder' :'Content'}),
                'video':forms.TextInput(attrs={'style': 'width:50rem', 'class' :'form-control', 'placeholder' :'Video'})

            }

class CreateComment(ModelForm):
    class Meta:
        model = Comment
        fields = ['comment']

        widgets = {
            'comment' :forms.Textarea(attrs={'class' :'form-control', 'placeholder' :'Comment..here' }),
        }

class CreateReview(ModelForm):
    class Meta:
        model = Review
        fields = ['title','comment']

        widgets = {
            'title' :forms.TextInput(attrs={'style': 'width:50rem','class' :'form-control', 'placeholder' :'Title' }),

            'comment' :forms.Textarea(attrs={'style': 'width:50rem; height:10rem', 'placeholder' :'Comment..here' }),
        }
