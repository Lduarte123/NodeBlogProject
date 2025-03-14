function irParaCheckout() {
    // Captura os valores dos campos
    const nome = document.getElementById("campoNome").value;
    const email = document.getElementById("campoEmail").value;
    const senha = document.getElementById("campoSenha").value;
    const assinatura = document.querySelector('input[name="assinado"]:checked');

    if (nome && email && senha && assinatura) {
        // Estrutura do JSON
        const dados = {
            usuario: {
                nome: nome,
                email: email,
                senha: senha
            },
            assinatura: {
                tipo: assinatura.labels[0].textContent,  // Pega o texto do label da opção selecionada
                id: assinatura.id
            }
        };

        // Envia os dados para a rota /salvar-json via POST
        fetch('/dadosAssinatura', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados)
        })
        .then(response => response.json())
        .then(result => {
            console.log(result.message);
            // Após salvar, redireciona para a página de checkout
            window.location.href = "/views/checkout";
        })
        .catch(error => {
            console.error('Erro:', error);
            alert("Erro ao salvar os dados.");
        });
    } else {
        alert("Preencha todos os campos antes de enviar.");
    }
}
