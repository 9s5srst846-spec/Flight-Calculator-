(() => {
  const status = document.getElementById('appStatus');
  const install = document.getElementById('appInstallButton');
  const help = document.getElementById('appInstallHelp');
  let prompt;
  const standalone = window.matchMedia('(display-mode: standalone)').matches || navigator.standalone;
  if (standalone) install.hidden = true;
  window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault(); prompt = event;
  });
  window.addEventListener('appinstalled', () => { install.hidden = true; });
  install.addEventListener('click', async () => {
    if (prompt) { await prompt.prompt(); prompt = null; return; }
    help.hidden = false;
    help.textContent = /iPhone|iPad|iPod/.test(navigator.userAgent)
      ? 'In Safari, open Share → Add to Home Screen. Keep Open as Web App enabled, then tap Add.'
      : 'Use your browser’s Install app or Add to Home Screen option. On iPhone, open this address in Safari, then Share → Add to Home Screen.';
  });
  async function prepareOffline() {
    if (location.protocol === 'file:') {
      status.textContent = 'Install and offline access require an HTTPS website.';
      return;
    }
    if (!('serviceWorker' in navigator) || !window.isSecureContext) {
      status.textContent = 'Offline access needs HTTPS and a supported browser.';
      return;
    }
    try {
      await navigator.serviceWorker.register('./sw.js');
      await navigator.serviceWorker.ready;
      status.textContent = 'Ready for offline use';
    } catch (error) {
      status.textContent = 'Offline setup incomplete. Reopen while online to retry.';
    }
  }
  prepareOffline();
})();
