
// Photo data
const photoSets = [
    [
        { id: 1, url: './David-1.jpeg', alt: 'Momento especial 1' },
        { id: 2, url: './David-2.jpeg', alt: 'Momento especial 2' },
        { id: 3, url: './David-3.jpeg', alt: 'Momento especial 3' },
        { id: 4, url: './David-4.jpeg', alt: 'Momento especial 4' },
        { id: 5, url: './David-5.jpeg', alt: 'Momento especial 5' }
    ],
    [
        { id: 6, url: './Messias-1.jpeg', alt: 'Lembrança doce 1' },
        { id: 7, url: './Messias-2.jpeg', alt: 'Lembrança doce 2' },
        { id: 8, url: './Messias-3.jpeg', alt: 'Lembrança doce 3' },
        { id: 9, url: './Messias-4.jpeg', alt: 'Lembrança doce 4' },
        { id: 10, url: './Messias-5.jpeg', alt: 'Lembrança doce 5' }
    ],
    [
        { id: 11, url: './Helcio-1.jpeg', alt: 'Nosso amor 1' },
        { id: 12, url: './Helcio-2.jpeg', alt: 'Nosso amor 2' },
        { id: 13, url: './Helcio-3.jpeg', alt: 'Nosso amor 3' },
        { id: 14, url: './Helcio-4.jpeg', alt: 'Nosso amor 4' },
        { id: 15, url: './Helcio-5.jpeg', alt: 'Nosso amor 5' }
    ]
];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Generate photo galleries
    generatePhotoGalleries();
    
    // Add staggered animation to elements
    addStaggeredAnimations();
});

// Photo Gallery Functions
function generatePhotoGalleries() {
    photoSets.forEach((photoSet, index) => {
        const gallery = document.getElementById(`gallery${index + 1}`);
        
        photoSet.forEach((photo, photoIndex) => {
            const photoItem = createPhotoItem(photo, photoIndex);
            gallery.appendChild(photoItem);
        });
    });
}

function createPhotoItem(photo, index) {
    const photoItem = document.createElement('div');
    photoItem.className = 'photo-item';
    photoItem.style.animationDelay = `${index * 0.1}s`;
    photoItem.onclick = () => openModal(photo.url);
    
    const img = document.createElement('img');
    img.src = photo.url;
    img.alt = photo.alt;
    img.loading = 'lazy';
    
    photoItem.appendChild(img);
    return photoItem;
}

// Modal Functions
function openModal(imageUrl) {
    const modal = document.getElementById('photoModal');
    const modalImage = document.getElementById('modalImage');
    
    modalImage.src = imageUrl;
    modal.classList.add('active');
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

function closeModal(event) {
    // Close if clicking outside the image or on close button
    if (!event || event.target.id === 'photoModal' || event.target.closest('.modal-close')) {
        const modal = document.getElementById('photoModal');
        modal.classList.remove('active');
        
        // Restore body scroll
        document.body.style.overflow = 'auto';
    }
}

// Animation Functions
function addStaggeredAnimations() {
    const elements = document.querySelectorAll('.animate-fade-in');
    
    elements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.1}s`;
    });
}

// Keyboard Event Handlers
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Smooth scroll for better UX
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add loading states and error handling for images
function handleImageLoad() {
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        img.addEventListener('error', function() {
            this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y5ZjlmOSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OTk5OSI+SW1hZ2VtIG7Do28gZW5jb250cmFkYTwvdGV4dD48L3N2Zz4=';
        });
    });
}

// Initialize image loading handlers
document.addEventListener('DOMContentLoaded', handleImageLoad);

// Add resize handler for responsive adjustments
window.addEventListener('resize', debounce(function() {
    // Add any responsive adjustments here if needed
    console.log('Window resized');
}, 250));

// Console welcome message
console.log('💖 Bem-vindos ao nosso Álbum de Fotos! 💖');
console.log('Para trocar as imagens, edite as URLs no array photoSets no arquivo script.js');
