from django.shortcuts import render
from rest_framework import viewsets
from .serializers import LunchSerializer
from .models import Lunch
from rest_framework.permissions import IsAuthenticated
from django_filters.rest_framework import DjangoFilterBackend

# Create your views here.
class LunchView(viewsets.ReadOnlyModelViewSet):
    queryset = Lunch.objects.all()
    serializer_class = LunchSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['date']
    
