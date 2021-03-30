# File_organiser
This will organise files on the basis of there extension


## install dependency.
* npm install node
* npm init
* Flow the file Sturcture as shown above 
* Run from the belew commands 


## commands to run the file when it not globle.

  ### When you run from organize.js file.
  
 When run from organizer file then this line "let src=process.argv[2]|| process.cwd();" must be uncomment.
    ### commands to run file 
      1> When you not give any directory path for organized.
            node organizer.js             // it will take the current folder path from which file run
      2> When you give any directory path for organized.
             node organizer.js " path of the folder which need to organized"
             
  ### When you run from app.js file.

  In this only electron application created and only path of the folder to give to run



## In this through terminal or cmd we can organized any folder.

### To make Script globle.follow the below step to make it global. it will pass through make organizer.js

 * step to make it globall
 * step 1: npm init
 * step 2: add this line to myclis.js   #!/user/bin/env node
 * step 3: add this below line to package.json  at the last 
 *           "bin":{
                   "organizer": "organizer.js"
                     }
 * step 4 : add this line to organized folder
         function organizefn(src){              
            if(src==undefined){             // process.cwd will only run when path is not given  int the running command
                src=process.cwd();          // this give the current directory path 
            }
            organizeFile(src);
            }  
            
    Step 5: do npm link

    step 6: then run this command for anywhere in side the folder in system

    step 7: if you have done any changein the any folder then unlink the npm then agin link the npm 
            run commands this 
            npm link
             if any changed in any file then this commands will be run
             npm unlink 
             npm link

 
