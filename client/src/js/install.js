const butInstall = document.getElementById('buttonInstall');

let deferredPrompt;

// Event handler for beforeinstallprompt
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredPrompt = event;
  butInstall.style.display = 'block';
});

// Implementing a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  if (!deferredPrompt) return;

  // Show the prompt
  deferredPrompt.prompt();
  // Wait for the user to respond
  const { outcome } = await deferredPrompt.userChoice;
  if (outcome === 'accepted') {
    console.log('User accepted the installation');
  } else {
    console.log('User declined the installation');
  }

  deferredPrompt = null;
  butInstall.style.display = 'none';
});

// Handling the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  console.log('Application installed');
});
