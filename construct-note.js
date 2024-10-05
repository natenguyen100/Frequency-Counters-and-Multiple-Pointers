// add whatever parameters you deem necessary
function constructNote(message, letters) {
    // Create a frequency counter for the letters
    const letterCount = {};
    
    // Count the occurrence of each letter in 'letters'
    for (let letter of letters) {
      letterCount[letter] = (letterCount[letter] || 0) + 1;
    }
  
    // Check if the message can be constructed
    for (let char of message) {
      if (!letterCount[char]) {
        return false; // if the letter is not in the letters or already used up
      }
      letterCount[char]--; // use the letter
    }
    
    return true;
  }
