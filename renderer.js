const { ipcRenderer } = require('electron');


const progressContainer = document.getElementById('progress-container');
const progressBar = document.getElementById('progress');
const notification = document.getElementById('notification');

function showProgress(percentage) {
  progressContainer.classList.remove('d-none');
  progressBar.style.width = `${percentage}%`;
  progressBar.setAttribute('aria-valuenow', percentage);
  progressBar.innerText = `${percentage}%`;
}

function showNotification(message, type = 'info') {
  notification.classList.remove('d-none');
  notification.className = `alert alert-${type}`;
  notification.innerText = message;
  setTimeout(() => {
    notification.classList.add('d-none');
  }, 5000);
}

document.getElementById('organize').addEventListener('click', async () => {
  const directory = document.getElementById('directoryInput').value;
  showProgress(0); // Start progress bar
  const result = await ipcRenderer.invoke('organize-files', { directory });
  document.getElementById('result').innerText = result.join('\n');
  showNotification('Files organized successfully!', 'success');
  showProgress(100); // End progress bar
});

document.getElementById('check-space').addEventListener('click', async () => {
  showProgress(0); // Start progress bar
  const result = await ipcRenderer.invoke('check-space');
  document.getElementById('result').innerText = result.join('\n');
  showNotification('Disk space checked!', 'success');
  showProgress(100); // End progress bar
});

document.getElementById('remove-duplicates').addEventListener('click', async () => {
  const directory = document.getElementById('directoryInput').value;
  showProgress(0); // Start progress bar
  const result = await ipcRenderer.invoke('remove-duplicates', { directory });
  document.getElementById('result').innerText = result.join('\n');
  showNotification('Duplicates removed!', 'success');
  showProgress(100); // End progress bar
});