//importo el objeto electro
const electron = require('electron')

//BrowserWindow es para mostrar explorador de chrome, y mostrar redes o algo asi
const { app, BrowserWindow } = electron
//app es donde cargamos el ciclo de vida del app electron

const path = require('path')
const url = require('url')

let win

function createWindow() {

    win = new BrowserWindow({ width: 800, height: 600 })
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'bp.html'),
        protocol: 'file',
        slashes: true


    }))




}


app.on('ready', createWindow)