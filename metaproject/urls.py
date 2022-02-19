"""metaproject URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.contrib.auth import views as auth_views
# login_action = False
# url1 = ''
#
# if login_action is True:
#     url1 = path('', auth_views.LoginView.as_view())
# else:
#     url1 =

urlpatterns = [
    path('logout', auth_views.logout_then_login),
    path('login', auth_views.LoginView.as_view()),
    path('',include('meta_app.urls')),
    path('admin/', admin.site.urls),
]
