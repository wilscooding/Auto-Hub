# Generated by Django 4.0.3 on 2023-04-26 14:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0004_alter_appointment_vin'),
    ]

    operations = [
        migrations.AddField(
            model_name='appointment',
            name='vip_status',
            field=models.BooleanField(default=False),
        ),
    ]
