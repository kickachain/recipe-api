from django.urls import path
from recipes_app.api.views import RecipeList, IngredientsList, CreateRecipe, RUDRecipe, CreateIngredients, RUDIngredients

urlpatterns = [
    path('recipes/', RecipeList.as_view(), name="recipe-list"),
    path('RUD/recipes/<int:pk>/', RUDRecipe.as_view(), name="recipe-rud"),
    path('create/recipes/', CreateRecipe.as_view(), name="recipe-create"),
    path('ingredients/', IngredientsList.as_view(), name="ingredients-list"),
    path('create/ingredients/', CreateIngredients.as_view(), name="ingredients-create"),
    path('RUD/ingredients/<int:pk>/', RUDIngredients.as_view(), name="ingredients-rud"),
]
