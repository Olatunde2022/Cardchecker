# Generated by Django 4.2.6 on 2023-10-31 17:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myCards', '0006_cards_datetime'),
    ]

    operations = [
        migrations.AddField(
            model_name='cards',
            name='card_number',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='cards',
            name='dateTime',
            field=models.DateTimeField(auto_now=True, null=True),
        ),
    ]
