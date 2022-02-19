from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required
from django.contrib.auth.views import SuccessURLAllowedHostsMixin
from django.contrib.sites import requests
from django.core.mail import send_mail, BadHeaderError
from django.http import HttpResponse
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

# class LoginView(SuccessURLAllowedHostsMixin, FormView):
#
#     template_name = 'index2.html'

# @admin_only
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
        teachers_set = set([l.teacher for l in lessons])
        if request.method == 'GET':
            return render(request,'student_page.html',context={'lessons':lessons,'teachers':teachers_set})
        elif request.method == 'POST':
            pass
    elif group == 'teacher':
        lessons = StudentTeacherLesson.objects.filter(teacher=request.user.profile)
        students_set = set([l.student for l in lessons])
        return render(request,'teacher_page.html',{'lessons':lessons,'students':students_set})



    return render(request, 'personal_page.html', {'profile': profile})

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



def create_profile(request):
    if request.method == 'GET':
        form = ProfilePageForm(initial={'user': request.user})
        form.instance.user = request.user
        return render(request, 'create_profile.html', {'form': form})
    elif request.method == 'POST':
        form = ProfilePageForm(data=request.POST)
        form.instance.user = request.user
        if form.is_valid():
            form.save()
        return redirect('/')

# class CreateProfilePageView(CreateView):
#     class Meta:
#         model = Profile
#         form_class = ProfilePageForm
#         template_name = 'registration/create_profile.html'
#    def form_valid(self, form):
#         form.instance.user = self.request.user
#         return super().form_valid(form)
#
#

#
#     def get_queryset(self):
#         return self


# def students(request):
#     studs = Student.objects.all()
#     return render(request, 'students.html', context={'students': studs})

# def edit_student_func(request, student_id):
#     student = Student.objects.get(pk=student_id)
#     form = Sign_up_form(instance=student, data=request.POST)
#     if form.is_valid():
#         form.save()
#         return students(request)
#     # form.save()
#     return render(request, 'edit_student.html',
#                   context={'form': form, 'student': student})

# def delete_student_func(request, student_id):
#     student = Student.objects.get(pk=student_id)
#
#     if request.method == 'POST':
#         student.delete()
#         return students(request)
#     return render(request, template_name='delete_student.html', context={'students': student})


