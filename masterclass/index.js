<script> 

const urlBase = 'https://pyndele.co'

const bgMoradoNombreYFoto = {
    idDesktop: document.querySelector('.ml-masterclass-desktop-nombre-y-foto'),
    idMovil: document.querySelector('.ml-masterclass-movil-nombre-y-foto'),
    urlImagenDesktop: `https://pyndele.co/wp-content/uploads/Poniendo-en-practica-la-calidad-de-vida-en-el-emprendimiento-desktop.jpg`,
    urlImagenMovil: `https://pyndele.co/wp-content/uploads/Poniendo-en-practica-la-calidad-de-vida-en-el-emprendimiento-movil.jpg`,
    nombreMasterClass: 'Poniendo en práctica<br> la calidad de vida en<br> el emprendimiento',
    nombreExperto: 'Daniel Herrera.',
    historia: false
}

const videoIntroduccion = {
    idDesktop: document.querySelector('.ml-masterclass-desktop-introduccion'),
    idMovil: document.querySelector('.ml-masterclass-movil-introduccion'),
    paragraph: `
    
    Uno de los retos a los que te enfrentarás en el camino del emprendimiento es mantener tu calidad de vida mientras te esfuerzas por cumplir tus metas, que probablemente te exigiran mucho esfuerzo y dedicación de tiempo. En esta MasterClass aprenderás ejercicios prácticos que te apoyarán a tener una vida equilibrada mientras pones en marcha tu empresa.
    
    `,
    videoId: '0000',
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

    // <lite-vimeo videoid="${ videoIntroduccion.videoId }" class="ml-masterclass-desktop-introduccion__video">
    // </lite-vimeo>
    videoIntroduccion.idDesktop
        .innerHTML = `

            <iframe class='ml-masterclass-desktop-introduccion__video'
            src="https://player.vimeo.com/video/${videoIntroduccion.videoId}?badge=0&autopause=0&player_id=0&app_id=58479"
            frameborder="0"
            allowfullscreen="allowfullscreen">
            <span data-mce-type="bookmark" class="mce_SELRES_start">﻿
            </span>
            </iframe>

            <div class="ml-masterclass-desktop-introduccion__info">

                <div style='display:flex; flex-direction: column;'>
                
                    <h3 class='ml-masterclass-desktop-introduccion__info__title'>
                    
                    ¿Que aprenderé <br> <span>con esta masterclass?</span> 
                    
                    </h3>
                    
                    <p class="ml-masterclass-desktop-introduccion__info__paragraph">
                    
                    ${videoIntroduccion.paragraph}
                    
                    <img src="https://pyndele.co/wp-content/uploads/2021/04/tres-puntos.svg" 
                    alt="tres puntos" class="ml-masterclass-desktop-introduccion__info__paragraph__tres-puntos">
                    
                    </p>
                
                </div>

                <div class="ml-masterclass-desktop-introduccion__info__valor"></div>

            </div>
        `
}

if (videoIntroduccion.idMovil) {

    // <lite-vimeo videoid="${ videoIntroduccion.videoId }" class="ml-masterclass-movil-introduccion__video">
    // </lite-vimeo>
    videoIntroduccion.idMovil
        .innerHTML = `
            <iframe class='ml-masterclass-movil-introduccion__video'
                src="https://player.vimeo.com/video/${videoIntroduccion.videoId}?badge=0&autopause=0&player_id=0&app_id=58479"
                frameborder="0"
                allowfullscreen="allowfullscreen">
                <span data-mce-type="bookmark" class="mce_SELRES_start">﻿
                </span>
            </iframe>

            <h3 class='ml-masterclass-movil-introduccion__title' >
                ¿Que aprenderé en esta <br> <span> masterclas</span>
            </h3>

            <p class="ml-masterclass-movil-introduccion__paragraph">
            
                ${videoIntroduccion.paragraph}

            </p>

            <div class="ml-masterclass-movil-introduccion__woo"></div>

        `
}




 </script>