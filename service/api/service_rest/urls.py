from django.contrib import admin
from django.urls import path, include
from .views import list_technicians, delete_technician, list_appointments, show_appointment

urlpatterns = [
    path("technicians/", list_technicians, name="list_technicians"),
    path("technicians/<int:id>", delete_technician, name="delete_technician"),
    path("appointments/", list_appointments, name="list_appointments"),
    path("appointments/new", list_appointments, name="list_appointments"),
    path("appointments/<int:id>", show_appointment, name="show_appointment"),
]
