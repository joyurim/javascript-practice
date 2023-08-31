
const prizes = [
    'cu 3천원 상품권', '꽝', '햄버거 세트 교환권', '꽝', '스타벅스 아메리카노', '꽝',
];

const randomRoulette = () => {
    const roulette = document.querySelector('.roulette');
    let targetIndex = -1;

    const random =  Math.floor(Math.random() * prizes.length)
    targetIndex = random;
    roulette.classList.add(`loop-${targetIndex}`);

    setTimeout(() => {
        alert(prizes[targetIndex]);
        roulette.classList.remove(`loop-${targetIndex}`);
    },5000)
}

const doSpin = (price) => {
    const roulette = document.querySelector('.roulette2');
    let targetIndex = -1;
    prizes.forEach( (item, index) => {
        if (index === price) {
            console.log(index)
            targetIndex = index;
            roulette.classList.add(`loop-${targetIndex}`);
        }
    });
    setTimeout(() => {
        alert(prizes[targetIndex]);
        roulette.classList.remove(`loop-${targetIndex}`);
    },5000)
}