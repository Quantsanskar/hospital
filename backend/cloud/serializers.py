from rest_framework import serializers
from .models import (
    Queries,
    AdminUser,

)

class QueriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Queries
        fields = "__all__"

class AdminUserSerializer(serializers.ModelSerializer):
    class Meta:
        model=AdminUser
        fields="__all__"