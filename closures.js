// Example 1

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
