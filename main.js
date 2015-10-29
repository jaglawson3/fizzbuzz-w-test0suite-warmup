
module.exports = {

fizzBuzz:function(number) {

var fizzBuzzArray = [];

for(var i = 0; i < number; i++){

  if(i % 3 === 0 && i % 5===0 && i!==0){

    fizzBuzzArray.push("fizz buzz");

  }

  else if(i % 3===0 && i % 5!==0){

    fizzBuzzArray.push("fizz");

  }

  else if(i % 3!==0 && i % 5===0){

    fizzBuzzArray.push("buzz");

  } else {

      fizzBuzzArray.push(i);
    }
  }
    return fizzBuzzArray;
  }
}
