document.addEventListener("DOMContentLoaded", () => {
    if ('IntersectionObserver' in window) {
        let observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    observer.unobserve(lazyImage);
                }
            });
        });

        document.querySelectorAll('.lazy-load').forEach(img => {
            observer.observe(img);
        });
    }
});
