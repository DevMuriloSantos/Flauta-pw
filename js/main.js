const acc1 = document.getElementById('acc1');
const acc2 = document.getElementById('acc2');
const acc3 = document.getElementById('acc3');
const acc4 = document.getElementById('acc4');
const acc5 = document.getElementById('acc5');
const acc6 = document.getElementById('acc6');
const acc7 = document.getElementById('acc7');

acc1.addEventListener('click', function () {
    p1.style.display = 'block';
    p2.style.display = 'none';
    p3.style.display = 'none';
    p4.style.display = 'none';
    p5.style.display = 'none';
    p6.style.display = 'none';
    p7.style.display = 'none';
});

acc2.addEventListener('click', function () {
    p1.style.display = 'none';
    p2.style.display = 'block';
    p3.style.display = 'none';
    p4.style.display = 'none';
    p5.style.display = 'none';
    p6.style.display = 'none';
    p7.style.display = 'none';
});

acc3.addEventListener('click', function () {
    p1.style.display = 'none';
    p2.style.display = 'none';
    p3.style.display = 'block';
    p4.style.display = 'none';
    p5.style.display = 'none';
    p6.style.display = 'none';
    p7.style.display = 'none';
});

acc4.addEventListener('click', function () {
    p1.style.display = 'none';
    p2.style.display = 'none';
    p3.style.display = 'none';
    p4.style.display = 'block';
    p5.style.display = 'none';
    p6.style.display = 'none';
    p7.style.display = 'none';
});

acc5.addEventListener('click', function () {
    p1.style.display = 'none';
    p2.style.display = 'none';
    p3.style.display = 'none';
    p4.style.display = 'none';
    p5.style.display = 'block';
    p6.style.display = 'none';
    p7.style.display = 'none';
});

acc6.addEventListener('click', function () {
    p1.style.display = 'none';
    p2.style.display = 'none';
    p3.style.display = 'none';
    p4.style.display = 'none';
    p5.style.display = 'none';
    p6.style.display = 'block';
    p7.style.display = 'none';
});

acc7.addEventListener('click', function () {
    p1.style.display = 'none';
    p2.style.display = 'none';
    p3.style.display = 'none';
    p4.style.display = 'none';
    p5.style.display = 'none';
    p6.style.display = 'none';
    p7.style.display = 'block';
});

document.addEventListener('contextmenu', event => event.preventDefault());

document.addEventListener('keydown', function (e) {
    if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key.toUpperCase()))
    ) {
        e.preventDefault();
        window.location.href = "http://127.0.0.1:5500/Flauta-pw/404.html"; // ou outra ação
    }
});

