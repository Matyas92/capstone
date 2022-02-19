from django.db import models

from django.contrib.auth.models import User

from django.db.models.deletion import CASCADE
from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from embed_video.fields import EmbedVideoField

# Create your models here.


class Profile(models.Model):
    user = models.OneToOneField(User, verbose_name='profile',related_name='profile', on_delete=models.CASCADE)
    name = models.CharField(max_length=100, blank=True, null=True)
    email = models.EmailField(max_length=200, blank=True, null=True)
    location = models.CharField(max_length=100, blank=True, null=True)
    finished_quizzes = models.ManyToManyField('Quiz',  related_name='quizzes', blank=True)
    finished_courses = models.ManyToManyField('Course',  related_name='courses', blank=True)


    def __str__(self):
        return str(self.user)



def createProfile(sender,instance,created, **kwargs):
    if created:
        user = instance
        profile = Profile.objects.create(
            user=user,
            
       )    


post_save.connect(createProfile, sender=User)

def deleteUser(sender, instance, **kwargs):
    user = instance.user
    user.delete()

post_delete.connect(deleteUser, sender=Profile)

def updateProfile(sender,instance,created, **kwargs):
   profile = instance
   user = profile.user
   
   if created == False:
        user.username = profile.name
        user.save()
        
post_save.connect(updateProfile, sender=Profile)


class Course(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=200, blank=True, null=True)
    content = models.TextField(max_length=1000)
    video = EmbedVideoField()

    def __str__(self):
        return str(self.title)

    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            "content": self.content,
            "video" : self.video
        }


class Quiz(models.Model):
    title = models.CharField(max_length=200)
    subject = models.TextField(max_length=500)
 
    def __str__(self):
        return str(self.title)

    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            "subject": self.subject,
         
        }


class Review(models.Model):
    user = models.ForeignKey(User, on_delete=CASCADE)
    title = models.CharField(max_length=200)
    comment = models.TextField(max_length=500)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.comment)

    def serialize(self):
        return {
            "title": self.title,
            "comment": self.comment,
            "date": self.date,

        }
        
    class Meta:
        ordering = ['-date']


class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=CASCADE)
    courseToComment = models.ForeignKey(Course, on_delete=CASCADE)
    comment = models.CharField(max_length=250) 
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.comment

    class Meta:
        ordering = ['-date']


        