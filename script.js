const tarjetas = document.querySelectorAll('.actividad-carta');
const grid = document.querySelector('.actividades-grid');

tarjetas.forEach((tarjeta) => {
    tarjeta.addEventListener('click', () => {
        const activar = tarjeta.classList.contains('activar')
        if (activar) {
            console.log(tarjeta);
            console.log('activar');
        } else {
            console.log(tarjeta);
            console.log('not activar');
            removeactivarClasses();
            grid.style.display = "block";
            grid.classList.add('actividades-grid-activar');
            tarjeta.classList.remove('no-activar');
            tarjeta.classList.add('activar');
            tarjeta.classList.add('actividad-carta-activar');
            const img = tarjeta.querySelector('.actividad-img');
            if (img) img.classList.add('actividad-img-activar');
            const info = tarjeta.querySelector('.actividad-info');
            if (info) info.classList.add('actividad-info-activar');
            const icon = tarjeta.querySelector('.actividad-icon');
            if (icon) icon.classList.add('actividad-icon-activar');
            const infoText = tarjeta.querySelector('.actividad-info-text');
            if (infoText) infoText.classList.add('actividad-info-text-activar');
            const text = tarjeta.querySelector('.actividad-txt');
            if (text) text.classList.add('actividad-txt-activar');
            const button = tarjeta.querySelector('.actividad-button');
            if (button) button.classList.add('actividad-button-activar');
            const time = tarjeta.querySelector('.text-long');
            if (time) time.classList.add('text-long-activar');
            const close = tarjeta.querySelector('.close-button');
            if (close) close.style.display = "block"
        }
    });
});


function removeactivarClasses() {
    console.log("removeactivarClasses");


    tarjetas.forEach(tarjeta => {
        tarjeta.classList.add('no-activar');
        tarjeta.classList.remove('activar');
        tarjeta.classList.remove('actividad-carta-activar');
        const img = tarjeta.querySelector('.actividad-img');
        if (img) img.classList.remove('actividad-img-activar');
        const info = tarjeta.querySelector('.actividad-info');
        if (info) info.classList.remove('actividad-info-activar');
        const icon = tarjeta.querySelector('.actividad-icon');
        if (icon) icon.classList.remove('actividad-icon-activar');
        const infoText = tarjeta.querySelector('.actividad-info-text');
        if (infoText) infoText.classList.remove('actividad-info-text-activar');
        const text = tarjeta.querySelector('.actividad-txt');
        if (text) text.classList.remove('actividad-txt-activar');
        const button = tarjeta.querySelector('.actividad-button');
        if (button) button.classList.remove('actividad-button-activar');
        const time = tarjeta.querySelector('.text-long');
        if (time) time.classList.remove('text-long-activar');
        const close = tarjeta.querySelector('.close-button');
        if (close) close.style.display = "none"
    });
}


function resetView() {
    console.log("resetView");
    

    grid.classList.remove('actividades-grid-activar');
    tarjetas.forEach(tarjeta => {
        tarjeta.classList.remove('no-activar');
        tarjeta.classList.remove('activar');
        tarjeta.classList.remove('actividad-carta-activar');
        const img = tarjeta.querySelector('.actividad-img');
        if (img) img.classList.remove('actividad-img-activar');
        const info = tarjeta.querySelector('.actividad-info');
        if (info) info.classList.remove('actividad-info-activar');
        const icon = tarjeta.querySelector('.actividad-icon');
        if (icon) icon.classList.remove('actividad-icon-activar');
        const infoText = tarjeta.querySelector('.actividad-info-text');
        if (infoText) infoText.classList.remove('actividad-info-text-activar');
        const text = tarjeta.querySelector('.actividad-txt');
        if (text) text.classList.remove('actividad-txt-activar');
        const button = tarjeta.querySelector('.actividad-button');
        if (button) button.classList.remove('actividad-button-activar');
        const time = tarjeta.querySelector('.text-long');
        if (time) time.classList.remove('text-long-activar');
        const close = tarjeta.querySelector('.close-button');
        if (close) close.style.display = "none"
    });
    grid.style.display = "grid";
}


const closeButtons = document.querySelectorAll('.close-button');
closeButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.stopPropagation();
        resetView();
    });
});
