/*function darkMode(){
    /* Guardando en una variable a body
    para utilizarla despues  */
    /*const body = document.body;*/
    const themeLink = document.getElementaryById('tema');
    const buttonTheme = document.getElementById('dark-mode');
    if(themeLink.getAttribute('href') === 'style.css'){
      themeLink.setAttribute('href', 'style-dark-mode.css');
      localStorage.setItem('tema', 'oscuro');
      buttonTheme.classList.add('btn-oscuro');
    }else{
        themeLink.setAttribute('href', 'style.css');
      localStorage.setItem('tema', 'claro');
      buttonTheme.classList.remove('btn-oscuro');
    }

    /* classlist esta en todos los elementos 
    y permite acceder y manipular clases de css */
    //NOMBRE DE LA CLASE: DARK MODE
    //body.classList.toggle("dark-mode");
    //le agrega la clase al momento 
//}

function darkMode(){
let toggle = document.getElementById("toggle");
let label_toggle = document.getElementById("label_toggle");
toggle.addEventListener("change", (event) => {
  let checked = event.target.checked;
  document.body.classList.toggle("dark");
  if (checked == true) {
    label.innerHTML = '<i class="fa-solid fa-sun"></i>';
    label_toggle.style.color="ligtblue"
  } else {
    label_toggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    label_toggle.stylr.color="black"
  }
});
}
