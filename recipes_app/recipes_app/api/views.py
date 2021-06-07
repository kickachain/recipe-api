from rest_framework import status
from rest_framework.views import APIView
from rest_framework.generics import CreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView
from rest_framework.response import Response
from rest_framework.serializers import Serializer

from recipes.models import Recipes
from ingredients.models import Ingredients
from recipes.serializers import RecipeSerializer
from ingredients.serializers import IngredientsSerializer


class CreateRecipe(CreateAPIView):
    queryset = Recipes.objects.all()
    serializer_class = RecipeSerializer

class RUDRecipe(RetrieveUpdateDestroyAPIView):
    queryset = Recipes.objects.all()
    serializer_class = RecipeSerializer

class RecipeList(ListAPIView):
    queryset = Recipes.objects.all()
    serializer_class = RecipeSerializer

class CreateIngredients(CreateAPIView):
    queryset = Ingredients.objects.all()
    serializer_class = IngredientsSerializer

class RUDIngredients(RetrieveUpdateDestroyAPIView):
    queryset = Ingredients.objects.all()
    serializer_class = IngredientsSerializer

class IngredientsList(ListAPIView):
    queryset = Ingredients.objects.all()
    serializer_class = IngredientsSerializer
