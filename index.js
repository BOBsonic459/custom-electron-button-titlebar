const {app, BrowserWindow} = require("electron")
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    width: 900,
    height: 600,
    minWidth: 900,
    minHeight: 600,
    frame: false,
    webPreferences: {
      nodeIntegration: true, 
      enableRemoteModule: true
    }
  })

  win.loadFile(path.join(__dirname, './index.html'))
  win.removeMenu()
  //win.openDevTools()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  app.quit()
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
