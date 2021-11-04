//menu responsivo
class ResponseNavbar {
    constructor(responseMenu,navList, navLinks ) {
        this.responseMenu = document.querySelector(responseMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);

        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
          link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${
                index / 7 + 0.3
              }s`);
        });
      }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.responseMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.responseMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.responseMenu) {
            this.addClickEvent();
        }
        return this;
    }

}

const responseNavbar = new ResponseNavbar(
    ".response-menu",
    ".nav-list",
    ".nav-list li",
);

responseNavbar.init();