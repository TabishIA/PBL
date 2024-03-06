document.addEventListener('DOMContentLoaded', function() {
      document.getElementById('registrationForm').addEventListener('submit', function(event) {
         if (!validateForm()) {
            event.preventDefault();
         }
      });

      function validateForm() {
         var checkbox = document.getElementById('declarationCheckbox');
         var password = document.querySelector('input[type="password"]');
         var confirmPassword = document.querySelector('input[type="password"][placeholder="Confirm Password"]');

         // Check if the checkbox is not checked
         if (!checkbox.checked) {
            alert("Please declare that the information provided is true and correct.");
            return false;
         }

         // Check if the password and confirm password match
         if (password.value !== confirmPassword.value) {
            alert("Passwords do not match. Please re-enter your passwords.");
            return false;
         }

         // If everything is valid, the form will be submitted
         return true;
      }
   });
