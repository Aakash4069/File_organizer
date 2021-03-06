const electron =require("electron");
const app=electron.app;
const organizefn=require("./organizer");
// const ejs=require("ejs-electron");

function createWindow(){

    let win=new electron.BrowserWindow({
        width:800,
        height:600,
        webPreferences:{
            nodeIntegeration:true
        }
    })
    win.loadFile("index.html").then(function () {
        win.maximize();

    })

}
app.whenReady().then(createWindow);

app.on('window-all-closed',()=>{
    if(process.platfrom !=='darwin'){
        app.quit();
    }
})
app.on('activate',()=>{

    if(browserWindow.getAllWindow().length===0){
        createWindow();
    }
})