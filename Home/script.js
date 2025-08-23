// Este evento garante que o código só será executado depois que todo o conteúdo da página for carregado.
document.addEventListener('DOMContentLoaded', () => {
    console.log('Página carregada e script a funcionar.');

    // --- Lógica para o Dropdown do Google (hover) ---
    const menuContainer = document.querySelector('.google-tools');
    const dropdown = document.getElementById('google-dropdown');
    const googleBtn = document.getElementById('google-button');
    let hideTimeout; // controla o atraso pra esconder o menu

    const showDropdown = () => {
        clearTimeout(hideTimeout);
        dropdown.classList.add('show');
        dropdown.setAttribute('aria-hidden', 'false');
        googleBtn.setAttribute('aria-expanded', 'true');
    };

    const hideDropdown = () => {
        hideTimeout = setTimeout(() => {
            dropdown.classList.remove('show');
            dropdown.setAttribute('aria-hidden', 'true');
            googleBtn.setAttribute('aria-expanded', 'false');
        }, 200);
    };

    if (menuContainer && dropdown) {
        menuContainer.addEventListener('mouseenter', showDropdown);
        menuContainer.addEventListener('mouseleave', hideDropdown);
    }

    // --- Lógica do MENU LATERAL (Sidebar) ---
    const btnMenu = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const btnCloseSidebar = document.getElementById('close-sidebar');

    function toggleSidebar(forceOpen) {
        const open = forceOpen ?? !sidebar.classList.contains('is-open');

        sidebar.classList.toggle('is-open', open);
        overlay.classList.toggle('is-open', open);
        overlay.hidden = !open;

        // ARIA
        btnMenu?.setAttribute('aria-expanded', String(open));
        sidebar.setAttribute('aria-hidden', String(!open));

        // Foco acessível
        if (open) {
            sidebar.querySelector('a,button')?.focus();
        } else {
            btnMenu?.focus();
        }
    }

    btnMenu?.addEventListener('click', () => toggleSidebar());
    btnCloseSidebar?.addEventListener('click', () => toggleSidebar(false));
    overlay?.addEventListener('click', () => toggleSidebar(false));

    // Fecha com ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sidebar.classList.contains('is-open')) {
            toggleSidebar(false);
            // também fecha o dropdown se estiver aberto
            hideDropdown();
        }
    });

    // --- Link "Chamado TI" ---
    // Troque o href abaixo para o link real do Apps Script (exec):
    document.getElementById('link-chamado-ti')?.setAttribute('href', 'https://chamadoadm.netlify.app');
});
