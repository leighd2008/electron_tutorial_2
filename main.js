const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow

const createWindow = () =>{
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration:true,
      contextIsolation: false
    }
  })
  
  mainWindow.loadURL(`file://${__dirname}/index.html`)
  
  mainWindow.webContents.openDevTools()
  
  mainWindow.on('closed', () => {
    mainW = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})