const { app, BrowserWindow } = require('electron');

app.whenReady().then(() => {
    const mainWindow = new BrowserWindow({
        width: 320, // Враховуючи padding і можливі межі
        height: 540, // Враховуючи padding і можливі межі
        resizable: false,
        useContentSize: true,
        backgroundColor: '#121212',
        webPreferences: {
            nodeIntegration: true,
            zoomFactor: 1.0
        }
    });

    mainWindow.loadFile("index.html");
});
