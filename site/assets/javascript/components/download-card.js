/* docs/assets/javascript/components/download-card.js */

const DL_ICONS = {
  "monitor": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-monitor-icon lucide-monitor"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>',
  "windows": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-app-window-icon lucide-app-window"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M10 4v4"/><path d="M2 8h20"/><path d="M6 4v4"/></svg>',
  "office":  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sticky-note-icon lucide-sticky-note"><path d="M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z"/><path d="M15 3v5a1 1 0 0 0 1 1h5"/></svg>',
  "android": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-smartphone-icon lucide-smartphone"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>',
  "archive": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder-archive-icon lucide-folder-archive"><circle cx="15" cy="19" r="2"/><path d="M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1"/><path d="M15 11v-1"/><path d="M15 17v-2"/></svg>'
};

class DownloadCard extends HTMLElement {
  connectedCallback() {
    // Убираем системный тултип
    const title = this.getAttribute('title') || 'Download';
    this.removeAttribute('title'); 

    const version = this.getAttribute('version');
    const desc = this.getAttribute('desc');
    const url = this.getAttribute('url') || '#';
    const iconKey = this.getAttribute('icon') || 'monitor';
    const tagsAttr = this.getAttribute('tags');
    const torrent = this.getAttribute('torrent');
    const mirror = this.getAttribute('mirror');
    

    const svgPath = DL_ICONS[iconKey] || DL_ICONS['monitor'];
    const iconHtml = `<svg viewBox="0 0 24 24">${svgPath}</svg>`;

    // Теги
    let tagsHtml = '';
    if (tagsAttr) {
      tagsHtml = tagsAttr.split(',').map(t => `<span class="dl-tag">${t.trim()}</span>`).join('');
    }

    // Кнопки
    let btnsHtml = `
      <a href="${url}" class="dl-btn primary" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        <span>Скачать</span>
      </a>`;

    if (torrent) {
      btnsHtml += `
      <a href="${torrent}" class="dl-btn secondary" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        <span>Torrent</span>
      </a>`;
    }

    if (mirror) {
      btnsHtml += `
      <a href="${mirror}" class="dl-btn mirror" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
        <span>Зеркало</span>
      </a>`;
    }

    // Структура под новый CSS
    this.innerHTML = `
      <div class="dl-card">
        <div class="dl-main">
            <div class="dl-header-row">
                <div class="dl-icon-box">${iconHtml}</div>
                <div class="dl-title-wrap">
                    <span class="dl-title">${title}</span>
                    ${version ? `<span class="dl-version">${version}</span>` : ''}
                </div>
            </div>
            ${desc ? `<div class="dl-desc">${desc}</div>` : ''}
            <div class="dl-tags">${tagsHtml}</div>
        </div>
        <div class="dl-actions">
            ${btnsHtml}
        </div>
      </div>
    `;
  }
}

if (!customElements.get('download-card')) {
  customElements.define('download-card', DownloadCard);
}