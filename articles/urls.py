from django.urls import path
from . import views

#to spacify which url to call on action by name on which app
app_name='articles'


#path, views, name for linking

urlpatterns = [
    path('', views.Articles, name="list"),
    path('create/', views.article_create, name="create"),
    path('<slug:slug>/', views.article_detail, name="detail"),
]