from common.json import ModelEncoder
from .models import AutomobileVO, Technician, Appointment

class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties =[
        "vin",
        "import_href",
    ]
class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties =[
        "first_name",
        "last_name",
        "employee_id",
    ]
class AppointmentEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "date_time",
        "reason",
        "status",
        "customer",
        "vin",
        "id",
        "technician",

    ]
    encoders={
        "technician":TechnicianEncoder(),
    }
    def get_extra_data(self, o):
        count = AutomobileVO.objects.filter(vin=o.vin).count()
        return {"vip_status": count > 0}