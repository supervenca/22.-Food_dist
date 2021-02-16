require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';
import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import calc from './modules/calc';
import cards from './modules/cards';
import slider from './modules/slider';
import forms from './modules/forms';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
    const modalTimerId = setTimeout(() => openModal('.modal',modalTimerId), 50000);
    let deadline = new Date(Date.parse(new Date()) + 5 * 24 * 60 * 60 * 1000);

    tabs('.tabheader__item','.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]','.modal',modalTimerId);
    timer('.timer',deadline);
    cards();
    calc();
    slider({
        container: '.offer__slider',
        nextArrow : '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        slide: '.offer__slide',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
    forms('form', modalTimerId);
});
