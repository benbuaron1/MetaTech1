# Generated by Django 4.0.2 on 2022-02-18 11:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('meta_app', '0014_alter_profile_profile_pic'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='profile_pic',
            field=models.ImageField(blank=True, max_length=1500, null=True, upload_to='meta_app/static/images'),
        ),
    ]
