
// Data Versi Minecraft & Command Install
const versionData = [
    { mc: "1.21.1", cmd: "java -jar fabric-installer-1.1.1.jar server -mcversion 1.21.1 -downloadMinecraft", status: "Stable" },
    { mc: "1.21", cmd: "java -jar fabric-installer-1.1.1.jar server -mcversion 1.21 -downloadMinecraft", status: "Stable" },
    { mc: "1.20.6", cmd: "java -jar fabric-installer-1.1.1.jar server -mcversion 1.20.6 -downloadMinecraft", status: "Stable" },
    { mc: "1.20.4", cmd: "java -jar fabric-installer-1.1.1.jar server -mcversion 1.20.4 -downloadMinecraft", status: "Stable" },
    { mc: "1.20.1", cmd: "java -jar fabric-installer-1.1.1.jar server -mcversion 1.20.1 -downloadMinecraft", status: "Recom" },
    { mc: "1.19.4", cmd: "java -jar fabric-installer-1.1.1.jar server -mcversion 1.19.4 -downloadMinecraft", status: "Stable" },
    { mc: "1.19.2", cmd: "java -jar fabric-installer-1.1.1.jar server -mcversion 1.19.2 -downloadMinecraft", status: "Stable" },
    { mc: "1.18.2", cmd: "java -jar fabric-installer-1.1.1.jar server -mcversion 1.18.2 -downloadMinecraft", status: "Stable" },
    { mc: "1.17.1", cmd: "java -jar fabric-installer-1.1.1.jar server -mcversion 1.17.1 -downloadMinecraft", status: "Legacy" },
    { mc: "1.16.5", cmd: "java -jar fabric-installer-1.1.1.jar server -mcversion 1.16.5 -downloadMinecraft", status: "Recom" },
    { mc: "1.15.2", cmd: "java -jar fabric-installer-1.1.1.jar server -mcversion 1.15.2 -downloadMinecraft", status: "Legacy" },
    { mc: "1.14.4", cmd: "java -jar fabric-installer-1.1.1.jar server -mcversion 1.14.4 -downloadMinecraft", status: "Legacy" }
];

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Icons
    lucide.createIcons();

    // 2. Render Versions Table
    const tableBody = document.getElementById('version-list-body');
    if (tableBody) {
        tableBody.innerHTML = versionData.map(v => `
            <tr>
                <td><span class="v-tag">${v.mc}</span></td>
                <td>
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <div class="cmd-preview">${v.cmd}</div>
                        <button class="btn-copy-small" onclick="copyToClipboard('${v.cmd}', this)">
                            <i data-lucide="copy"></i>
                        </button>
                    </div>
                </td>
                <td>
                    <span class="v-tag ${getStatusClass(v.status)}">${v.status}</span>
                </td>
            </tr>
        `).join('');
        lucide.createIcons();
    }

    // 3. Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // 4. Navbar Scroll Effect & Mobile Menu
    const navbar = document.querySelector('.navbar');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            // Optional: Toggle icon between menu and x
            const icon = navLinks.classList.contains('active') ? 'x' : 'menu';
            menuBtn.innerHTML = `<i data-lucide="${icon}"></i>`;
            lucide.createIcons();
        });
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            // Ensure inline styles don't conflict (if any were set previously)
            navbar.style.background = '';
            navbar.style.boxShadow = '';
        } else {
            navbar.classList.remove('scrolled');
            navbar.style.background = '';
            navbar.style.boxShadow = '';
        }
    });

    // 5. Code Block Copy to Clipboard
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', async () => {
            const codeBlock = btn.closest('.code-block');
            const code = codeBlock.querySelector('code').innerText;
            copyToClipboard(code, btn);
        });
    });

    // 6. 3D Tilt Effect
    const cards = document.querySelectorAll('.tilt-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const angleX = (y - centerY) / 20;
            const angleY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });

    // 7. Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }

            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                if (menuBtn) {
                    menuBtn.innerHTML = `<i data-lucide="menu"></i>`;
                    lucide.createIcons();
                }
            }
        });
    });
});

// Helper: Copy Function
async function copyToClipboard(text, btnElement) {
    try {
        await navigator.clipboard.writeText(text);

        const originalIcon = btnElement.innerHTML;
        btnElement.innerHTML = '<i data-lucide="check"></i>';
        btnElement.style.color = '#22c55e';
        lucide.createIcons();

        setTimeout(() => {
            btnElement.innerHTML = originalIcon; // Use original icon (copy)
            // If it was the list button, we need to reset to copy icon specifically if strictly needed, 
            // but innerHTML reset works if original was static.
            // For code blocks it was static. For list it is static too.
            if (btnElement.classList.contains('btn-copy-small')) {
                btnElement.innerHTML = '<i data-lucide="copy"></i>';
            }
            btnElement.style.color = '';
            lucide.createIcons();
        }, 2000);
    } catch (err) {
        console.error('Failed to copy!', err);
    }
}

// Helper: Status Styles
function getStatusClass(status) {
    if (status === 'Stable') return 'status-green';
    if (status === 'Recom') return 'status-recom';
    if (status === 'Legacy') return 'status-legacy';
    return '';
}
