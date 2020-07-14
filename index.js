/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

var votingAge;
if (votingAge > 18) {
    console.log(true);
}else{
    console.log(false);
}





//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

var A = 0 ,B = 5;

if (B === 5){
    A = 1
}



//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
Number.parseInt('1999');




//Task d: Write a function to multiply a*b 
const multiply = function(num1,num2){
    return num1*num2;
};

console.log(multiply(30,17))





/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function multiply(age){
    return age*7;
   
};

   console.log(multiply(24));





/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
let DogFeeder = function(Age,Pounds){
    if (Age >= 1){
        
        if (Pounds < 5){                    //Evaluating if statements are true!!!!
            return (.05*Pounds);
        }
        else if(Pounds > 5 && Pounds <= 10){
            return (.04*Pounds)
        }
        else if (Pounds > 10 && Pounds <= 15){
            return(.03*Pounds)
        }

        else if (Pounds > 15){
            return(.02*Pounds)
        }
    }
    else{
        let ageInMonths = Age/12;
       
      if(ageInMonths > 2/12  && ageInMonths <= 4/12){
            return(Pounds*.10)
        }
        else if (ageInMonths > 4/12 && ageInMonths <= 7/12){
            return(Pounds*.05)
        }
        if(ageInMonths > 7/12 && ageInMonths <= 12/12){
            return(Pounds*.04)
        }
    }
}

console.log(DogFeeder(12/12, 15));






  






/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

let Winner = function(decision){

    console.log("you chose: " + decision);

    let bot = Math.random(); //only returns number between 0 and 1
    //if i took a range between 0 and 1 and multiplied it by 5, i would get a range between 0 and 5
    //that means i can do: Math.random() * 100, this will get me a range between 0 and 100.
    //if i wanted to translate a range, i can add or subtract, so: Math.random() + 5 will get me a range from 5 to 6
   
    if(bot <= 1/3){
        console.log("bot chose rock");
      if (decision === 'Rock') 
      return ('Draw');

       if (decision === 'Paper') 
      return ('Win');

      if (decision === 'Scissors') 
      return ('Lose');
        //rock
        //who is the winner based on both of our decisions?

    }
    
    else if (bot > 1/3 && bot <= 2/3){
        console.log("bot chose paper");
        if (decision === 'Rock')
        return( 'Lose')

        if (decision === 'Paper')
        return( 'Draw')

        if (decision === 'Scissors')
        return( 'Win')
        //paper
    }

    else if(bot > 2/3){
        console.log("bot chose scissors");
        if (decision === 'Rock')
        return( 'Win')

        if (decision === 'Paper')
        return( 'Lose')

        if (decision === 'Scissors')
        return( 'Draw')
        //scissors
    }
   
}

console.log(Winner('Rock'))



  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

let Measurement = function (Km){
return(Km/1.609344);
}

console.log(Measurement(5))





//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  let Ruler = function (Feet){
      return(Feet*30.48)
  }
  console.log(Ruler(5))



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

let annoyingSong = function(number){
    for (let i = number; i > 0; i--){
        console.log(i + ' bottles of soda on the wall, ' + i + ' bottles of soda, take one down pass it around ' + --i + ' left over bottles of soda on the wall');
    }
}

annoyingSong(56);





/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
let Grade = function(number){
    if (number >= 90){
    return("A");    
    }else if (number >= 80){
        return("B")
    }else if (number >= 70){
        return("C")
    }else if (number >= 60){
        return("D")
    }else if (number < 60){
        return("F")
    }
}
    
console.log(89)
   
                        
                
        
        



  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





