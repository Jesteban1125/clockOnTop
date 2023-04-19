const { app, BrowserWindow, screen } = require('electron');

let floatingWindow;
const createFloatingWindow = () => {
  if (!floatingWindow) {
    floatingWindow = new BrowserWindow({
      width: 250,
      height: 60,
      titleBarStyle: 'hide',
      // titleBarStyle: 'hidden',
      transparent: true,
      frame: false,
      resizable: false,
      hasShadow: false,
      // opacity: 0.5,
    });
    floatingWindow.setAutoHideMenuBar(true);
    floatingWindow.loadFile('src/index.html');
    // floatingWindow.loadURL(`file://${__dirname}/floatingWindow.html`);
    floatingWindow.setAlwaysOnTop(true, 'floating');
  }
  floatingWindow.show();
};

const createWindow = () => {
  const display = screen.getPrimaryDisplay();
  const width = display.bounds.width;
  const height = display.bounds.height;

  const win = new BrowserWindow({
    // width: 800,
    // height: 600,
    width: 150,
    height: 40,
    // titleBarStyle: "hide",
    // titleBarStyle: 'hiddenInset',
    titleBarStyle: 'customButtonsOnHover',
    frame: false,
    // transparent: true,
    opacity: 0.7,
    resizable: false,
    alwaysOnTop: true,
    // visibleOnAllWorkspaces: true,
    hasShadow: false,
    // type: 'desktop',
    fullscreenable: false,
    x: (width * 0.95) - 150,
    y: (height * 0.15) - 40,
  });

  win.loadFile('src/index.html');
  // win.setAlwaysOnTop(true, 'floating');
};

app.whenReady().then(() => {
  createWindow();
    // createFloatingWindow();

  //   app.on("activate", () => {
  //     if (BrowserWindow.getAllWindows().length === 0) {
  //       createWindow();
  //     }
  //   });
});

// app.on("window-all-closed", () => {
//   if (process.platform !== "darwin") {
//     app.quit();
//   }
// });
