//========================= BURGER (JS) =========================//

document.addEventListener('click', Burger);

function Burger(e) {
    const targetBurger = e.target;

    if (targetBurger.closest('.icon-menu')) {
        document.documentElement.classList.toggle('menu-open');
    }
}

//========================= BURGER (HTML) =========================//
/*
<a href="#" class="header__logo"></a>

<nav class="header__menu menu">

    <div class="menu__body">
        <ul class="menu__list">
            <li class="menu__item"><a href="#" class="menu__link">Home</a></li>
            <li class="menu__item"><a href="#" class="menu__link">About</a></li>
            <li class="menu__item"><a href="#" class="menu__link">Blog</a></li>
            <li class="menu__item"><a href="#" class="menu__link">News</a></li>
        </ul>
    </div>

    <buton class="menu__icon icon-menu" type="button">
        <span class="icon-menu__line"></span>
    </buton>
    
</nav>
*/