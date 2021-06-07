from recipes.models import Recipes
from rest_framework import serializers


class RecipeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Recipes
        fields = ['recipe_id', 'name', 'description', 'author', 'pub_date']
