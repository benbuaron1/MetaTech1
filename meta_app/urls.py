from django.urls import path
from . import views
urlpatterns = [
    path("",views.index, name='index'),
    path('index2', views.index2, name='index2'),
    path('sign_up',views.sign_up,name='sign_up'),
    path('students',views.students,name='students'),
    path('delete_student/<int:student_id>',views.delete_student_func,name='delete_student'),
    path('edit_student/<int:student_id>',views.edit_student_func,name='edit_student')
]

