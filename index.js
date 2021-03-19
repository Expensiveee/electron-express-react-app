const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const server = require('./app'); //Express server

const path = require('path');
const url = require('url');

let mainWindow;

function createWindow () {
    mainWindow = new BrowserWindow({ 
        width: 800, 
        height: 600,
        show: false, //Not showing the window until the content loads
        webPreferences: {
            nodeIntegration: true,
            // devTools: false
          },
        backgroundColor: '#0b131d',
        title: "React Express Electron App"
    });
    
    mainWindow.loadURL('http://localhost:5000/');

    mainWindow.setResizable(false);

    mainWindow.maximize();
    mainWindow.show(); //Showing the window

    mainWindow.webContents.openDevTools();

    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {

    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
    }
});
