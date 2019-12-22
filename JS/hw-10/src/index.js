import './theme.js';
import './styles.css';
import menuItem from './menu.hbs';
import menu from './menu.json';

const ref={
    ul: document.querySelector('.menu')
};

function makeMenu(menu) {
    const make = menu.map( menu => menuItem(menu)).join('');
    ref.ul.insertAdjacentHTML('beforeend', make);
};
makeMenu(menu);


