const fs = require('fs')

// Used to read,write,update,delete files 
//Also works with Directories

//To read a file

const data = fs.readFileSync('f1.txt')
console.log("file1"+ data)

// To write a file

fs.writeFileSync('f2.txt',"Writing sample text into the file2")

fs.writeFileSync('f3.txt',"Writing data into the file that doesn't exist")

//  To update a file

fs.appendFileSync('f2.txt', "This is my update text content")

// To delete a file

fs.unlinkSync('f3.txt')