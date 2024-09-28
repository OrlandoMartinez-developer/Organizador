const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { PythonShell } = require('python-shell');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'renderer.js'),
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});



ipcMain.handle('organize-files', async (event, args) => {
  let options = {
    scriptPath: path.join(__dirname, 'python'),
    args: [args.directory]
  };

  let result = await PythonShell.run('organize_files.py', options);
  return result;
});

ipcMain.handle('check-space', async () => {
  let options = {
    scriptPath: path.join(__dirname, 'python')
  };

  let result = await PythonShell.run('check_space.py', options);
  return result;
});

ipcMain.handle('remove-duplicates', async (event, args) => {
  let options = {
    scriptPath: path.join(__dirname, 'python'),
    args: [args.directory]
  };

  let result = await PythonShell.run('remove_duplicates.py', options);
  return result;
});