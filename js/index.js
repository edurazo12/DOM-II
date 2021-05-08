// Your code goes here

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

let buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('mouseenter', event => {
        event.stopPropogation();
    })
})

let newImg = document.querySelectorAll('img')

newImg.forEach(img => {
    img.addEventListener('dblclick', event => {
        img.src = 'https://upload.wikimedia.org/wikipedia/commons/2/22/Da_Vinci_Vitruve_Luc_Viatour.jpg';
    })
})

let body = document.querySelector('body');
body.addEventListener('keypress', event => {
    alert('You pressed me!')
    event.target.style.backgroundColor = 'grey';
})

let mainHeader = document.querySelector('.main-navigation h1');

mainHeader.addEventListener('click', event => {
    alert('Come and get one in the yarbles! If you have any yarbles, you eunuch jelly thou!');
})


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



