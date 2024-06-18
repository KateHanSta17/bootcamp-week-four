const body = document.body;
const h1El = document.createElement('h1');
const infoEl = document.createElement('div');
const imgEl = document.createElement('img');
const kittenEl = document.createElement('div');
const nameEl = document.createElement('div');
const favoriteEl = document.createElement('div');
// Create ordered list element
const listEl = document.createElement('ol');

// Create ordered list items
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const li4 = document.createElement('li');

// Add text content to list items
li1.textContent = 'Pizza 🍕';
li2.textContent = 'Sushi 🍣';
li3.textContent = 'Ice Cream 🍦';
li4.textContent = 'Tacos 🌮';

// Append list items to the ordered list
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);

h1El.textContent = 'Welcome to my page';
kittenEl.textContent = 'This is my kitten 🐱.';
nameEl.textContent = 'His name is Jax.';
favoriteEl.textContent = 'My favorite foods are:';

body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
// Append ordered list
favoriteEl.appendChild(listEl);

h1El.setAttribute('style', 'margin:auto; width:50%; text-align:center;');
infoEl.setAttribute('style', 'margin:auto; width:50%; text-align:center;');
imgEl.setAttribute('src', 'bootcamp-week-four/04-Web-APIs/01-Activities/08-Stu_Create-Append/Unsolved/orange-tabby-kitten.png');
nameEl.setAttribute('style', 'font-size:25px; text-align:center;');
kittenEl.setAttribute('style', 'font-size:25px; text-align:center;');
favoriteEl.setAttribute('style', 'font-size:20px;');

// Style the ordered list
listEl.setAttribute('style', 'background-color:#333333; padding:20px;');

// Array of background colors for list items
const colors = ['#474747', '#5b5b5b', '#707070', '#848484'];

// Style each list item
const listItems = [li1, li2, li3, li4];
listItems.forEach((li, index) => {
  li.setAttribute('style', `color:white; padding:5px; margin-left:35px; background-color:${colors[index]};`);
});

// After creating an element in JavaScript, what additional step 
// must you take to attach the element to the HTML document?

// Create the element using document.createElement().
// Set any desired content or attributes on the element.
// Append the element to an existing parent element in the document using methods like appendChild(), insertBefore(), or append().


// What is the difference between append() and appendChild()?
// Both used to add nodes to the DOM, but they have differences in functionality.

// Flexibility: append() is more flexible as it can append multiple nodes and strings in a single call, 
// whereas appendChild() can only append one node at a time.

// Return Value: appendChild() returns the appended node, while append() does not return any value.

// Types of Content: append() can append both Node objects and strings, whereas appendChild() can only 
// append Node objects.



