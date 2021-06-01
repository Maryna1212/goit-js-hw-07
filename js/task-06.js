'use strict';

// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное 
// количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.


    const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', checkInputLength);

function checkInputLength() {
    if (inputEl.value.length !== Number(inputEl.dataset.length)) {
        inputEl.classList = 'invalid';
    } else {
        inputEl.classList = 'valid';
    }
}
