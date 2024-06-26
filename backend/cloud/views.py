import json
from django.shortcuts import render
from django.http import JsonResponse

from h11 import Response
from rest_framework import generics, response, status
from rest_framework.views import APIView
from rest_framework.generics import ListCreateAPIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import RetrieveUpdateDestroyAPIView

from django.views.decorators.csrf import csrf_exempt


from .models import (
    Queries,
    AdminUser,
    Patient,
)
from .serializers import (
    QueriesSerializer,
    AdminUserSerializer,
    PatientSerializer,
)
# Create your views here.


class SendEmailView(APIView):

    def post(self, request):
        body = request.data.get("body")
        name = request.data.get("name")
        email = request.data.get("email")
        phone = request.data.get("phone")
        mail = (
            f"Message: {body} sent from {name}, mobile number: {phone}, email: {email}"
        )
        if mail:
            send_email(mail)
            return response.Response({"message": "Email sent successfully"})
        else:
            return response.Response(
                {"error": "Invalid request data"}, status=status.HTTP_400_BAD_REQUEST
            )

    def get(self, request):
        body = request.query_params.get("body")
        name = request.query_params.get("name")
        email = request.query_params.get("email")
        phone = request.query_params.get("phone")
        mail = (
            f"Message: {body} sent from {name}, mobile number: {phone}, email: {email}"
        )
        if mail:
            send_email(mail)
            return response.Response({"message": "Email sent successfully"})
        else:
            return response.Response(
                {"error": "Invalid request data"}, status=status.HTTP_400_BAD_REQUEST
            )


class QueriesListAPIView(generics.ListCreateAPIView):
    serializer_class = QueriesSerializer

    def get_queryset(self):
        return Queries.objects.all()


class AdminUserListAPIView(APIView):
    def get(self, request):
        users = AdminUser.objects.all()
        serializer = AdminUserSerializer(users, many=True)
        return Response(serializer.data)


class PatientListAPIView(generics.ListCreateAPIView):
    serializer_class = PatientSerializer

    def get_queryset(self):
        return Patient.objects.all()


@csrf_exempt
def patient_details(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        patientId = data.get('patientId')
        password = data.get('password')

        try:
            patient = Patient.objects.get(
                patientId=patientId)
            serializer = PatientSerializer(patient)
            return JsonResponse(serializer.data, safe=False)
        except Patient.DoesNotExist:
            return JsonResponse({'error': 'Patient not found'}, status=404)

    return JsonResponse({'error': 'Invalid request method'}, status=405)
