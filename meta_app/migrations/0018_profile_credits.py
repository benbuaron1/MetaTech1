# Generated by Django 4.0.2 on 2022-02-18 13:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('meta_app', '0017_coursebystudnet'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='credits',
            field=models.IntegerField(blank=True, default=0, max_length=1000, null=True),
        ),
    ]
