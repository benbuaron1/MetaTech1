from enum import unique

from django.contrib.auth.forms import UserCreationForm

from django.contrib.auth.models import User
from django.core.validators import EmailValidator, MinLengthValidator
from django import forms
from django.forms import HiddenInput

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

    password2 = forms.CharField(
        label=_("Password confirmation"),
        widget=forms.PasswordInput(attrs={'autocomplete': 'new-password'}),
        strip=False,
        help_text=_("Enter the same password as before, for verification."),
    )

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

class ContactUs(forms.ModelForm):
    # first_name = forms.CharField(label='שם פרטי')
    # email = forms.EmailField(label='אימייל')

    class Meta:
        model = Lead
        fields = ['first_name','last_name','phone_number','email','message']


class ProfilePageForm(forms.ModelForm):
    user = forms.ModelChoiceField(queryset=User.objects.all(),widget=HiddenInput)
    profile_pic = forms.FileField(required=False,widget=HiddenInput)
    age = forms.IntegerField(min_value=0,required=True)
    bio = forms.Textarea()
    linked_in_url = forms.URLField(required=False)
    terms_agreed = forms.BooleanField(required=True)
    phone_numer = forms.CharField(required=True,validators=[])
    class Meta:
        model = Profile
        fields = ('phone_numer','city','age','linked_in_url','bio','terms_agreed')





