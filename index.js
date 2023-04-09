//basic electron files
const { app, BrowserWindow, Notification } = require('electron');
const path = require('path');
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = true

const createWindow = () => {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true
        },
        icon: './Tijn_logo_white.png'
    });
    mainWindow.maximize();
    // and load the index.html of the app.
    mainWindow.loadFile(path.join(__dirname, 'views/index.html'));
    if (process.platform === 'win32') {
        app.setAppUserModelId(app.name);
    }
};
const NOTIFICATION_TITLE = 'Started Succesfully'
const NOTIFICATION_BODY = 'Succesfully started Tijnn.NET'

function showNotification() {
    new Notification({ title: NOTIFICATION_TITLE, body: NOTIFICATION_BODY }).show()
}
app.whenReady().then(createWindow).then(showNotification)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});