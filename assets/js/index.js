
function colorcalendar(p,h){
    let boton = document.getElementById(p);
    let text = document.getElementById(h);
    boton.style.backgroundColor = "#7439BD"
    text.style.color = "white"

    btn = document.getElementById('select_calendar')
    btn1 = document.getElementById('select_calendar1')
    btn2 = document.getElementById('select_calendar2')
    let btncolor = document.getElementById('j')
    let p_dise = document.getElementById('p_disebled')


    if ( btn.style.backgroundColor == "rgb(116, 57, 189)" && btn1.style.backgroundColor == "rgb(116, 57, 189)" && btn2.style.backgroundColor == "rgb(116, 57, 189)"  ){
        btncolor.style.backgroundColor = "rgb(116, 57, 189)"
        p_dise.style.display = "block"
    }


}




