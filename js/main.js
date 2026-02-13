// ===== Navbar scroll effect =====
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== Smooth scroll for nav links =====
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: top, behavior: 'smooth' });
    }
    // Close mobile nav
    const navCollapse = document.querySelector('.navbar-collapse');
    if (navCollapse.classList.contains('show')) {
      new bootstrap.Collapse(navCollapse).hide();
    }
  });
});

// ===== Scroll-triggered fade-up animations =====
function handleScrollAnimations() {
  var elements = document.querySelectorAll('.fade-up');
  elements.forEach(function (el) {
    var rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', handleScrollAnimations);
window.addEventListener('load', handleScrollAnimations);

// ===== Active nav link highlight on scroll =====
window.addEventListener('scroll', function () {
  var sections = document.querySelectorAll('section[id]');
  var scrollPos = window.scrollY + 120;

  sections.forEach(function (section) {
    var top = section.offsetTop;
    var height = section.offsetHeight;
    var id = section.getAttribute('id');
    var link = document.querySelector('.nav-link[href="#' + id + '"]');

    if (link) {
      if (scrollPos >= top && scrollPos < top + height) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    }
  });
});
