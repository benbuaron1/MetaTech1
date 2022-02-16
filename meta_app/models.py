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
    message = models.CharField(max_length=512, null=True,blank=True)
    spoken_with = models.BooleanField(null=True)

    def __str__(self):
        return f"{self.first_name} {self.phone_number}"


class Profile(MetaModel):
    user = models.OneToOneField(User,on_delete=CASCADE,null=True)
    profile_pic = models.FileField(null=True,blank=True)
    age = models.IntegerField(max_length=10,null=False,blank=False)
    bio = models.TextField(max_length=1000,null=True,blank=True)
    linked_in_url = models.CharField(max_length=1000,null=True,blank=True)

    def __str__(self):
        return str(self.user)




