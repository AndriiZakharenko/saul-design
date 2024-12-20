//========================= SMOOTH_SCROLL =========================//

document.addEventListener('click', SmoothScroll);

function SmoothScroll(e) {
    const targetSmoothScroll = e.target;

    if(targetSmoothScroll.closest('[data-goto]')){
        document.documentElement.classList.contains('menu-open') ? document.documentElement.classList.remove('menu-open') : null;

        const goTo = targetSmoothScroll.closest('[data-goto]').dataset.goto;
        const goToElement = document.querySelector(goTo);
        const headerHeight = document.querySelector ('.header').offsetHeight;

        if (goToElement) {
            window.scroll({
                top: goToElement.offsetTop - (headerHeight + 15),
                behavior: "smooth"
            });
        }

        e.preventDefault();
    }
}

//========================= WORKS_FILTER (JS) =========================//

document.addEventListener('click', worksFilter);

function worksFilter(e) {
    const targetWorksFilter = e.target;

    if (targetWorksFilter.classList.contains('items-works__type') && !targetWorksFilter.classList.contains('active')) {
        const activeElement = document.querySelector(`.items-works__type.active`);
        const elements = document.querySelectorAll(`.items-works__item`);
        const elementType = targetWorksFilter.dataset.workType;

        activeElement.classList.remove('active');
        targetWorksFilter.classList.add('active');

        elements.forEach(element => {
            !elementType || element.dataset.workType === elementType ? element.hidden = false : element.hidden = true;
        })
    }
}