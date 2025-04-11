// Example 1
// Create a function that generates custom greeting functions for different languages.

function createGreeter(language) {
  const greetings = {
    'English': 'Hello',
    'Spanish': 'Hola',
  };
  
  // Get the appropriate greeting or default to English if language not found
  const greeting = greetings[language] || greetings['English'];
  
  // Return a new function that will greet a person in the specified language
  return function(name) {
    return `${greeting}, ${name}!`;
  };
}

// Usage examples:
const greetEnglish = createGreeter('English');
const greetSpanish = createGreeter('Spanish');
const greetFrench = createGreeter('French');

console.log(greetEnglish('John')); // Hello, John!
console.log(greetSpanish('John')); // Hola, John!
console.log(greetFrench('John')); // Bonjour, John!

<!-------------------------------------------------------------------------------------------------------------------------------------------------------------->

// Example 2
// Create a counter module that offers increment, decrement, and reset functionality while keeping the count private
function counterModule() {
    let count = 0;
    
    return {
        getCount: function() {
            return count;
        },
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        reset: function() {
            count = 0;
            return count;
        }
    };
}

const counter = counterModule();
console.log(counter.getCount()); // 0
counter.increment();
counter.increment();
console.log(counter.getCount()); // 2
counter.decrement();
console.log(counter.getCount()); // 1
counter.reset();
console.log(counter.getCount()); // 0

<!--------------------------------------------------------------------------------------------------------------------------------------------------------------->

// Example 3 
// Create a password validator function that remembers a secret password.

function createPasswordValidator(correctPassword) {
  // Your code here
  // Should return a function that checks if a given password matches
    
    return function checkingPassword(pass){
        if(pass == correctPassword){
            return true
        }else return false
    }
    
}

// Expected usage:
const validatePassword = createPasswordValidator('secret123');

console.log(validatePassword('password'));  // Should return false
console.log(validatePassword('secret123')); // Should return true

<!--------------------------------------------------------------------------------------------------------------------------------------------------------------->

// Example 4
// Exercise Logger :- Create a function that keeps track of exercises completed.

function exerciseTracker() {
    let exercises = [];
    let completedExercises = [];
    
    let trackExercises = {
        addExercise: function(exercise) {
            exercises.push(exercise);
        },
        completeExercise: function(exercise) {
            completedExercises.push(exercise);
        },
        getCompletedExercises: function() {
            return completedExercises;
        },
        getAllExercises: function() {
            return exercises;
        },
        isCompleted: function(exercise) {
            if(completedExercises.includes(exercise)) {
                return true;
            } else {
                return false;
            }
        }
    };
    
    return trackExercises;
}

// Expected usage:
const tracker = exerciseTracker();

tracker.addExercise('Push-ups');
tracker.addExercise('Squats');
tracker.completeExercise('Push-ups');

console.log(tracker.getCompletedExercises());  // Should return ['Push-ups']
console.log(tracker.getAllExercises());        // Should return ['Push-ups', 'Squats']
console.log(tracker.isCompleted('Push-ups'));  // Should return true
console.log(tracker.isCompleted('Squats'));    // Should return false

<!--------------------------------------------------------------------------------------------------------------------------------------------------------------->
// Example 5
// Understanding Scope and Execution Context What will this code print and why? Try to predict before running it.
  
let message = 'Hello';

function greet() {
  let message = 'Hi';
  
  function sayGreeting() {
    console.log(message);
  }
  
  return sayGreeting;
}

const greeting = greet();
greeting(); // What will this print?  // Hi

<!--------------------------------------------------------------------------------------------------------------------------------------------------------------->

//Example 6
//Simple Counter with Customization

function createCustomCounter(startValue) {
 
  let count = startValue;
  
  let randomCounter = {
      get : function(){
          return count
      },
      increment : function(){
          count++
          return count
      },
      decrement : function(){
          count--
          return count
      }
    } 
    
    return randomCounter;
}

// Expected usage:
const counterFrom5 = createCustomCounter(5);
console.log(counterFrom5.get());  // Should return 5
counterFrom5.increment();
console.log(counterFrom5.get());  // Should return 6
counterFrom5.decrement();
counterFrom5.decrement();
console.log(counterFrom5.get());  // Should return 4

const counterFrom10 = createCustomCounter(10);
console.log(counterFrom10.get()); // Should return 10
