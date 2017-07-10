'use strict';

const listItems = [
  {name: 'Home', link:'index.html'},
  {name: 'Foo', link:'foo.html'},
  {name: 'Bar', link:'bar.html'},
  {name: 'The Rolling Stones', link:'the-rolling-stones.html'},
  {name: 'The Beatles', link:'beatles.html'},
  {name: 'Queen', link:'queen.html'}
];

const list = document.querySelector(".list-item");
let content = "";
for (const listItem of listItems){
  content += `<li><a class="link-a" href="${listItem.link}">
  ${listItem.name}
  </a></li>`;
}

list.innerHTML = content;
