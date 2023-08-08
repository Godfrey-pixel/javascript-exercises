const removeFromArray = function(array) {
    const elementsToRemove = Array.from(arguments).slice(1); // Get all elements to remove after the first argument (the array)
    const newArray = array.filter((item) => !elementsToRemove.includes(item));
    return newArray;
  };
  

// Do not edit below this line
module.exports = removeFromArray;
