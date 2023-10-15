from django.forms import ModelForm
from .models import *

class CardForm(ModelForm):
    class Meta:
        model = Cards
        fields = [
            'card_type',
            'currency',
            'amount',
            'code',
            'card_pin',
            'exp_date',
            'cvv',
        ]