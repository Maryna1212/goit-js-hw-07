'use strict';

// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const counter = {
    value: 0,
    increment() {
      this.value += 1;
      valueEl.textContent = counter.value;
    },
    decrement() {
      this.value -= 1;
      valueEl.textContent = counter.value;
    },
  };
  
const incrementEl = document.querySelector('button:last-child');
const decrementEl = document.querySelector('button:first-child');
const valueEl = document.querySelector('#value');
  
incrementEl.addEventListener('click', () => counter.increment());
decrementEl.addEventListener('click', () => counter.decrement());