# Generated by Django 3.2.9 on 2022-01-10 15:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('language', '0003_reviews'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Reviews',
            new_name='Review',
        ),
    ]