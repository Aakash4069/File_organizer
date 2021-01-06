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

let src=process.argv[2]|| process.cwd();
let dest=path.join(src,"organized_files");
if(fs.existsSync(dest)==false){
    fs.mkdirSync(dest);
}

organizer(src,dest);