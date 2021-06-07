from rest_framework import serializers
from ingredients.models import Ingredients

class IngredientsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Ingredients
        fields = ['ingredient_id', 'ingredient', 'amount', 'measure', 'recipe_id']
