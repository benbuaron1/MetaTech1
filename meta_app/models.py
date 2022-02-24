from django.contrib.auth.models import User
from django.db import models
from django.db.models import RESTRICT, CASCADE


class MetaModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_deleted = models.BooleanField(default=False)

    class Meta:
        abstract = True


class Level(models.Model):
    type = models.CharField(max_length=512,null=False,blank=False)

    def __str__(self):
        return self.type

class Student(models.Model):
    level = models.ForeignKey(Level,on_delete=RESTRICT,null=True,blank=True)
    first_name = models.CharField(max_length=128,null=False,blank=False,)
    last_name = models.CharField(max_length=128,null=False,blank=False)
    email = models.EmailField(null=False,blank=False,unique=True)
    city = models.CharField(max_length=128,null=False,blank=False)
    address = models.CharField(max_length=512,null=False,blank=False)
    phone_num = models.CharField(max_length=12,null=False,blank=False)
    terms_agreed = models.BooleanField(null=False)
    credit = models.IntegerField(max_length=1000,null=True,blank=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

class Lead(MetaModel):
    first_name = models.CharField(max_length=128,null=False,blank=False)
    last_name = models.CharField(max_length=128,null=False,blank=False)
    email = models.EmailField()
    phone_number = models.CharField(max_length=11,null=False,blank=True)
    message = models.TextField(max_length=512, null=True,blank=True)
    spoken_with = models.BooleanField(null=True)

    def __str__(self):
        return f"{self.first_name} {self.phone_number}"
types = (
    ('תלמיד','תלמיד'),
    ('מורה','מורה'),

)

class Profile(MetaModel):
    user = models.OneToOneField(User,on_delete=CASCADE,null=True)
    profile_pic = models.ImageField(max_length=1500,upload_to='meta_app/static/images',null=True,blank=True,default='https://pngset.com/images/blue-person-icon-pictures-to-pin-pinsdaddy-blue-people-logo-symbol-hand-word-furniture-transparent-png-104501.png')
    bio = models.TextField(max_length=1000,null=True,blank=True)
    linked_in_url = models.CharField(max_length=1000,null=True,blank=True)
    terms_agreed = models.BooleanField(null=False,blank=False)
    phone_numer = models.CharField(max_length=15,null=True,blank=True)
    city = models.CharField(max_length=128,null=True,blank=True)
    credits = models.IntegerField(max_length=1000,null=True,blank=True,default=0)
    type = models.CharField(max_length=128,null=False,blank=False,choices=types)
    birth_date = models.DateField(null=True,blank=True)

    def __str__(self):
        return str(self.user)


class Course(MetaModel):
    name = models.CharField(max_length=512,null=False,blank=False)
    teacher = models.ForeignKey(Profile,on_delete=RESTRICT,null=False,blank=False)
    description = models.TextField(max_length=512,null=False,blank=False)

class CourseByStudnet(MetaModel):
    course = models.ForeignKey(Course,on_delete=RESTRICT,null=False,blank=False)
    student = models.ForeignKey(Profile,on_delete=RESTRICT,null=False,blank=False)
    grade = models.IntegerField(null=True,blank=True)


class StudentTeacherLesson(MetaModel):
    student = models.ForeignKey(Profile,on_delete=RESTRICT,related_name='תלמיד')
    teacher = models.ForeignKey(Profile,on_delete=RESTRICT,related_name='מורה')
    subject = models.TextField(max_length=1028, null=False, blank=False)
    record_url = models.URLField(blank=True, null=True)
    lesson_date = models.DateField(null=False,blank=False)
    lesson_material = models.URLField(null=True,blank=True)

    def __str__(self):
        return f"{self.student} by {self.teacher} at {self.lesson_date}"



