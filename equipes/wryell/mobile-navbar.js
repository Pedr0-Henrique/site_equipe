class MobileNavbar {
  constructor(mobileMenu, navList, navLinks, aboutMenus) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.aboutMenus = document.querySelectorAll(aboutMenus);
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
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();

    // Fechar todas as barras de navegação à esquerda se estiverem abertas
    this.aboutMenus.forEach((menu) => {
      menu.style.left = "-300px";
      menu.querySelector(".active").style.display = "none";
    });
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const nomeLink = document.querySelector(".logo");
  const containerPerfil = document.querySelector(".ContainerPerfil");
  const perfil = document.querySelector(".Perfil");
  const aboutMenus = [".about-menu", ".about-menu-projetos", ".about-menu-contato"];

  nomeLink.addEventListener("click", function (e) {
    e.preventDefault();
    containerPerfil.classList.toggle("active");
    perfil.classList.toggle("active");
  });

  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
    aboutMenus
  );
  mobileNavbar.init();
});
