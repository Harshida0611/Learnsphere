function setFormAction() {
    const form = document.getElementById('login-form')
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const studentRadio = document.getElementById('student')
    const adminRadio = document.getElementById('admin')
  
    // Admin credentials check (front-end only)
    const adminEmail = 'admin@gmail.com'
    const adminPassword = 'admin'
  
   
    if (email === adminEmail && password === adminPassword) {
      if (adminRadio.checked) {
        form.action = "{% url 'dashboard' %}"
        form.submit() // Submit the form to the dashboard URL
      } else {
        alert('Please select Admin to log in as Admin.')
      }
    }
     else if (studentRadio.checked) {
        if (studentCredentials[email] && studentCredentials[email] === password) {
            form.action = "{% url 'studentdash' %}"; // Redirect student to courses page
            form.submit(); // Submit the form to the student's course page URL
        } else {
            alert('Invalid student credentials. Please check your email and password.');
        }
    } 
    // If user selects a type but the credentials do not match
    else {
        alert('Please select a user type (Student or Admin).');
    }
  }