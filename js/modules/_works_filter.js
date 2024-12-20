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