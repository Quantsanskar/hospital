from django.contrib import admin
from .models import (
    Queries,
    AdminUser,
)
# Register your models here.
admin.site.register(Queries)
admin.site.register(AdminUser)