from django.urls import path
from . import views
urlpatterns = [
    path("",views.index2, name='index'),
    path('index2', views.index2, name='index2'),
    path('sign_up',views.sign_up,name='sign_up'),
    path('personal_page',views.personal_page),
    path('contact_us',views.contact_us,name='contact_us'),
    path('create_profile',views.create_profile,name='create_profile'),
    # path('students',views.students,name='students'),
    # path('delete_student/<int:student_id>',views.delete_student_func,name='delete_student'),
    path('edit_profile',views.edit_profile,name='edit_profile')
]

