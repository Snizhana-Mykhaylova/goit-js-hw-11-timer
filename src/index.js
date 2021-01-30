import './styles.scss';
import throttle from 'lodash.throttle';
import createDiv from './js/createDiv';
import { add, mult } from './js/calc';

document.body.appendChild(createDiv('webpack is amazing'));

console.log(add(1, 3));
console.log(mult(1, 3));
console.log(throttle);
