const fs=require("fs");

fs.writeFile("newfile.txt","hello everyone",(err) => {
  if (err) throw err;
  console.log('The file has been saved!');
}); 

fs.readFile("./newfile.txt","utf8",(err,data) => {
  if (err) throw err;
  console.log(data);
}); 