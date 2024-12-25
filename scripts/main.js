

/*------------------------------------------------------------------------------------------*/
/*--                            Réalisé par OUAMAR Yanis 21315506                         --*/
/*------------------------------------------------------------------------------------------*/


/*------ Ajouter le box shadow lors du scroll ------*/

const navbar = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 10) { // Si on scrolle de plus de 10px
      navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    } else {
      navbar.style.boxShadow = 'none'; // Retirer l'ombre si le scroll revient en haut
    }
  });

/*--------------------------------------------------*/

/*------ Affichage et fermeture du menu hamburger lorsqu on clique sur le menu  ------*/

const menuHamburger = document.querySelector(".hamburger_icon")
const navLinks = document.querySelector(".nav-links")

menuHamburger.addEventListener('click',()=>{
  navLinks.classList.toggle('mobile-menu')
})

/*-------------------------------------------------------------------------------------*/

/*------ Fermer le menu lorsque l'on clique sur un lien de navigation ------*/

const navItems = document.querySelectorAll(".nav-links a"); // Sélectionner tous les liens <a> dans .nav-links

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('mobile-menu'); // Fermer le menu
    });
});

/*--------------------------------------------------------------------------*/

/*------ Colorer les links de la nav bar selon la section ou on se trouve ------*/

// Récupérer toutes les sections et les liens de navigation
const sections = document.querySelectorAll(".section");
const navlinks = document.querySelectorAll(".nav-item");
// Fonction pour détecter la section visible
const updateActiveLink = () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const scrollY = window.scrollY;

    // Vérifier si la section est visible
    if (scrollY >= sectionTop - 50 && scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute("id");
    }
  });

  // Mettre à jour les classes "active"
  navlinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").slice(1) === currentSection) {
      link.classList.add("active");
    }
  });
};

// Écouter l'événement de défilement
window.addEventListener("scroll", updateActiveLink);

/*---------------------------------------------------------------------------------*/

/*------ Activer ou desactiver de la dark mode en cliquant sur theme button ------*/
const toggleButton = document.querySelector('.toggle-dark-mode');
// Activer ou desacter de dark mode 
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle('dark-theme');
  //faire le swith de l'image a afficher soir le soleil si adrk mode , ou moon sinon
  if (document.body.classList.contains('dark-theme')) {
    toggleButton.innerHTML = '<img src="images/brightness-high-fill.svg" width="30" height="30" id="theme-button" class="theme-btn" alt="">'; // Icône lune pour mode sombre
  } else {
    toggleButton.innerHTML = '<img src="images/moon-fill.svg" width="30" height="30" id="theme-button" class="theme-btn" alt="">'; // Icône soleil pour mode clair
  }
});

/*--------------------------------------------------------------------------------*/

/*------ Validation du formulaire ------*/

// Sélectionne le formulaire (element Html de type form)
const formu = document.querySelector('form');

// Lorsqu'on clique sur le bouton Envoyer, on exécute la fonction anonyme passés dans le 2 éme paramétre
formu.addEventListener('submit', function () {

    // Récupère les valeurs des champs inputs au moment de la soumission
    const name_val = document.getElementById('name').value;
    const email_val = document.getElementById('email').value;
    const message_val = document.getElementById('message').value;

    // Creation de l'Objet Client avec les differnts champs 
    const client = {
        
        Nom : name_val,
        Mail : email_val , 
        Message : message_val,
        // La fonction d'affichage 
        presentation : function(){
            alert(`Nom :  ${this.Nom}, Mail :  ${this.Mail}, Message :  ${this.Message}`);
        }
    };

    client.presentation();
   
});

/*-------------------------------------*/

/*------ Ajouter les animations a chaque fois qu on clique sur un boutton qui mene vers l'une des sections ------*/

/// ajouter des animations lors quon clique sur le logo Yanis
document.getElementById('logo-link').addEventListener('click', function (e) {
  e.preventDefault(); // Empêche le comportement par défaut du lien

  const skillsSection = document.getElementById('Home');

  // Scroll fluide vers la section Skills
  skillsSection.scrollIntoView({ behavior: 'smooth' });

  skillsSection.querySelector('.home-text').classList.remove('animate-left');
  skillsSection.querySelector('.home-pic').classList.remove('animate-right');
  skillsSection.querySelector('.home-text').classList.remove('home-text2');
  skillsSection.querySelector('.home-pic').classList.remove('home-pic2');
  // Ajouter l'animation une fois la section atteinte
  setTimeout(() => {
      skillsSection.querySelector('.home-text').classList.add('animate-left');
      skillsSection.querySelector('.home-pic').classList.add('animate-right');
  }, 100); // Délai pour s'assurer que le scroll est terminé
});


