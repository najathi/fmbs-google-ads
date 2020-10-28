const $arrow = document.querySelector('.arrow');
const $arrow2 = document.querySelector('.arrow2');
const $body = document.querySelector('body');

$body.onload = () => {
    $arrow.animate([
        { left: '0' },
        { left: '10px' },
        { left: '0' }
    ], {
        duration: 700,
        iterations: Infinity
    });

    $arrow2.animate([
        { left: '0' },
        { left: '10px' },
        { left: '0' }
    ], {
        duration: 700,
        iterations: Infinity
    });
}