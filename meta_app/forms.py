from enum import unique
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.models import User
from django.contrib.auth.views import LoginView
from django.core.validators import EmailValidator, MinLengthValidator
from django import forms
from django.forms import HiddenInput, DateInput

from .models import *
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _


def validate_phone(number):
    if not number.isdigit():
        raise ValidationError(
            _('Enter a valid phone number with numbers only'),params={'number':number},

        )




class MyAuthForm(AuthenticationForm):
    error_messages = {
        'invalid_login': _(
            "בן בוארון."
        ),
        'inactive': _("This account is inactive."),
    }


class MyLoginView(LoginView):
    authentication_form = MyAuthForm

class CustomAuthForm(AuthenticationForm):
    def __init__(self, *args, **kwargs):
        self.error_messages['invalid_login'] = 'Custom error'
        super().__init__(*args, **kwargs)


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
    first_name = forms.CharField(label='שם פרטי')
    last_name = forms.CharField(label='שם משפחה')
    email = forms.EmailField(label='אימייל')
    phone_number = forms.CharField(label='מספר פלאפון')
    message = forms.CharField(label='הודעה אישית',widget=forms.Textarea)

    class Meta:
        model = Lead
        fields = ['first_name','last_name','phone_number','email','message']

class MyDateWidget(DateInput):
    input_type = "date"

class ProfilePageForm(forms.ModelForm):
    user = forms.ModelChoiceField(queryset=User.objects.all(),widget=HiddenInput)
    profile_pic = forms.FileField(required=False,widget=HiddenInput)
    birth_date = forms.DateField(required=True, label="תאריך לידה", widget=MyDateWidget())
    bio = forms.CharField(label="קצת עליי",widget=forms.Textarea)
    terms_agreed = forms.BooleanField(required=True, label="הסכמה לתנאי השימוש")
    phone_numer = forms.CharField(required=True,validators=[validate_phone], label="מספר טלפון")
    city = forms.CharField(required=True,label='עיר מגורים')
    class Meta:
        model = Profile
        fields = ('phone_numer','city','birth_date','bio','terms_agreed')




