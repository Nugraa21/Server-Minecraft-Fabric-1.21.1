const mcVersionsData = [
    { "minecraft": "1.21.1", "stable": true, "recommended": true },
    { "minecraft": "1.21", "stable": true, "recommended": false },
    { "minecraft": "1.20.6", "stable": true, "recommended": false },
    { "minecraft": "1.20.4", "stable": true, "recommended": false },
    { "minecraft": "1.20.1", "stable": true, "recommended": true },
    { "minecraft": "1.19.4", "stable": true, "recommended": false },
    { "minecraft": "1.19.2", "stable": true, "recommended": true },
    { "minecraft": "1.18.2", "stable": true, "recommended": true },
    { "minecraft": "1.16.5", "stable": true, "recommended": true },
    { "minecraft": "1.12.2", "stable": true, "recommended": false }
];

document.addEventListener('DOMContentLoaded', () => {
    renderVersions();
    initCopyButtons();
});

function renderVersions() {
    const container = document.getElementById('version-data');
    if (!container) return;

    container.innerHTML = mcVersionsData.map(v => `
        <tr>
            <td data-label="Versi Minecraft"><strong>${v.minecraft}</strong></td>
            <td data-label="Status"><span class="status-badge ${v.stable ? 'stable' : 'snapshot'}">${v.stable ? 'Stable' : 'Snapshot'}</span></td>
            <td data-label="Rekomendasi">${v.recommended ? '<span class="rec-icon">⭐ Terbaik</span>' : '-'}</td>
        </tr>
    `).join('');
}

function initCopyButtons() {
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const code = btn.closest('.code-block').querySelector('code').innerText;
            navigator.clipboard.writeText(code).then(() => {
                const originalHTML = btn.innerHTML;
                btn.innerHTML = '<i data-lucide="check" style="color: #38b000"></i>';
                lucide.createIcons();
                setTimeout(() => {
                    btn.innerHTML = originalHTML;
                    lucide.createIcons();
                }, 2000);
            });
        });
    });
}

// Global visual tweaks
const customStyle = document.createElement('style');
customStyle.innerHTML = `
    .stable { background: rgba(56, 176, 0, 0.15); color: #70e000; border: 1px solid rgba(56, 176, 0, 0.3); }
    .snapshot { background: rgba(255, 159, 28, 0.15); color: #ff9f1c; border: 1px solid rgba(255, 159, 28, 0.3); }
    .rec-icon { color: #ffd700; font-weight: 600; }
`;
document.head.appendChild(customStyle);
