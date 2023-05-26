document.getElementById('kontaktformular').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form at indsende

    // indsæt form værdier
    var name = document.getElementById('navn').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('mobil').value;
    var message = document.getElementById('besked').value;

    // validering

    // Display de skrevne værdier
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // ryd udfyldte feldter
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
});