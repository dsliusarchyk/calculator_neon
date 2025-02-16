const { app, BrowserWindow } = require('electron');
const path = require('path');

app.whenReady().then(() => {
    const mainWindow = new BrowserWindow({
        width: 300,
        height: 500,
        resizable: false,
        useContentSize: true,
        backgroundColor: '#121212',
        icon: path.join(__dirname, 'icon.icns'), // Додаємо іконку
        webPreferences: {
            nodeIntegration: true,
            zoomFactor: 1.0
        }
    });

    mainWindow.loadFile("index.html");
});
