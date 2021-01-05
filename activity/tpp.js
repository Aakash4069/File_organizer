let input =process.argv.slice(2);
let viewfile=require("./commands/view");
let helpfile=require("./commands/help");
let treefyfile=require("./commands/treefy");
let untreefyfile=require("./commands/untreefy");

let cmd=input[0];
switch (cmd){
    case "view": viewfile.view(process.argv[3].process.argv[4]);
    break;
    case "treefy": treefyfile.help(process.argv[3],process.argv[4]);
    break;
    case "untreefy": untreefyfile.untreefy(process.argv[3],process.argv[4]);
    break;
    case "help": helpfile.help(process.argv[3],process.argv[4]);
    default: 
    console.log("input do not match");
    break;
}