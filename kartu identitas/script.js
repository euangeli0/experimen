(function () {
    const identifier = document.getElementById('identifier');
    const display = document.getElementById('displayText');
    const nimText = display.getAttribute('data-nim');
    let showingName = true;

    function animateSwap(toNim) {
        display.classList.remove('animated');
        void display.offsetWidth;

        if (toNim) {
            display.textContent = nimText;
            display.classList.remove('name');
            display.classList.add('nim');
            display.classList.add('animated');
            identifier.setAttribute('aria-pressed', 'true');
            identifier.querySelector('.label').textContent = 'Klik untuk kembali';
        } else {
            display.textContent = nameText;
            display.classList.remove('nim');
            display.classList.add('name');
            display.classList.add('animated');
            identifier.setAttribute('aria-pressed', 'false');
            identifier.querySelector('.label').textContent = 'Klik untuk berganti';
        }
    }

    identifier.addEventListener('click', () => {
        showingName = !showingName;
        animateSwap(!showingName);
    });

    identifier.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            showingName = !showingName;
            animateSwap(!showingName);
        }
    });

    const hint = identifier.querySelector('.hint');
    identifier.addEventListener('mousemove', (e) => {
        const rect = identifier.getBoundingClientRect();
        const pct = Math.round(((e.clientX - rect.left) / rect.width) * 100);
        hint.style.opacity = '1';
        hint.style.transform = 'translateY(0)';
        identifier.style.background = `linear-gradient(90deg, rgba(125,211,252,${0.02 + pct / 500}), rgba(96,165,250,${0.02 + (100 - pct) / 500}))`;
    });
    identifier.addEventListener('mouseleave', () => {
        hint.style.opacity = '';
        identifier.style.background = '';
    });

    window.addEventListener('load', () => {
        display.classList.remove('animated');
        void display.offsetWidth;
        display.classList.add('animated');
    });
})();
