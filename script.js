const formCadastro = document.getElementById('formCadastro');
const mensagemFeedback = document.getElementById('mensagemFeedback');

if (formCadastro) {
    formCadastro.addEventListener('submit', function(evento) {
        evento.preventDefault();

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;

        const usuario = {
            nome: nome,
            email: email,
            senha: senha
        };

        // Salvamos os dados oficiais do usuário cadastrado
        localStorage.setItem('usuarioCadastrado', JSON.stringify(usuario));
        
        // Já deixamos ele logado automaticamente após cadastrar
        localStorage.setItem('usuarioLogado', JSON.stringify(usuario));

        mensagemFeedback.style.color = 'green';
        mensagemFeedback.textContent = `Conta criada com sucesso, ${nome}! Redirecionando...`;

        setTimeout(() => {
            window.location.href = 'anunciar.html';
        }, 1500);
    });
}