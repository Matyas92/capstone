# Generated by Django 3.2.9 on 2022-01-13 00:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('language', '0013_comment'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='comment',
            options={'ordering': ['-date']},
        ),
    ]
