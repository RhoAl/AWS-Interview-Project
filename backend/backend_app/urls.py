from django.urls import path
from . import views

# URL Configuration for backend_app
urlpatterns = [
    path('', views.home),
]