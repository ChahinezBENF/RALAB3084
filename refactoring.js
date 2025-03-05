console.log("*************************");
console.log("**********Part 1*********");

// let csv="Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";



let csv="ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let cell1='';
let cell2='';
let cell3='';
let cell4='';
let tmpcell=''; // temporary cell 
let index = 1;


for (let i = 0; i <= csv.length; i++) {
    
    if (csv[i] == ',') {
      if (index == 1) {
        cell1=tmpcell; 
        index++;       
      }
      else if (index == 2) {
            cell2=tmpcell;
            index++;
      }
      else if (index == 3) {
        cell3=tmpcell;
            index++;
       } 

     tmpcell = '';
    }else if (csv[i] == '\n' || i == csv.length ) {
        cell4=tmpcell;
        index=1;
        console.log(cell1, cell2, cell3, cell4); 
        tmpcell = '';  
        cell1 = '';
        cell2 = '';
        cell3 = '';
        cell4 = ''; 
       }else{
        tmpcell=tmpcell+csv[i]; 
           }
      
}



console.log("*************************");
console.log("**********Part 2*********");


// let csv="Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";
// let csv="ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let rows = csv.split('\n'); // split to array and seperate the arrows with the "/n" 
console.log(rows);
let head = rows[0].split(','); // split the first row to colones and seperate the them  with the "," 
let numCol = head.length; // num of column dynamic 

let twoDArray = rows.map(i => i.split(",")); // Store your results in a two-dimensional array
let catchtwoDArray = twoDArray;


console.log(head);
console.log(`Number of columns: ${numCol}`);
console.log(twoDArray);
console.log(twoDArray.length);


console.log("*************************");
console.log("**********Part 3*********");


let objectArray = [];

//loop with i index to go over rows
for (let i = 1; i < twoDArray.length; i++) {
  // creat a and empty object to us it reffiling the object array and reinitial it every row 
    let obj = {};
    //loop with i index to go over columns
    for (let j = 0; j < numCol; j++) {
        // we use the head row as the key of the object every time
        obj[head[j].toLowerCase()] = twoDArray[i][j];

    }
    //add evry object to the object array
    objectArray.push(obj);
}

console.log(objectArray);

console.log("*************************");
console.log("**********Part 4*********");

//Remove the last element from the sorted array
console.log("**********Remove the last element from the sorted array*********");
objectArray.pop();
console.log(objectArray);

// Insert the following object at index 1
console.log("**********Insert object at index 1*********");
objectArray.splice(1,0,{ id: "48", name: "Barry", occupation: "Runner", age: "25" });
console.log(objectArray);

// Add the following object to the end of the array:
console.log("**********Add object to the end of the array:*********");
objectArray.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
console.log(objectArray);


console.log("**********Calculate the average age of the group:*********");
// Finally, use the values of each object within the array and the array’s length property to calculate the average age of the group. 
// This calculation should be accomplished using a loop.

let sumAge=0;

for (let i = 0; i < objectArray.length; i++) {
    // parseInt cover the string into int
    sumAge = sumAge + parseInt(objectArray[i].age);
}

//console.log(sumAge);

let average = sumAge / objectArray.length;
console.log(average);

console.log("*************************");
console.log("**********Part 5*********");

//transform the final set of data back into CSV format.
let finalData = objectArray;

// Get the head first wich is the keys in the objects 
// i get them from the first row and return the to array using the methode Object.keys 
//and join them with ',' using the method join(',')

let finalHead = Object.keys(finalData[0]).join(',');
//console.log(finalHead);


//Get the rows wich is the value in the objects 
// i get them from the all row and return the to array using the methode Object.value
// i used the map methode to go over all the rows values and join them using the join(',')
//after that i jont each row  using join('\n') to breakdown the array

let finalRows = finalData.map(i => Object.values(i).join(',')).join('\n');
//console.log(finalRows);

//concatinate the head with the rows 
let finalCSV = `${finalHead}\n${finalRows}`;
console.log(finalCSV);


