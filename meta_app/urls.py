from django.urls import path
from . import views

urlpatterns = [
    path("", views.index2, name='index'),
    path('sign_up', views.sign_up, name='sign_up'),
    path('personal_page', views.personal_page),
    path('contact_us', views.contact_us, name='contact_us'),
    path('create_profile', views.create_profile, name='create_profile'),
    path('edit_profile', views.edit_profile, name='edit_profile'),
    path('private_lesson', views.private_lesson, name='private_lesson'),
    path('coming_soon', views.coming_soon, name='coming_soon'),
    path('online_courses', views.online_courses, name='online_courses'),

]
