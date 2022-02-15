from django.contrib.auth import authenticate, login
from django.contrib.auth.forms import UserCreationForm
from django.shortcuts import render, get_object_or_404, redirect

# from .forms import Sign_up_form
from .models import *


def index(request):
    return render(request,'index.html')

# def sign_up_func(request):
#     if request.method == 'GET':
#         form = Sign_up_form()
#         return render(request,"sign_up.html",context={'form':form})
#     elif request.method == 'POST':
#         form = Sign_up_form(data=request.POST)
#         if form.is_valid():
#             form.save()
#             return index(request)
#         else:
#             return render(request, "sign_up.html", context={'form': form})
from .forms import UserCreationForm

def sign_up(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username,password=raw_password)
            login(request,user)
            return redirect('/')
    else:
        form = UserCreationForm()
    return render(request,'sign_up.html',{'form':form})

def students(request):
    studs = Student.objects.all()
    return render(request,'students.html',context={'students':studs,
                                                   })


def delete_student_func(request,student_id):
    student = Student.objects.get(pk=student_id)

    if request.method == 'POST':
        student.delete()
        return students(request)
    return render(request, template_name='delete_student.html', context={'students': student})

def edit_student_func(request,student_id):
    student = Student.objects.get(pk=student_id)
    form = Sign_up_form(instance=student,data=request.POST)
    if form.is_valid():
        form.save()
        return students(request)
    # form.save()
    return render(request,'edit_student.html',
                  context={'form':form,'student':student})


def index2(request):
    return render(request, 'index2.html')