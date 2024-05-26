from django.urls import path
from .views import (
    SendEmailView,
    QueriesListAPIView,
    AdminUserListAPIView,
)

urlpatterns=[
    path("send-email/", SendEmailView.as_view(), name="send-email"),
    path("queries", QueriesListAPIView.as_view(), name="queries"),
    path("adminuser",AdminUserListAPIView.as_view(), name="adminuser"),
]