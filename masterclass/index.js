const bgMoradoNombreYFoto = {
    idDesktop: document.querySelector('.ml-masterclass-desktop-nombre-y-foto'),
    idMovil: document.querySelector('.ml-masterclass-movil-nombre-y-foto'),
    urlImagenDesktop: 'https://pyndele.co/wp-content/uploads/2021/04/Descubre-el-poder-del-plan-de-marketing-desktop-1.jpg',
    urlImagenMovil: 'https://pyndele.co/wp-content/uploads/2021/04/Descubre-el-poder-del-plan-de-marketing-movil-1.jpg',
    nombreMasterClass: 'Descubre el<br> poder del plan<br> de marketing',
    nombreExperto: 'Edy Muñoz',
    historia: false
}

const videoIntroduccion = {
    idDesktop: document.querySelector('#ml-masterclass-desktop-introduccion__video'),
    idMovil: document.querySelector('#ml-masterclass-movil-introduccion__video'),
    paragraph: `

    El marketing es una herramienta que permite organizar los procesos para llegar  adecuadamente al mercado. En esta MasterClass aprenderás acerca de la importancia del plan de marketing como una herramientas de planificación y organización de los objetivos, estrategias y tácticas a desarrollar en tu negocio o empresa.
    
    `,
    videoId: '523839367',
}





// renderiza basandose en la constante [bgMoradoNombreYFoto] nombre de masterclass en fondo purpura con degradado
if (bgMoradoNombreYFoto.idDesktop) {

    bgMoradoNombreYFoto.idDesktop
        .style.cssText = `
            background: url(${bgMoradoNombreYFoto.urlImagenDesktop});
            background-size: cover;
            background-repeat: no-repeat;
        `

    bgMoradoNombreYFoto.idDesktop
        .innerHTML = `
            <div class="ml-masterclass-desktop-nombre-y-foto__info">

                ${bgMoradoNombreYFoto.historia === false ? '' : `
                
                    <div class="ml-masterclass-desktop-nombre-y-foto__historia">Historia de negocio</div>
                `}
        

                <div class="ml-masterclass-desktop-nombre-y-foto__info__nombre-masterclass">${bgMoradoNombreYFoto.nombreMasterClass}</div>

                <h3 class="ml-masterclass-desktop-nombre-y-foto__info__nombre-experto"> 
                    
                <img src="https://pyndele.co/wp-content/uploads/2021/04/risa-morada-2.svg" 
                        alt="risa cain" class="ml-masterclass-desktop-nombre-y-foto__info__nombre-experto__risa-purple">
                
                    ${bgMoradoNombreYFoto.nombreExperto} 
                    
                </h3>

            </div>
        
        `
}

if (bgMoradoNombreYFoto.idMovil) {

    bgMoradoNombreYFoto.idMovil
        .style.cssText = `
            background: url(${bgMoradoNombreYFoto.urlImagenMovil});
            background-repeat: no-repeat;
            background-size: cover;
        `

    bgMoradoNombreYFoto.idMovil
        .innerHTML = `

            ${bgMoradoNombreYFoto.historia === false ? '' : `
                    
                <div class="ml-masterclass-desktop-nombre-y-foto__historia">Historia de negocio</div>
            `}
            <div class="ml-masterclass-movil-nombre-y-foto__nombre-masterclass">${bgMoradoNombreYFoto.nombreMasterClass}</div>

            <h3 class="ml-masterclass-movil-nombre-y-foto__nombre-experto"> 
                <img src="https://pyndele.co/wp-content/uploads/2021/04/risa-morada-2.svg" alt="risa cain">
                ${bgMoradoNombreYFoto.nombreExperto}    
            </h3>
        `
}



// renderiza basandose en la constante [videoIntroduccion] el video de introdduccion y parrafo
if (videoIntroduccion.idDesktop) {

    videoIntroduccion.idDesktop
        .innerHTML = `
            <iframe class='ml-masterclass-desktop-introduccion__video'
            src="https://player.vimeo.com/video/${videoIntroduccion.videoId}?badge=0&autopause=0&player_id=0&app_id=58479"
            frameborder="0"
            allowfullscreen="allowfullscreen">
            <span data-mce-type="bookmark" class="mce_SELRES_start">﻿
            </span>
            </iframe>
        `

    document.querySelector('.ml-masterclass-desktop-introduccion__info__paragraph')
        .innerHTML = `${videoIntroduccion.paragraph}`

}

if (videoIntroduccion.idMovil) {

    videoIntroduccion.idMovil
        .innerHTML = `
            
        <iframe class='ml-masterclass-movil-introduccion__video'
            src="https://player.vimeo.com/video/${videoIntroduccion.videoId}?badge=0&autopause=0&player_id=0&app_id=58479"
            frameborder="0"
            allowfullscreen="allowfullscreen">
            <span data-mce-type="bookmark" class="mce_SELRES_start">﻿
            </span>
        </iframe>
            
        `

    document.querySelector('.ml-masterclass-movil-introduccion__paragraph')
        .innerHTML = `${videoIntroduccion.paragraph}`

}


