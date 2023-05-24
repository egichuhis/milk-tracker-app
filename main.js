import { app, BrowserWindow } from 'electron';
import path from 'path';

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // Load the Ionic app.
  mainWindow.loadURL(`file://${path.join(__dirname, 'www/index.html')}`);

  // Open the DevTools (optional).
  // mainWindow.webContents.openDevTools();
}

// Called when Electron has finished initialization.
app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});


function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // Load the Ionic app.
  mainWindow.loadURL(`file://${path.join(__dirname, 'www/index.html')}`);

  // Open the DevTools (optional).
  // mainWindow.webContents.openDevTools();
}

// Called when Electron has finished initialization.
app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
