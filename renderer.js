const { ipcRenderer } = require('electron');

document.getElementById('organize').addEventListener('click', async () => {
  const directory = document.getElementById('directoryInput').value;
  const result = await ipcRenderer.invoke('organize-files', { directory });
  document.getElementById('result').innerText = result.join('\n');
});

document.getElementById('check-space').addEventListener('click', async () => {
  const result = await ipcRenderer.invoke('check-space');
  document.getElementById('result').innerText = result.join('\n');
});

document.getElementById('remove-duplicates').addEventListener('click', async () => {
  const directory = document.getElementById('directoryInput').value;
  const result = await ipcRenderer.invoke('remove-duplicates', { directory });
  document.getElementById('result').innerText = result.join('\n');
});
