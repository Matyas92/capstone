# Generated by Django 3.2.9 on 2022-01-12 20:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('language', '0011_course_video'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='finished_courses',
            field=models.ManyToManyField(blank=True, related_name='courses', to='language.Course'),
        ),
    ]
