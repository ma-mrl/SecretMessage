let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// Orignal length of the array
console.log(secretMessage.length);

// Remove last string and check work
secretMessage.pop();
console.log(secretMessage.length);

// Add strings to array
secretMessage.push('to', 'Program');

// Change a string by accessing its index
secretMessage[7] = 'right';

// Remove first string of the array
secretMessage.shift();

// Add string to the beginning of the array
secretMessage.unshift('Programming');

// Remove multiple strings and replace with a single string
secretMessage.splice(6, 5, 'know,');

// Join and print the array as a sentence
console.log(secretMessage.join(' '));