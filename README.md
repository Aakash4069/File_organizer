# File_organizer
This will organise files on the basis of there extension




# File System organizer
We will build a global cli utility that will support following commands
* mycli help
* mycli view <dirname> --tree 
* mycli view <dirname> --flat
* mycli organize <dirname>
* mycli organize 

## Facts
*  Left to right & top to bottom , dynamic vs static typed
*  primitives-> undefined,string,number,boolean, null 
*  JS and Java similarity
*  simple isprime Question
*   functions,-> no return,param type 
*   objects -> property,methods, may be oops,.,square, loops ,memory map
*   Questions: record collection, profile lookup
*   Arrays are optional -> usko bhi padha denge 
## Activity
* Skeleton code
* Write help command
* Convert it into multiple files-> require and module.exports
* display gtree code
* print flat and tree
* organize
* npm link and make it global


## install dependency.
* npm install node
* npm init
* Flow the file Sturcture as shown above 
* Run from the belew commands 


### commands to run the file when it not globle 
  ## When you run from organize.js file
  
 organizeFile(process.argv[2]) This line need to comment before you run from below command. This line take input when we run organize file only, command for run organized file: node oragnize.js " This line need to comment before you run from below command ome/akky/Dev_T/2_File_System_10_02_2021"
  ## When you run from mycli.js file
  
// node mycli.js organize "/home/akky/Dev_T/2_File_System_10_02_2021"




## To make Script globle.follow the below step to make it global. it will pass through make mycli.js

 * step to make it globall
 * step 1: npm init
 * step 2: add this line to myclis.js   #!/user/bin/env node
 * step 3: add this below line to package.json  at the last 
 *           "bin":{
                   "myutil": "mycli.js"
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

 
