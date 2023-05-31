//Accessing Elements
var p = document.querySelector ('p');
p.innerHTML = "Yes you did it! You have just changed the content of an HTML Tag";
//Adding and Removing Elements
var h1 = document.createElement ('h1');
h1.innerHTML = "This is a header 1";
// If we execute the code above the h1 won't appear because it is not attached to a parent in the html file. To solve it:
var content = document.querySelector ('#content');
content.appendChild(h1);
---
//Remove a child
  
