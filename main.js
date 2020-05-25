// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron');
const path = require('path');
require('electron-reload')(__dirname);

// const CeegeeTemplate = require('./ceegee_template.js')

const inquirer = require('inquirer');
let mainWindow;
let quitRequest = false;

function createWindow() {
  // Create the browser window.
  const windowOptions = {
    width: 1920,
    height: 1080,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  };
  // for debugging on large-screen mac, keep window at the desired output resolution
  if (process.platform !== 'darwin') {
    windowOptions.fullscreen = true;
  }

  mainWindow = new BrowserWindow(windowOptions);

  loadTemplate('default');

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

function loadTemplate(template = 'default') {
  // and load the index.html of the app.
  mainWindow.loadFile(`templates/${template}/index.html`);
  // mainWindow.loadURL('https://app.singular.live/output/0fIJdY3p2LynJDcgNkMhWO/Output?aspect=16:9')
}

function runInquiryLoop() {
  if (quitRequest) {
    console.log('CeeGee out!');
    app.exit(0);
  } else {
    inquirer.prompt([
      {
        type: 'list',
        name: 'template',
        message: 'Which template do you want to load?',
        choices: [
          'playground',
          'default',
          'a120lt',
          'a120-mark',
          'clear',
          'mustache',
          new inquirer.Separator(),
          'Quit CeeGee', // TODO: this probably should be a different kind of inquiry choice
        ],
      },
    ]).then((answers) => {
      const selectedTemplate = answers.template;
      if (selectedTemplate === 'Quit CeeGee') {
        quitRequest = true;
      } else {
        console.log(`Loading ${selectedTemplate}...`);
        loadTemplate(selectedTemplate);
      }
      runInquiryLoop();
    });
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  runInquiryLoop();

  app.on('activate', function() {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
