//Κανόνας για ταίριασμα κωδικ΄ών
function checkPasswordMatch(input) {
    const passwordInput = document.getElementById('password');
    const passwordValidationInput = document.getElementById('password-validation');
    const passwordError = document.getElementById('passwordError');
  
    if (passwordInput.value !== passwordValidationInput.value) {
      input.setCustomValidity('Οι κωδικοί δεν ταιριάζουν.');
      passwordError.style.display = 'block';
      passwordError.style.textAlign = 'center';
      passwordError.textContent = 'Οι κωδικοί δεν ταιριάζουν.';
    } else {
      input.setCustomValidity('');
      passwordError.style.display = 'none';
    }
  }
  
  
  

//Κανόνας για έλεγχο ηλικίας
var birthdayInput = document.getElementById('birthday');

function validateAge() {
    var dob = new Date(birthdayInput.value);
    var currentDate = new Date();
    var age = currentDate.getFullYear() - dob.getFullYear();

    if (age < 18) {
        birthdayInput.setCustomValidity('Πρέπει να είσαι 18 ετών και άνω.');
    } else {
        birthdayInput.setCustomValidity('');
    }
}

birthdayInput.addEventListener('input', validateAge);


//Κανόνας για έλεγχο τηλεφώνου
var phoneInput = document.getElementById('phone');

function validatePhone() {
    var pattern = /^69\d{8}$/;
    if (!pattern.test(phoneInput.value)) {
        phoneInput.setCustomValidity("Το τηλέφωνο πρέπει να αρχίζει με 69 και να έχει 10 ψηφία.");
    } else {
        phoneInput.setCustomValidity(""); 
    }
}

phoneInput.addEventListener('input', validatePhone);
