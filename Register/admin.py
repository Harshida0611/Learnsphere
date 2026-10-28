from django.contrib import admin
from .models import UserProfile

class UserProfileAdmin(admin.ModelAdmin):
    # Use a list for list_display instead of a tuple
    list_display = ('first_name', 'last_name', 'phone', 'email', 'technology', 'photo_thumbnail')

    # Add filters for easy searching
    list_filter = ('technology', 'email')

    # Specify search fields (this allows admins to search based on these fields)
    search_fields = ('first_name', 'last_name', 'phone', 'email')

    # Optional: You can set a specific form layout to customize how the fields are displayed in the admin page
    fieldsets = (
        (None, {
            'fields': ('first_name', 'last_name', 'phone', 'email', 'password', 'technology', 'photo')
        }),
    )

    # Optional: Define additional admin functionalities
    readonly_fields = ('password',)

    # Display the photo in admin for quick preview
    def photo_thumbnail(self, obj):
        if obj.photo:
            return f'<img src="{obj.photo.url}" width="100" height="100"/>'
        return "No photo"
    
    photo_thumbnail.allow_tags = True  # allow HTML in list view


# Register the admin class with the model
admin.site.register(UserProfile, UserProfileAdmin)
