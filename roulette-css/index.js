
const prizes = [
    'cu 3천원 상품권', '꽝', '햄버거 세트 교환권', '꽝', '스타벅스 아메리카노', '꽝',
];

let checked = false

const doSpin = (price) => {

    const roulette = document.querySelector('.roulette');
    let targetIndex = -1;

    prizes.forEach( (item, index) => {
        if (index === price) {
            console.log(price)
            targetIndex = index;
            roulette.classList.add(`loop-${targetIndex}`);
        }
    });
    setTimeout(() => {
        alert(prizes[targetIndex]);
    },5000)
}

