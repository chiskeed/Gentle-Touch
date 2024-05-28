const myLink = document.querySelectorAll(".back-arrow");
const favicon = document.querySelector('.favicon');
const banner = document.querySelector('.banner');
const heroHead = document.querySelector(".hero-head");
const heroText = document.querySelector('.hero-text');
const footerImg = document.querySelector('.img-logo2');
const footerText = document.querySelector('.footer-link');




for (link of myLink){
link.href = "https://chiskeed.github.io/Gentle-Touch/";
}
favicon.href = "https://gentletouchschool.com/app/themes/gts-theme/public/images/logo.fe9d59.webp";
banner.textContent = 'Gentle Touch Schools';
banner.style.backgroundColor = '#85C325';
banner.style.color = '#D51679';
heroHead.textContent = 'Welcome to Gentle Touch Schools';
heroText.textContent = 'Wisdom and Knowledge';
footerImg.src = 'https://gentletouchschool.com/app/themes/gts-theme/public/images/logo.fe9d59.webp';
footerText.textContent = 'Gentle Touch Schools';
