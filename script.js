// Assume these are the externally provided libraries
const library1 = {
  // This function checks if a name starts with the letter 'J'
  // It currently has a bug that fails for lowercase 'j'
  startsWithJ: function (name) {
    // Fixing the bug to check for both uppercase and lowercase 'J'
    return name.trim().charAt(0).toLowerCase() === 'j';
  }
};

const library2 = {
  // This function capitalizes the first letter of a name
  // It currently has a bug that doesn't capitalize properly
  capitalize: function (name) {
    // Fixing the bug to properly capitalize the first letter
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
};

// Array of names
const names = ['John', 'Jane', 'Michael', 'Alice', 'Jill'];

// Loop over the names array and perform the actions as described
names.forEach(name => {
  // Check if the name starts with 'J' using library1
  if (library1.startsWithJ(name)) {
    // If it starts with 'J', print "Goodbye JSomeName"
    console.log('Goodbye ' + library2.capitalize(name));
  } else {
    // If it starts with any other letter, print "Hello SomeName"
    console.log('Hello ' + library2.capitalize(name));
  }
});
