// Developer Test 

// Basic JavaScript (bonus for efficiency):

// Below are varriables to be used for the below questions
// Global Varriables

var departmentInfo = require('./json/departmentInfo.json');
var objectArray = require('./json/objectArray.json');
var people = require('./json/people.json');

var objectF = {
  value: 'f',
  Id: 5
};


// end Global Varriables 

// 1. Write a function that adds two given numbers

const addTwoNumbers = (num1, num2) => {
    return num1 + num2;
}

console.log("Sum of 23 & 52 is "+addTwoNumbers(23,52));

// 2. Adding 'objectF' to an 'objectArray'

//adds objectF as final element of array
objectArray.push(objectF);

// adds objectF as first element of array
objectArray.unshift(objectF);

// 3. Write a function that returns Id 3 from 'objectArray'
const getId3ElementsFromObjectArray = (objArray) => {
    objArray.filter(obj => 
        obj.Id == 3
    )
};

console.log("Printing id3 elements from objectArray " + getId3ElementsFromObjectArray(objectArray));


// 4. Write a function that merges 'people' with 'departmentInfo' based on department

const merge = (arrObj1, arrObj2, mergeKey) => {
    const mergedArray = [];
    arrObj1.forEach(arr1 => {
        let mergableObj = arrObj2.find(arr2 => arr2[mergeKey] == arr1[mergeKey]);
        if(mergableObj)
            mergedArray.push({...arr1, ...mergableObj });
        else
            mergedArray.push(arr1);
    });
    return mergedArray;
}
console.log("Merged array of people and department is ",merge(people, departmentInfo, "department"));