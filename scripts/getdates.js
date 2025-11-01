
//current year

(function () {
    const yearEl = document.getElementById('currentYear');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    //last modified
    const lmEl = document.getElementById('lastModified');
    if (lmEl) {
        const raw = document.lastModified;
        if (raw) {
            const lmDate = new Date(raw);
            const human = lmDate.toLocaleString(undefined, {
                year: 'numeric', month: 'short', day: 'numeric',
                hour: '2-digit', minute: '2-digit', second: '2-digit',
                hour12: false,
            });
            lmEl.textContent = human;
            lmEl.setAttribute('datetime', lmDate.toISOString());
        } else {
            lmEl.textContent = 'Not available';
            lmEl.removeAttribute('datetime');
        }

    }
})();