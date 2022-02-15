from enum import unique

from django.contrib.auth.forms import UserCreationForm

from django.contrib.auth.models import User
from django.core.validators import EmailValidator, MinLengthValidator
from django import forms
from .models import *
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _


def validate_phone(number):
    if not number.isdigit():
        raise ValidationError(
            _('Enter a valid phone number with numbers only'),params={'number':number},
        )
# validators=[EmailValidator(message='Invalid Email, Try again!')

# class Sign_up_form(forms.ModelForm):
#     email = forms.EmailField(required=True)
#     phone_num = forms.CharField(required=True,validators=[MinLengthValidator(10,''),validate_phone])
#     terms_agreed = forms.BooleanField(required=True)
#     class Meta:
#         model = Student
#         fields = ['first_name', 'last_name','email','city','address','phone_num','terms_agreed']

class UserCreationForm(UserCreationForm):
    username = forms.EmailField(required=True,label='Email',validators=[])
    first_name = forms.CharField(required=True,label='First Name')
    last_name = forms.CharField(required=True,label='Last Name')
    class Meta:
        model= User
        fields = ['first_name','last_name','username','password1','password2']

    def save(self, commit=True):
        user = super(UserCreationForm,self).save(commit=False)
        user.email = self.cleaned_data['username']
        user.first_name = self.cleaned_data['first_name']
        user.last_name = self.cleaned_data['last_name']
        if commit:
            user.save()
        return user


