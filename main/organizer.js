#!/usr/bin/env node
let fs=require("fs");
let path=require("path");
let utility=require("./utility");

function checkWeatherFile(src){
    return fs.lstatSync(src).isFile();

}

function getContent(src){
    return fs.readdirSync(src);         // readdirSync()  is use to read the content of directory in Sync
    
}

function getExtension(src){
    let ext=src.split(".").pop();  // it splite the word or sentences in the array and return the last word of array
    return ext;
}

function sendFile(dest,category,src){
    console.log(category);
    let categorypath=path.join(dest,category);

    if(fs.existsSync(categorypath)==false){   // does category exit          // fs.exitsSync() method is used to synchronosly check if a file already exit in the given path or not .it return the boolean value which indicate the presence of of file.
        fs.mkdirSync(categorypath);
    }       
    let fName=path.basename(src);
    let cPath=path.join(categorypath,fName);
    fs.copyFileSync(src,cPath);
    
}
function getCategory(ext){
    let types=utility.types;
    for(let category in types){
        for(let i=0;i<types[category].length;i++){
            if(ext==types[category][i]){

                console.log("Inside get category"+category);
                return category;
            }
        }
    }
    return "others";
    
}


function organizer(src,dest){
    if(checkWeatherFile(src)==true){
        let ext=getExtension(src);
        let category=getCategory(ext);
        if(category==null){
            category="others";
        }
        console.log(category);
        sendFile(dest,category,src);

    }else{
        let childName =getContent(src);
        for(let i=0;i<childName.length;i++){
            if(childName[i]=="orgnized_files"){
                continue;
            }
            let childPath=path.join(src,childName[i]);
            organizer(childPath,dest);
        }
    }
}

function organizedFile(src){
    let folderToMake=path.join(src,"Organized_Folder");
    if(fs.existsSync(folderToMake)==false){
        fs.mkdirSync(folderToMake);
    }
    organizer(src,folderToMake);

}

// let src=process.argv[2]|| process.cwd();                // this line take input whren src folder is not define 
// let dest=path.join(src,"organized_files");              // this line makeing  destination path of the organized forlder
            // either Above two line or blow function need to run the program

function organizefn(src){
    if(src==undefined){                 // when source forlder is not given than it will take the current folder location from which function is running 
        src=process.cwd();

    }
    organizedFile(src);                 // colling the function 

}

let src=process.argv[2]|| process.cwd();   // this will be uncomment when i will run from the organizer.js file only by command node organizer.js
organizefn(src);

module.exports ={
    fn: organizefn
}