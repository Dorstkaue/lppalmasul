const gallery = document.querySelector('.gallery__items');
document.querySelector('.gallery__next').addEventListener('click', () => gallery.scrollBy({ left: 240, behavior: 'smooth' }));
document.querySelector('.gallery__prev').addEventListener('click', () => gallery.scrollBy({ left: -240, behavior: 'smooth' }));
