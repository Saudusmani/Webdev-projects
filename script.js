// document.addEventListener('DOMContentLoaded', () => {
//     // Smooth scrolling
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener('click', function(e) {
//             e.preventDefault();
//             document.querySelector(this.getAttribute('href')).scrollIntoView({
//                 behavior: 'smooth'
//             });
//         });
//     });

//     // Animate sections on scroll
//     const sections = document.querySelectorAll('section');
//     const options = {
//         threshold: 0.1
//     };

//     const observer = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.style.opacity = 1;
//                 entry.target.style.transform = 'translateY(0)';
//                 observer.unobserve(entry.target);
//             }
//         });
//     }, options);

//     sections.forEach(section => {
//         observer.observe(section);
//     });

//     // Back to top button
//     const backToTopButton = document.getElementById('back-to-top');

//     window.addEventListener('scroll', () => {
//         if (window.scrollY > 100) {
//             backToTopButton.style.display = 'block';
//             backToTopButton.style.opacity = '1';
//         } else {
//             backToTopButton.style.opacity = '0';
//             setTimeout(() => {
//                 backToTopButton.style.display = 'none';
//             }, 300);
//         }
//     });

//     backToTopButton.addEventListener('click', () => {
//         window.scrollTo({
//             top: 0,
//             behavior: 'smooth'
//         });
//     });
// });
