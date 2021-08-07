// Your code goes here

// This is the first event listener: when mouseover occurs the text vecomes highlighted blue

let navBar = document.querySelectorAll('a');

navBar.forEach(nav => {nav.addEventListener('mouseover', event => {
    event.target.style.borderBottom = '1px solid black';
    event.target.style.color = 'blue';
})
  nav.addEventListener('mouseleave', event => {
      event.target.style.border = 'none';
      event.target.style.color = 'black';
  })
  nav.addEventListener('click', event => {
      event.preventDefault();
  })

})

// This is the second event listener: whenever you press on the buttons throughout the page it prevents the event from the 
// capture phase.

let buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('mouseenter', event => {
        event.stopPropogation();
    })
})

// This is the third event listener: whenever you double click on any of the images on the webpage, the 
// virtruvian man comes up.

let newImg = document.querySelectorAll('img')

newImg.forEach(img => {
    img.addEventListener('dblclick', event => {
        img.src = 'https://upload.wikimedia.org/wikipedia/commons/2/22/Da_Vinci_Vitruve_Luc_Viatour.jpg';
    })
})

// This is the fourth event listener: When you press on the header that reads "Pick your Destination!"

let pickhead = document.querySelector('.magnification_easter');
pickhead.addEventListener('click', event => {
    alert('You pressed me!');
})

// This is the fifth event listener: whenever you press on the "Fun bus" text on the navigation bar
// a quote from A Clockwork Orange comes to life with a special comedic quote. 

let mainHeader = document.querySelector('.main-navigation h1');

mainHeader.addEventListener('click', event => {
    alert('Come and get one in the yarbles! If you have any yarbles, you eunuch jelly thou!');
})

// This is the sixth event listener: whenever you press on "Adventure Awaits" it will turn the color of the text to green.

let adventureHead = document.querySelector('.magnification_easter_adventure');

adventureHead.addEventListener('click', event => {
    adventureHead.style.color = "green";
})

// This is the seventh event listener: whenever you hover over the First image of the bus it will allow you to magnify it!






let destinations = document.querySelectorAll('.destination');

destinations.forEach(destination => {
    destination.addEventListener('mouseenter', event => {
        event.target.style.backgroundColor = 'blue';
        event.target.style.color = 'white';
        event.target.style.borderRadius = '7px';
        event.target.style.padding = '3px';
    })
    destination.addEventListener('mouseleave', event => {
        event.target.style.backgroundColor = 'white';
        event.target.style.color = 'black';
        event.target.style.padding = '0px';
    })
})



