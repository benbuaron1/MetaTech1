# Generated by Django 4.0.2 on 2022-02-19 11:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('meta_app', '0019_profile_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='type',
            field=models.CharField(choices=[('תלמיד', 'תלמיד'), ('מורה', 'מורה')], max_length=128),
        ),
    ]