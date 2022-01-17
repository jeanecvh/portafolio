const navBar = document.getElementById("navTemplate")
/**********************MENU RESPONSIVE**********************/
const templateNav = (div) => {
    div.innerHTML = "";
    div.className = "navTemplate";
    let templateTextNav = `
    <a class = "logo" >JEANECVH</a>
    <div id="linkNav" class = "linkNav">
      <ul class="nav-menu nav-menu_visible"  data-animation="center">
        <li class="nav-menu-item">
          <a class="nav-menu-link nav-link">Home</a>
        </li>
        <li>|</li>
        <li class="nav-menu-item">
          <a class="nav-menu-link nav-link ">About</a>
        </li>
        <li>|</li>
        <li class="nav-menu-item">
          <a  class="nav-menu-link nav-link">Work</a>
        </li>
        <li>|</li>
        <li class="nav-menu-item">
          <a class="nav-menu-link nav-link">Contact</a>
        </li>
      </ul>
    </div>
    <div id= "icons" class="icons">
      <ul>
        <li>
          <a href="https://github.com/jeanecvh" target="_blank"><img src="../imagenes/iconos/gitHub.png" alt="GitHub"></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jeanella-hugo" target="_blank"><img src="../imagenes/iconos/linkedin.png" alt="Linkedin"></a>
        </li>
        <li>
          <a href="https://twitter.com/Jeanellach" target="_blank"><img src="../imagenes/iconos/twitter.png" alt="Twitter"></a>
          </li>
      </ul>
    </div>`
    div.innerHTML= templateTextNav
}



templateNav(navBar)
