const { app, BrowserWindow } = require("electron")


function CriaJanela(){
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  })

  win.loadFile("./src/views/index.html")
}

app.whenReady().then(CriaJanela);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    CriaJanela();
  }
});