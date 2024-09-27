(function (window, document) {
    const markers = document.querySelectorAll('mark');
    let userActionTriggered = false;

    window.addEventListener('scroll', function() {
        userActionTriggered = true;
    });

    document.addEventListener('click', function() {
        userActionTriggered = true;
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting && entry.target.closest('#resume-section') === null) {
                if (userActionTriggered) {
                    entry.target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center',
                    });
                }

                requestAnimationFrame(() => {
                    entry.target.style.animation = 'none'; 
                    setTimeout(() => {
                        entry.target.style.animation = ''; 
                        entry.target.style.animationPlayState = 'running';
                    }, index * 250);
                });
            } else {
                requestAnimationFrame(() => {
                    entry.target.style.animationPlayState = 'paused';
                });
            }
        });
    }, {
        threshold: 0
    });

    markers.forEach(mark => {
        observer.observe(mark);
    });

        document.addEventListener('DOMContentLoaded', function() {
            const projectTiles = document.querySelectorAll('.projects-loop');
            const sectionItems = document.querySelectorAll('.section-item'); 

            const observer = new IntersectionObserver(entries => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add('visible');
                        }, index * 200); 
                    }
                });
            }, {
                threshold: 0.12 
            });

            sectionItems.forEach(item => {
                observer.observe(item);
            });
        
            projectTiles.forEach(tile => {
                observer.observe(tile);
            });
            

        });

    document.querySelectorAll('mark').forEach((mark, index) => {
        mark.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'; 
        mark.style.transitionDelay = `${index * 0.3}s`; 
        mark.style.animationPlayState = 'paused';
        mark.style.animationIterationCount = '1'; 
    });

    window.addEventListener('scroll', function () {
        const banner = document.querySelector('.banner');
        let scrollPos = window.scrollY;
        banner.style.backgroundPositionY = `${scrollPos * 0.5}px`;
    });

    let debounceTimer;
    window.addEventListener('scroll', function () {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
        }, 100);
    });

    window.addEventListener('DOMContentLoaded', function() {
        userActionTriggered = false; 
    });
})(window, document);

document.querySelectorAll('mark').forEach((mark, index) => {
    mark.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'; 
    mark.style.transitionDelay = `${index * 0.3}s`; 
    mark.style.animationPlayState = 'paused';
    mark.style.animationIterationCount = '1'; 
});

window.addEventListener('scroll', function () {
    const banner = document.querySelector('.banner');
    let scrollPos = window.scrollY;
    banner.style.backgroundPositionY = `${scrollPos * 0.5}px`;
});

