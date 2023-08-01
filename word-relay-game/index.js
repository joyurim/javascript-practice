const number = parseInt(prompt('몇 명이 참가하나요?'));

if(number) {
    console.log(number, '111')
    const $button = document.querySelector('button');
    const $input = document.querySelector('input');
    const $word = document.querySelector('#word');
    const $order = document.querySelector('#order');

    let word; // 제시어
    let newWord; // 새로 입력한 단어

    const onClickButton = () => {
        if(newWord.length === 3 && (!word || word[word.length - 1] === newWord[0])) {
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
        word = newWord; // 입력한 단어가 제시어가 됨
        $word.textContent = word;
        $input.value = '';

        const order = parseInt($order.textContent); // 현제 순서
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
} else {
    console.log(number, '222')
}
