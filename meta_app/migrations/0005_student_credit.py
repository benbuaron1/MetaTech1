# Generated by Django 4.0.2 on 2022-02-15 21:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('meta_app', '0004_alter_student_terms_agreed'),
    ]

    operations = [
        migrations.AddField(
            model_name='student',
            name='credit',
            field=models.IntegerField(blank=True, max_length=1000, null=True),
        ),
    ]