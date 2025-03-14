document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault(); 

    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ usuario, senha }), 
        });
        const data = await response.json(); 

        if (response.ok) {
            localStorage.setItem('token', data.token);
            alert("Login bem-sucedido!");
            window.location.replace('/');
        } else {
            alert('Erro no login. Status: ' + response.status);
        }
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        alert('Ocorreu um erro. Tente novamente.');
    }
});
