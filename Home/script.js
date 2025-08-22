// Este evento garante que o código só será executado depois que todo o conteúdo da página for carregado.
document.addEventListener('DOMContentLoaded', () => {

    console.log('Página carregada e script a funcionar.');

    // --- Lógica para o Dropdown do Google ---

    // Seleciona os elementos do menu
    const menuContainer = document.querySelector('.google-tools');
    const dropdown = document.getElementById('google-dropdown');
    let hideTimeout; // Variável para controlar o tempo de espera antes de esconder o menu

    // Função para mostrar o dropdown
    const showDropdown = () => {
        clearTimeout(hideTimeout); // Cancela qualquer agendamento para esconder o menu
        dropdown.classList.add('show');
    };

    // Função para esconder o dropdown
    const hideDropdown = () => {
        // Adiciona um pequeno atraso para que o usuário possa mover o mouse para o dropdown
        hideTimeout = setTimeout(() => {
            dropdown.classList.remove('show');
        }, 200);
    };

    // Adiciona os eventos de mouse ao container do menu
    if (menuContainer && dropdown) {
        menuContainer.addEventListener('mouseenter', showDropdown);
        menuContainer.addEventListener('mouseleave', hideDropdown);
    }

});
