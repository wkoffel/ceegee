// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')
require('electron-reload')(__dirname);

var inquirer = require('inquirer');
var mainWindow;
var quitRequest = false;

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    fullscreen: true,
    width: 1920,
    height: 1080,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  loadTemplate("default");

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

function loadTemplate(template = "default") {
  // and load the index.html of the app.
  mainWindow.loadFile(`templates/${template}/index.html`)
}

function runInquiryLoop() {
  if(quitRequest) {
    console.log("CeeGee out!");
    app.exit(0);
  } else {

    inquirer
    .prompt([
      {
        type: 'list',
        name: 'template',
        message: 'Which template do you want to load?',
        choices: [
          'playground',
          'default',
          'a120lt',
          new inquirer.Separator(),
          'Quit CeeGee', // TODO: this probably should be a different kind of inquiry choice
        ]
      },
    ])
    .then(answers => {
      selected_template = answers["template"];
      if(selected_template == 'Quit CeeGee') {
        quitRequest = true;
      } else {
        console.log(`Loading ${selected_template}...`);
        loadTemplate(selected_template)
      }
      runInquiryLoop();
    });
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()
  
  runInquiryLoop();

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
