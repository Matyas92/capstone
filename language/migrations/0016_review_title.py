# Generated by Django 3.2.9 on 2022-01-13 01:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('language', '0015_auto_20220113_0132'),
    ]

    operations = [
        migrations.AddField(
            model_name='review',
            name='title',
            field=models.CharField(default=1, max_length=200),
            preserve_default=False,
        ),
    ]
