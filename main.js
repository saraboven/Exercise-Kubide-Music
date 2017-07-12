'use strict';

const toggleMenu = function () {
  const menu = document.querySelector('.nav-small');
  menu.classList.toggle('hide');
};

const button = document.querySelector('.btn-menu');
button.addEventListener('click', toggleMenu);

const listItems = [
  // {name: 'Home', link:'index.html'},
  {name: 'Foo', link:'foo.html'},
  {name: 'Bar', link:'bar.html'},
  {name: 'Queen', link:'queen.html'},
  {name: 'The Beatles', link:'beatles.html'},
  {name: 'The Rolling Stones', link:'the-rolling-stones.html'}
];

const list = document.querySelector(".nav-small");
const list2 = document.querySelector(".list-item");
let content = "";
for (const listItem of listItems){
  content += `<li><a class="link-a" href="${listItem.link}">
  ${listItem.name}
  </a></li>`;
}

list.innerHTML = content;
list2.innerHTML = content;
