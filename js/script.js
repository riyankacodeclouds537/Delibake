document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
  
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  });
  const openSearch = document.getElementById('openSearch');
  const searchBar = document.getElementById('searchBar');
  const clearSearch = document.getElementById('clearSearch');

  openSearch?.addEventListener('click', () => {
    searchBar?.classList.toggle('hidden');
  });

  clearSearch?.addEventListener('click', () => {
    searchBar?.classList.add('hidden');
  });
  const cards = document.querySelectorAll('.category-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0');
        entry.target.classList.remove('opacity-0', 'translate-y-6');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
  });

  cards.forEach(card => {
    observer.observe(card);
  });
  AOS.init({
    duration: 800, // animation duration in ms
    once: true,    // animation happens only once on scroll
  });