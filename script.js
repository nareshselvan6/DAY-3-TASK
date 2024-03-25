// ! Task 1

let obj1 = { name: "person 1", age: 5 };
let obj2 = { age: 5, name: "person 1" };

function compareJSON(obj1, obj2) {
  let obj1Keys = Object.keys(obj1);
  let obj2Keys = Object.keys(obj2);

  for (let i = 0; i < obj1Keys.length; i++) {
    let prop = obj1Keys[0];
    if (obj1[prop] !== obj2[prop]) {
      return false;
    }
  }

  return true;
}

if (compareJSON(obj1, obj2)) {
  console.log("The objects have the same properties.");
} else {
  console.log("The objects do not have the same properties.");
}

// ! Task 2

var request = new XMLHttpRequest;
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var data = request.response;
  var result = JSON.parse(data);
  for (var i = 0; i < result.length; i++) {
    console.log(result[i].flags.svg);
  }
}

//! Task 3
 
var request2 = new XMLHttpRequest;
request2.open("GET","https://restcountries.com/v3.1/all");
request2.send();
request2.onload=function(){
    var data2 = request2.response;
    var result2 = JSON.parse(data2);
    for(var j = 0;j<result2.length;j++){
        console.log("Country name: " + result2[j].name.common,"Region: "+ result2[j].region,"Subregion: " + result2[j].subregion, "Population: "+ result2[j].population)
    }
}

 