/// ajouter des animations lors quon clique sur le link home
document.getElementById('home-link').addEventListener('click', function (e) {
  e.preventDefault(); // Empêche le comportement par défaut du lien

  const skillsSection = document.getElementById('Home');

  // Scroll fluide vers la section Skills
  skillsSection.scrollIntoView({ behavior: 'smooth' });

  skillsSection.querySelector('.home-text').classList.remove('animate-left');
  skillsSection.querySelector('.home-pic').classList.remove('animate-right');
  skillsSection.querySelector('.home-text').classList.remove('home-text2');
  skillsSection.querySelector('.home-pic').classList.remove('home-pic2');
  // Ajouter l'animation une fois la section atteinte
  setTimeout(() => {
      skillsSection.querySelector('.home-text').classList.add('animate-left');
      skillsSection.querySelector('.home-pic').classList.add('animate-right');
  }, 100); // Délai pour s'assurer que le scroll est terminé
});


/// ajouter des animations lors quon clique sur le link skills
document.getElementById('skills-link').addEventListener('click', function (e) {
    e.preventDefault(); // Empêche le comportement par défaut du lien

    const skillsSection = document.getElementById('Skills');

    // Scroll fluide vers la section Skills
    skillsSection.scrollIntoView({ behavior: 'smooth' });

    skillsSection.querySelector('.web-dev').classList.remove('animate-left');
    skillsSection.querySelector('.programmation').classList.remove('animate-right');
    // Ajouter l'animation une fois la section atteinte
    setTimeout(() => {
        skillsSection.querySelector('.web-dev').classList.add('animate-left');
        skillsSection.querySelector('.programmation').classList.add('animate-right');
    }, 100); // Délai pour s'assurer que le scroll est terminé
});


/// ajouter des animations lors quon clique sur le link about 
document.getElementById('about-link').addEventListener('click', function (e) {
  e.preventDefault(); // Empêche le comportement par défaut du lien

  const skillsSection = document.getElementById('About');

  // Scroll fluide vers la section about
  skillsSection.scrollIntoView({ behavior: 'smooth' });

  skillsSection.querySelector('.left-side').classList.remove('animate-left');
  skillsSection.querySelector('.right-side').classList.remove('animate-right');
  // Ajouter l'animation une fois la section atteinte
  setTimeout(() => {
      skillsSection.querySelector('.left-side').classList.add('animate-left');
      skillsSection.querySelector('.right-side').classList.add('animate-right');
  }, 100); // Délai pour s'assurer que le scroll est terminé
});


/// ajouter des animations lors quon clique sur le link Projets 
document.getElementById('projets-link').addEventListener('click', function (e) {
  e.preventDefault(); // Empêche le comportement par défaut du lien

  const skillsSection = document.getElementById('Projets');

  // Scroll fluide vers la section projets
  skillsSection.scrollIntoView({ behavior: 'smooth' });

  skillsSection.querySelector('.ecosysteme').classList.remove('animate-left');
  skillsSection.querySelector('.automates').classList.remove('animate-right');
  // Ajouter l'animation une fois la section atteinte
  setTimeout(() => {
      skillsSection.querySelector('.ecosysteme').classList.add('animate-left');
      skillsSection.querySelector('.automates').classList.add('animate-right');
  }, 100); // Délai pour s'assurer que le scroll est terminé
});


/// ajouter des animations lors quon clique sur le link Contact 
document.getElementById('contact-link').addEventListener('click', function (e) {
  e.preventDefault(); // Empêche le comportement par défaut du lien

  const skillsSection = document.getElementById('Contact');

  // Scroll fluide vers la section contact
  skillsSection.scrollIntoView({ behavior: 'smooth' });

  skillsSection.querySelector('.right-contact').classList.remove('animate-left');
  skillsSection.querySelector('.form-contact').classList.remove('animate-right');
  // Ajouter l'animation une fois la section atteinte
  setTimeout(() => {
      skillsSection.querySelector('.right-contact').classList.add('animate-left');
      skillsSection.querySelector('.form-contact').classList.add('animate-right');
  }, 100); // Délai pour s'assurer que le scroll est terminé
});

/*-------------------------------------------------------------------------------------------------------*/