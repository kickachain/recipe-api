from django.db import models
from recipes.models import Recipes

# Create your models here.
class Ingredients(models.Model):
    ingredient_id = models.AutoField(primary_key=True)
    ingredient = models.CharField(max_length=200)
    amount = models.CharField(max_length=200)
    measure = models.CharField(max_length=200)
    recipe_id = models.ForeignKey(Recipes, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.Ingredient}"
