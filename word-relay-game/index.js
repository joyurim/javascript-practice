const number = parseInt(prompt('몇 명이 참가하나요?'));
const $button = document.querySelector('button');
const $input = document.querySelector('input');
const $word = document.querySelector('#word');
const $order = document.querySelector('#order');

let word; // 제시어
let newWord; // 새로 입력한 단어

const onClickButton = () => {
    if(!word || word[word.length - 1] === newWord[0]) {
        wordInputFunction();
    } else {
        alert('게임종료!\n올바르지 않은 단어입니다.');
        $input.value = '';
        $word.textContent = '';
        $input.focus();
        $order.textContent = 1;
    }
}
const wordInputFunction = () => {
    word = newWord;
    $word.textContent = word;
    $input.value = '';
    const order = parseInt($order.textContent);
    if(order + 1 > number) {
        $order.textContent = 1;
    } else {
        $order.textContent = order + 1;
    }
    $input.value = '';
    $input.focus();
}
const onInput = (event) => {
    newWord = event.target.value;
}
$button.addEventListener('click', onClickButton);
$input.addEventListener('input', onInput)