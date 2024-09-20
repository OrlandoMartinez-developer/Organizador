const { contextBridge, ipcRenderer } = require('electron');

// Exponemos el ipcRenderer al contexto del navegador de manera segura
contextBridge.exposeInMainWorld('ipcRenderer', {
  invoke: (channel, args) => ipcRenderer.invoke(channel, args),
});
