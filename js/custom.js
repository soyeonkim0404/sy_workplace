setTimeout(() => {
    document.body.className="";
}, 500);

const navIcon = document.querySelector('.navIcon');

navIcon.onclick = () => {
    navIcon.classList.toggle('active');
};