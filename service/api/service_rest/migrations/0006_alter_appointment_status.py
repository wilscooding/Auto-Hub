# Generated by Django 4.0.3 on 2023-04-26 16:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0005_appointment_vip_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appointment',
            name='status',
            field=models.CharField(default='active', max_length=100),
        ),
    ]
