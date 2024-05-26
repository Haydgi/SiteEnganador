document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phone = document.getElementById('phone').value;


    // Exibe no console os dados coletados

    console.log('Email:', email);
    console.log('Senha:', password);
    console.log('Telefone:', phone);

    
    alert('Obrigado pelos dados! ;)');
    alert('Brincadeira, isso não vai pra nenhum lugar :p');
});
