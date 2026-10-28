from django.db import models

class Announcement(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True)
    date = models.DateField(null=True, blank=True) 
    updated_at = models.DateTimeField(auto_now=True)  # New date field

    def __str__(self):
        return self.title
