# Generated by Django 4.0.2 on 2022-02-16 14:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('meta_app', '0008_profile'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='linked_in_url',
            field=models.URLField(null=True),
        ),
    ]