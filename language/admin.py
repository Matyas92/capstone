from django.contrib import admin

# Register your models here.
from .models import *

admin.site.register(Quiz)
admin.site.register(Review)
admin.site.register(Profile)
admin.site.register(Course)

admin.site.register(Comment)

