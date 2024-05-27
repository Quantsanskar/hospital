from django.contrib import admin
from .models import (
    Queries,
    AdminUser,
    Patient,
)
# Register your models here.
admin.site.register(Queries)
admin.site.register(AdminUser)
admin.site.register(Patient)