from string import digits
from tkinter import Menu
from django.db import models

# Create your models here.

class Lunch(models.Model):
    date = models.CharField(max_length=4)
    menu = models.TextField()