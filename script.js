window.addEventListener('scroll', function () {
  localStorage.setItem('scrollPosition', window.scrollY);
});

window.addEventListener('load', function () {
  var savedScrollPosition = localStorage.getItem('scrollPosition');
  if (savedScrollPosition) {
    window.scrollTo(0, savedScrollPosition);
  }
});

const navbar = document.getElementById('navbar');
window.onscroll = function () {
  scrolllFunction();
};

function scrolllFunction() {
  if (document.body.scrollTop > 20 || document.body.scrollTop < 20) {
    navbar.classList.add('active');
  } else {
    navbar.classList.remove('active');
  }
}

const scrollRevealOption = {
  distance: '50px',
  origin: 'bottom',
  duration: 1000,
};
const scrollRevealtransparent = {
  distance: '50px',
  opacity: 0.2,
  duration: 1000,
};

ScrollReveal().reveal('.header h2', scrollRevealOption);
ScrollReveal().reveal('.header h1', { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal('.header .card-tags', { ...scrollRevealtransparent, delay: 1000 });
ScrollReveal().reveal('.title', { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal('.card_container', { ...scrollRevealOption, delay: 1000 });
ScrollReveal().reveal('section h1', scrollRevealOption);
ScrollReveal().reveal('.text', { ...scrollRevealOption, delay: 1000 });
ScrollReveal().reveal('section h2', { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal('section .item', { ...scrollRevealOption, delay: 1000 });
ScrollReveal().reveal('section .row', { ...scrollRevealOption, delay: 2000 });

// Emailjs
function sendMail() {
  var params = {
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };

  const serviceID = 'service_6vdthof';
  const templateID = 'template_6c5yd7w';

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
      console.log(res);
      alert('Your message sent successfully!!');
    })
    .catch((err) => console.log(err));
}
// End Emailjs

// $.ajax({
//   url: '/predict',
//   type: 'POST',
//   success: function(response) {
//       // Response akan berisi bagian HTML yang di-return oleh endpoint Flask
//       var section = response.section;
//       // Gunakan bagian HTML untuk dimasukkan ke dalam halaman
//       $('#aplication').html(section);
//   },
//   error: function(error) {
//       console.log(error);
//   }
// });
