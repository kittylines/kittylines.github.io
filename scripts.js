document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;

    function validateForm() {
        const username = document.getElementById('username').value;
        if (username.trim() === '') {
            alert('Username cannot be empty!');
            return false;
        } else if (username.length < 3) {
            alert('Username must be at least 3 characters long!');
            return false;
        }
        return true;
    }

    if (path.includes('index.html') || path === '/') {
        const form = document.getElementById('userForm');
        if (form) {
            form.addEventListener('submit', (event) => {
                if (!validateForm()) {
                    event.preventDefault();
                }
            });
        }
    }

    if (path.includes('sand_cats.html')) {
		const generateCatsButton = document.getElementById('generateCatsButton');
        generateCatsButton.addEventListener('click', () => {
            generateSandCats(3);
        });
        function generateSandCats(num) {
            const gallery = document.querySelector('.gallery');
            gallery.innerHTML = '';
            for (let i = 1; i <= num; i++) {
                const figure = document.createElement('figure');
                const img = document.createElement('img');
                img.src = `sand_cat${i}.jpg`;
                img.alt = `Sand Cat ${i}`;
                img.onerror = () => {
                    console.error(`Error loading sand_cat${i}.jpg`);
                };
                const caption = document.createElement('figcaption');
                caption.textContent = `Sand Cat ${i}`;
                figure.appendChild(img);
                figure.appendChild(caption);
                gallery.appendChild(figure);
            }
        }

        /*try {
            generateSandCats(3);
        } catch (error) {
            console.error('Error generating sand cats:', error);
        }
		*/
    }

    const themeButton = document.getElementById('toggleTheme');
    if (themeButton) {
        themeButton.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
        });
    } else {
        console.warn('Toggle theme button not found.');
    }
});