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

/*
<a href="#" class="header__logo"></a>

<nav class="header__menu menu">

    <div class="menu__body">
        <ul class="menu__list">
            <li class="menu__item"><a data-goto=".home" href="#" class="menu__link">Home</a></li>
            <li class="menu__item"><a data-goto=".about" href="#" class="menu__link">About</a></li>
            <li class="menu__item"><a data-goto=".blog" href="#" class="menu__link">Blog</a></li>
            <li class="menu__item"><a data-goto=".news" href="#" class="menu__link">News</a></li>
        </ul>
    </div>
    
</nav>
*/


