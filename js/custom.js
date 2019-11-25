setTimeout(() => {
    document.body.className="";
}, 500);

const navIcon = document.querySelector('.navIcon');
const cate = document.getElementById('cate');

navIcon.onclick = () => {
    navIcon.classList.toggle('active');
    cate.classList.toggle('active');
};