# Generated by Django 3.2.9 on 2022-01-12 14:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('language', '0007_profile_finished_courses'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Courses',
            new_name='Quiz',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='finished_courses',
        ),
        migrations.AddField(
            model_name='profile',
            name='finished_quizzes',
            field=models.ManyToManyField(blank=True, related_name='quizzes', to='language.Quiz'),
        ),
    ]
