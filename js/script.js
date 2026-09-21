// Nil Veralu Web Design — site scripts

document.addEventListener('DOMContentLoaded', function () {

  // Footer year
  var yearEls = document.querySelectorAll('#year');
  yearEls.forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Mobile nav toggle
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
      });
    });
  }

  // Pre-select interest dropdown based on ?plan= or ?package= query params
  var interestSelect = document.getElementById('interest');
  if (interestSelect) {
    var params = new URLSearchParams(window.location.search);
    var plan = params.get('plan');
    var pkg = params.get('package');
    var map = {
      Bronze: 'Bronze Plan - Rs. 999/month',
      Silver: 'Silver Plan - Rs. 1,999/month',
      Gold: 'Gold Plan - Rs. 2,999/month',
      '4-page': '4 Page Website - Rs. 4,999',
      '6-page': '6 Page Website - Rs. 6,999',
      '8-page': '8 Page Website - Rs. 8,999'
    };
    var key = plan || pkg;
    if (key && map[key]) {
      interestSelect.value = map[key];
    }
  }

  // Contact form handling (front-end only — opens a pre-filled email)
  var contactForm = document.getElementById('contactForm');
  var formSuccess = document.getElementById('formSuccess');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = document.getElementById('name').value.trim();
      var email = document.getElementById('email').value.trim();
      var phone = document.getElementById('phone').value.trim();
      var interest = document.getElementById('interest').value;
      var message = document.getElementById('message').value.trim();

      var bodyLines = [
        'Name: ' + name,
        'Email: ' + email,
        'Phone: ' + (phone || 'N/A'),
        'Interested in: ' + (interest || 'N/A'),
        '',
        message
      ];

      var mailto = 'mailto:damitha.fe1@gmail.com'
        + '?subject=' + encodeURIComponent('Website Inquiry from ' + name)
        + '&body=' + encodeURIComponent(bodyLines.join('\n'));

      if (formSuccess) {
        formSuccess.classList.add('visible');
      }

      window.location.href = mailto;
      contactForm.reset();
    });
  }
});
