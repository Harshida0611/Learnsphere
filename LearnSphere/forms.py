from django import forms

class ForgotPasswordForm(forms.Form):
    email = forms.EmailField(label="Enter your registered email")
