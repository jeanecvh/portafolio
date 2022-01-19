const home = document.getElementById("home-div")
/**************** HOME TEMPLETE ************************/

const templateHome = (div) => {
    div.innerHTML = "";
    div.className = "home-template";
    templateTextHome = `
    <div class ="div-text-home">
        <div class ="text-home">
        <p>
            HELLO!<br>
            MY NAME IS :<br>
            JEANELLA<br>
            AND I’M FRONTEND<br>
            DEVELOPER<br>
        </p>      
        </div>
    </div>
    <div class ="div-photo-home">
        <img src="../imagenes/yo/JeanellaHugo.jpg" alt="photoJeanella" class ="photo-home"> 
    </div>`
    div.innerHTML= templateTextHome
}
templateHome(home)
