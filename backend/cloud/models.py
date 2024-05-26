from django.db import models
from django.template.defaultfilters import slugify
from django import forms
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