# Generated by Django 4.0.2 on 2022-02-24 14:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('meta_app', '0024_remove_profile_age_profile_birth_date'),
    ]

    operations = [
        migrations.AddField(
            model_name='studentteacherlesson',
            name='lesson_material',
            field=models.FileField(blank=True, null=True, upload_to=''),
        ),
    ]