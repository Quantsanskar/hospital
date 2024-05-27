from django.urls import path
from .views import (
    SendEmailView,
    QueriesListAPIView,
    AdminUserListAPIView,
    PatientListAPIView,
    patient_details,
)

urlpatterns = [
    path("send-email/", SendEmailView.as_view(), name="send-email"),
    path("queries", QueriesListAPIView.as_view(), name="queries"),
    path("adminuser", AdminUserListAPIView.as_view(), name="adminuser"),
    path("patient", PatientListAPIView.as_view(), name="patient"),
    path('patient/details', patient_details, name="details"),
]
