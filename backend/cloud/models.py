from django.db import models
from django.template.defaultfilters import slugify
from django import forms

import random
from random import randint
# Create your models here.

class Queries(models.Model):
    FirstName = models.CharField(max_length=56, null=False)
    LastName = models.CharField(max_length=56, null=False)
    Email = models.EmailField(max_length=254, null=False)
    PhoneNumber = models.CharField(max_length=13, null=False, default="+91")
    Message = models.CharField(max_length=500, null=False)

class AdminUser(models.Model):
    UserID=models.CharField(max_length=56, null=False)
    Password=models.CharField(max_length=56, null=False)

class Patient(models.Model):
    firstName=models.CharField(max_length=56, null=False)
    lastName=models.CharField(max_length=56, null=False)
    email=models.CharField(max_length=56, null=False)
    phone=models.CharField(max_length=13, null=False, default="+91")
    disease=models.CharField(max_length=56, null=False, default="None")
    treatment_start_date = models.CharField(max_length=56, null=False, default="2024-05-26")
    treatment_end_date = models.CharField(max_length=56, null=False, default="2024-08-26")
    doctor_assigned=models.CharField(max_length=56, null=False, default="None")
    address=models.CharField(max_length=56, null=False)
    password=models.CharField(max_length=56, null=False)
    patientId=models.CharField(max_length=56, null=False, default=random.randint(11111,99999), unique=True)
