const $canvas = document.getElementById('canvas');
const ctx = $canvas.getContext('2d');

const coupons = [
    '1,000원', '꽝', '2,000원', '꽝', '4,000원', '꽝', '6,000원'
]
const bgColor = [
    "#dc0936", "#e6471d", "#f7a416", "#efe61f", "#60b236", "#209b6c", "#169ed8", "#3f297e", "#87207b",
]

const newMake = () => {
    const [cw, ch] = [$canvas.width / 2, $canvas.height / 2];
    const arc = Math.PI / (coupons.length / 2);

    // 룰렛 배경그리기
    for(let i= 0; i < coupons.length; i++) {
        ctx.beginPath();
        ctx.fillStyle = bgColor[i % (bgColor.length - 1)];
        ctx.moveTo(cw, ch);
        // x, y -> 중점, radius -> 반지름(x와 같은 값)
        // ctx.arc(x, y, radius, startAngle, endAngle);
        ctx.arc(cw, ch, cw, arc * (i - 1), arc * i);
        ctx.fill();
        ctx.closePath();
    }

    ctx.fillStyle = "#fff";
    ctx.font = "16px Pretendard";
    ctx.textAlign = 'center';
    for (let i = 0; i < coupons.length; i++) {
        const angle = (arc * i) + (arc / 2);
        ctx.save();
        ctx.translate(
            cw + Math.cos(angle) * (cw - 50),
            ch + Math.sin(angle) * (ch - 50)
        );
        ctx.rotate(angle + Math.PI / 2);

        // 항목명에 띄어쓰기가 있을 경우 줄바꿈 코드
        coupons[i].split(" ").forEach((text, j) => {
            ctx.fillText(text, 0, 30 * j);
        });
        ctx.restore();
    }
};

// 룰렛 돌리기
const rotate = () => {
    $canvas.style.transform = `initial`;
    $canvas.style.transition = `initial`;

    // 룰렛 당첨자 결정
    setTimeout(() => {
        const ran = Math.floor(Math.random() * coupons.length);
        const arc = 360 / coupons.length;
        const rotate = (ran * arc) + 3600 + (arc * 3) - (arc /4);
        $canvas.style.transform = `rotate(-${rotate}deg)`;
        $canvas.style.transition = '2s';

        setTimeout(() => {
            if(coupons[ran] === '꽝') {
                alert(`${coupons[ran]}입니다.`)
            } else {
                alert(`${coupons[ran]}이 당첨되었습니다.`)
            }
        }, 2000);
    }, 1);
}


newMake();