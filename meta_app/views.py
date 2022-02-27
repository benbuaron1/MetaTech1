from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required
from django.contrib.auth.views import SuccessURLAllowedHostsMixin
from django.contrib.sites import requests
from django.core.exceptions import ValidationError
from django.core.mail import send_mail, BadHeaderError
from django.http import HttpResponse, FileResponse
from django.shortcuts import render, get_object_or_404, redirect
from .decorators import *
from django.views.generic import CreateView, FormView
from .models import *
from .forms import UserCreationForm, ContactUs, ProfilePageForm
from django.contrib.auth.models import Group


def index(request):
    return render(request, 'index.html')

@unauthenticated_user
def sign_up(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            group = Group.objects.get(name='student')
            user.groups.add(group)
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            return redirect('/')
    else:
        form = UserCreationForm()
    return render(request, 'sign_up.html', {'form': form})


def index2(request):
    return render(request, 'index2.html')


@login_required
def personal_page(request):
    group = None
    profile = Profile.user

    if request.user.groups.exists():
        group = request.user.groups.all()[0].name
    if group == 'admin':
        return render(request,'admin_page.html',)
    elif group == 'student':
        lessons = StudentTeacherLesson.objects.filter(student=request.user.profile)
        lessons = lessons.order_by('-lesson_date')
        teachers_set = set([l.teacher for l in lessons])
        return render(request,'student_page.html',context={'lessons':lessons,'teachers':teachers_set})
    elif group == 'teacher':
        lessons = StudentTeacherLesson.objects.filter(teacher=request.user.profile)
        lessons = lessons.order_by('-lesson_date')
        students_set = set([l.student for l in lessons])
        return render(request,'teacher_page.html',{'lessons':lessons,'students':students_set})
    return render(request, 'personal_page.html', {'profile': profile})

def edit_profile(request):
    profile = Profile.user
    if request.method == 'POST':
        form = ProfilePageForm(instance=request.user.profile,data=request.POST,initial={'user': request.user})
        if form.is_valid():
            form.save()
            return redirect('/personal_page')
    elif request.method == 'GET':
        form = ProfilePageForm(instance=request.user.profile,initial={'user': request.user})
    return render(request,'edit_profile.html',{'form':form})

def contact_us(request):
    if request.method == 'GET':
        form = ContactUs()
        return render(request, 'contact_us.html', {'form': form})
    elif request.method == 'POST':
        form = ContactUs(data=request.POST)
        if form.is_valid():
            form.save()
        try:
            send_mail(f"Hey", 'We will contact you soon!', 'Ben.buaron1@gmail.com', [form['email']])
        except BadHeaderError:
            return HttpResponse('Invalid')

        return redirect('/')


@login_required
def create_profile(request):
    if request.method == 'GET':
        form = ProfilePageForm(initial={'user': request.user})
        # form.instance.user = request.user
        return render(request, 'create_profile.html', {'form': form})
    elif request.method == 'POST':
        form = ProfilePageForm(data=request.POST)
        form.instance.user = request.user
        if form.is_valid():
            form.save()
            return redirect('/')
        else:
            form = ProfilePageForm(data=request.POST)
            return render(request, 'create_profile.html', {'form': form})


