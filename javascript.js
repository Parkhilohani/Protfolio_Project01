document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    
    alert(`Thank you, ${name}! Your message "${message}" has been sent.`);
});
