
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


    if ( btn.style.backgroundColor == "rgb(116, 57, 189)"){
        btncolor.style.backgroundColor = "rgb(116, 57, 189)"
        p_dise.style.display = "block"
    }

    if(btn1.style.backgroundColor == "rgb(116, 57, 189)"){
        btncolor.style.backgroundColor = "rgb(116, 57, 189)"
        p_dise.style.display = "block"
    }

    if(btn2.style.backgroundColor == "rgb(116, 57, 189)" ){
        btncolor.style.backgroundColor = "rgb(116, 57, 189)"
        p_dise.style.display = "block"
    }


}


//Calendar Desktop

function colorcalendardesktop(a,b){
    let boton = document.getElementById(a);
    let text = document.getElementById(b);
    boton.style.backgroundColor = "#7439BD"
    text.style.color = "white"

    btn = document.getElementById('div_calen')
    btn1 = document.getElementById('div_calen2')
    btn2 = document.getElementById('div_calen3')
    let btncolor = document.getElementById('btn_send')
    let p_dise = document.getElementById('tex_desible')


    if ( btn.style.backgroundColor == "rgb(116, 57, 189)"){
        btncolor.style.backgroundColor = "rgb(116, 57, 189)"
        p_dise.style.display = "block"
    }

    if(btn1.style.backgroundColor == "rgb(116, 57, 189)"){
        btncolor.style.backgroundColor = "rgb(116, 57, 189)"
        p_dise.style.display = "block"
    }

    if(btn2.style.backgroundColor == "rgb(116, 57, 189)" ){
        btncolor.style.backgroundColor = "rgb(116, 57, 189)"
        p_dise.style.display = "block"
    }


}



