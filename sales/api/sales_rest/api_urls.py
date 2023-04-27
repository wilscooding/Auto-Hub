from django.urls import path
from .views import (
    api_list_salespeople,
    api_list_customers,
    api_list_sales,
    api_show_customers,
    api_show_sales,
    api_show_salespeople,
)

urlpatterns = [
    path("salespeople/", api_list_salespeople, name="api_list_salespeople"),
    path("customers/", api_list_customers, name="api_list_customers"),
    path("sales/", api_list_sales, name="api_list_sales"),
    path("salespeople/<int:id>/", api_show_salespeople, name="api_show_salespeople"),
    path("customers/<int:id>/", api_show_customers, name="api_show_customers"),
    path("sales/<int:id>/", api_show_sales, name="api_show_sales"),
]
