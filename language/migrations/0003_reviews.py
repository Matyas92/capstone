# Generated by Django 3.2.9 on 2022-01-10 15:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('language', '0002_auto_20220109_2125'),
    ]

    operations = [
        migrations.CreateModel(
            name='Reviews',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('comment', models.TextField(max_length=500)),
            ],
        ),
    ]
