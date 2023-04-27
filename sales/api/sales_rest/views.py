from django.shortcuts import render
import json
from django.views.decorators.http import require_http_methods
from common.json import ModelEncoder
from django.http import JsonResponse
from .models import Salesperson, Customer, Sale, AutomobileVO


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["vin", "sold", "id"]


class SalesPersonListEncoder(ModelEncoder):
    model = Salesperson
    properties = ["first_name", "last_name", "employee_id", "id"]


class SalesPersonDetailEncoder(ModelEncoder):
    model = Salesperson
    properties = ["first_name", "last_name", "employee_id", "id"]


class CustomerListEncoder(ModelEncoder):
    model = Customer
    properties = ["first_name", "last_name", "address", "phone_number", "id"]


class CustomerDetailEncoder(ModelEncoder):
    model = Customer
    properties = ["first_name", "last_name", "address", "phone_number", "id"]


class SaleListEncoder(ModelEncoder):
    model = Sale
    properties = ["automobile", "salesperson", "customer", "price", "id"]
    encoders = {
        "automobile": AutomobileVOEncoder(),
        "salesperson": SalesPersonDetailEncoder(),
        "customer": CustomerDetailEncoder(),
    }


@require_http_methods(["GET", "POST"])
def api_list_salespeople(request):
    if request.method == "GET":
        salespeople = Salesperson.objects.all()
        return JsonResponse(
            {"salespeople": salespeople},
            encoder=SalesPersonDetailEncoder,
        )
    else:
        content = json.loads(request.body)
        salespeoples = Salesperson.objects.create(**content)
        return JsonResponse(
            salespeoples,
            encoder=SalesPersonDetailEncoder,
            safe=False,
        )


@require_http_methods(["DELETE", "GET"])
def api_show_salespeople(request, id):
    if request.method == "GET":
        try:
            salesperson = Salesperson.objects.get(id=id)
            return JsonResponse(
                salesperson,
                encoder=SalesPersonDetailEncoder,
                safe=False,
            )
        except Salesperson.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid salesperson id"},
                status=404,
            )
    else:
        count, _ = Salesperson.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0}, status=200 if count > 0 else 404)


@require_http_methods(["GET", "POST"])
def api_list_customers(request):
    if request.method == "GET":
        customers = Customer.objects.all()
        return JsonResponse(
            {"customers": customers},
            encoder=CustomerDetailEncoder,
        )

    else:
        content = json.loads(request.body)
        customer = Customer.objects.create(**content)
        return JsonResponse(
            customer,
            encoder=CustomerDetailEncoder,
            safe=False,
        )


@require_http_methods(["DELETE", "GET"])
def api_show_customers(request, id):
    if request.method == "GET":
        customers = Customer.objects.get(id=id)
        return JsonResponse(
            customers,
            encoder=CustomerDetailEncoder,
            safe=False,
        )
    else:
        count, _ = Customer.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0}, status=200 if count > 0 else 404)


@require_http_methods(["GET", "POST"])
def api_list_sales(request):
    if request.method == "GET":
        sales = Sale.objects.all()
        return JsonResponse({"sales": sales}, encoder=SaleListEncoder, safe=False)
    elif request.method == "POST":
        try:
            content = json.loads(request.body)

            vin = content.get("automobile")
            print(vin)
            if not vin:
                return JsonResponse(
                    {"message": "Missing automobile key in the request body"},
                    status=400,
                )
            try:
                automobile = AutomobileVO.objects.get(vin=vin)
                content["automobile"] = automobile
            except AutomobileVO.DoesNotExist:
                return JsonResponse({"message": "Invalid vin"}, status=404)

            customers = content.get("customer")
            print(customers)
            if not customers:
                return JsonResponse(
                    {"message": "Missing customer key in the request body"}, status=400
                )
            try:
                first_name, last_name = customers.split(" ")
                customer = Customer.objects.get(
                    first_name=first_name, last_name=last_name
                )
                content["customer"] = customer
            except Customer.DoesNotExist:
                return JsonResponse({"message": "Invalid customer id"}, status=404)

            salesperson = content.get("salesperson")
            print(salesperson)
            if not salesperson:
                return JsonResponse(
                    {"message": "Missing salesperson key in the request body"},
                    status=400,
                )
            try:
                first_name, last_name = salesperson.split(" ")
                salesperson = Salesperson.objects.get(
                    first_name=first_name, last_name=last_name
                )
                content["salesperson"] = salesperson
            except Salesperson.DoesNotExist:
                return JsonResponse({"message": "Invalid salesperson id"}, status=404)

            sales = Sale.objects.create(**content)
            return JsonResponse(sales, encoder=SaleListEncoder, safe=False)
        except json.JSONDecodeError:
            return JsonResponse(
                {"message": "Invalid JSON in the request body"}, status=400
            )
    else:
        return JsonResponse({"message": "Method Not Allowed"}, status=405)


@require_http_methods(["DELETE", "GET"])
def api_show_sales(request, id):
    if request.method == "GET":
        sales = Sale.objects.get(id=id)
        return JsonResponse(
            sales,
            encoder=SaleListEncoder,
            safe=False,
        )
    else:
        count, _ = Sale.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0}, status=200 if count > 0 else 400)
