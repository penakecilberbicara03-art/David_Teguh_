// Animasi Progress Bar saat di-scroll
const skillSection = document.querySelector('.bento-section');
const progressBars = document.querySelectorAll('.bar-inner');

function showProgress() {
    progressBars.forEach(progressBar => {
        const value = progressBar.dataset.width;
        progressBar.style.width = value;
    });
}

window.addEventListener('scroll', () => {
    const sectionPos = skillSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.2;

    if (sectionPos < screenPos) {
        showProgress();
    }
});

// Logika sederhana untuk klik logo kembali ke atas
document.querySelector('.logo').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
