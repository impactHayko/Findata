document.getElementById("emailForm").addEventListener('submit', function(event) {
    var emailInput = document.getElementById('email');
    var emailValue = emailInput.ariaValueMax.trim();

    if(!emailValue) {
        alert("Please enter valid email address");
        event.preventDefault();
    }

});