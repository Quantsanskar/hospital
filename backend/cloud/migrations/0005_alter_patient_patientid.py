# Generated by Django 5.0 on 2024-05-26 15:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cloud', '0004_patient'),
    ]

    operations = [
        migrations.AlterField(
            model_name='patient',
            name='patientId',
            field=models.CharField(default=86393, max_length=56, unique=True),
        ),
    ]
