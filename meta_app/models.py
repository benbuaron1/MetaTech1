from django.db import models
from django.db.models import RESTRICT

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

    def __str__(self):
        return f"{self.first_name} {self.last_name}"





