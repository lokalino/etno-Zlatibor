// Logika za karusel
let currentIndex = 0;
const slides = document.querySelectorAll(".carousel-images img");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.opacity = i === index ? "1" : "0";
    });
}

// Menjaj sliku svakih 3 sekunde
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}
setInterval(nextSlide, 3000);

// Fade-in efekat pri skrolovanju
document.addEventListener("scroll", function() {
    const elements = document.querySelectorAll(".fade-in");
    const scrollPosition = window.scrollY + window.innerHeight;

    elements.forEach((el) => {
        if (scrollPosition > el.offsetTop) {
            el.classList.add("visible");
        }
    });
});
// Otvori modal kada se klikne na dugme
document.getElementById('accessibilityButton').addEventListener('click', function() {
    document.getElementById('accessibilityModal').style.display = 'block';
});

// Zatvori modal kada se klikne na dugme za zatvaranje
document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('accessibilityModal').style.display = 'none';
});

// Funkcionalnosti za opcije pristupačnosti
let textSize = 1;

document.getElementById('zoomIn').addEventListener('click', function() {
    textSize += 0.1;
    document.body.style.fontSize = `${textSize}em`;
});

document.getElementById('zoomOut').addEventListener('click', function() {
    textSize -= 0.1;
    document.body.style.fontSize = `${textSize}em`;
});

document.getElementById('highContrast').addEventListener('click', function() {
    document.body.classList.toggle('high-contrast');
});

document.getElementById('toggleImages').addEventListener('click', function() {
    document.body.classList.toggle('hidden-images');
});

document.getElementById('increaseSpacing').addEventListener('click', function() {
    document.body.classList.toggle('increased-line-spacing');
});

document.getElementById('changeBackground').addEventListener('click', function() {
    document.body.classList.toggle('light-background');
    document.body.classList.toggle('dark-background');
});

document.getElementById('reset').addEventListener('click', function() {
    textSize = 1;
    document.body.style.fontSize = `${textSize}em`;
    document.body.classList.remove('high-contrast', 'hidden-images', 'increased-line-spacing', 'light-background', 'dark-background');
});
// Kada stranica bude učitana, proveriti localStorage i primeniti odgovarajući kontrast
window.addEventListener('load', function() {
    const savedContrast = localStorage.getItem('contrast');
    if (savedContrast) {
        applyContrast(savedContrast);
    }
});