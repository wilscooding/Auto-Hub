from django.contrib import admin
from .models import Appointment, AutomobileVO, Technician

@admin.register(Appointment)
class AppointmentAdmin(admin.ModelAdmin):
    pass
@admin.register(AutomobileVO)
class AutomobileVOAdmin(admin.ModelAdmin):
    pass
@admin.register(Technician)
class TechnicianAdmin(admin.ModelAdmin):
    pass



# Register your models here.
