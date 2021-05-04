const bgMoradoNombreYFoto = {
    idDesktop: document.querySelector('.ml-masterclass-desktop-nombre-y-foto'),
    idMovil: document.querySelector('.ml-masterclass-movil-nombre-y-foto'),
    urlImagenDesktop: 'https://pyndele.co/wp-content/uploads/2021/04/Emprendimiento-de-vida-pura-inspiracion-desktop.jpg',
    urlImagenMovil: 'https://pyndele.co/wp-content/uploads/2021/04/Emprendimiento-de-vida-pura-inspiracion-movil.jpg',
    nombreMasterClass: 'Emprendimiento<br> de vida - pura<br> inspiración',
    nombreExperto: 'Juan Carlos Andrade',
    historia: false
}

const videoIntroduccion = {
    idDesktop: document.querySelector('#ml-masterclass-desktop-introduccion__video'),
    idMovil: document.querySelector('#ml-masterclass-movil-introduccion__video'),
    paragraph: `

    Existen historias de vida que nos inspiran a emprender y desarrollar propósitos que aporten a la transformación positiva del mundo. En esta MasterClass aprenderás de la mano de un emprendedor de vida algunas lecciones que te movilizarán y darán un contundente mensaje que sí se puede, y que lo necesario es pasión y enfoque.
    
    `,
    videoId: '523780012',
}

const aprenderasDirigido = {
    idDesktop: document.querySelector('.ml-masterclass-desktop-aprenderas-dirigido'),
    idMovil: document.querySelector('.ml-masterclass-movil-aprenderas-dirigido'),
    dirigido: `Emprendedores, empresarios, empleados, independientes, consultores, personas apasionadas por lo negocios.`
}

const requisitos = {
    idDesktop: document.querySelector(".ml-masterclass-desktop-requisitos"),
    idMovil: document.querySelector(".ml-masterclass-movil-requisitos"),
    paragraph1: `
        Disponibilidad para aprender de los mejores expertos de industria
    `,
    paragraph2: `
        Disciplina y perseverancia para aprovechar al máximo los contenidos
    `,
    paragraph3: `
        Aplicar los aprendizajes en tu negocio o empresa
    `,
    paragraph4: `
        Apertura a nuevos conocimentos
    `,
}

const redesDeExperto = {
    idDesktop: document.querySelector('.ml-masterclass-desktop-redes-del-expertos'),
    idMovil: document.querySelector('.ml-masterclass-movil-redes-del-expertos'),
    imgExpertoDesktop: 'https://pyndele.co/wp-content/uploads/2021/04/Juan-carlos-Andrade-desktop.png',
    imgExpertoMovil: 'https://pyndele.co/wp-content/uploads/2021/04/Juan-carlos-Andrade-movil.png',
    nombreExperto: `Juan Carlos<br> Andrade`,
    paragraph: `
    Abogado y especialista en derecho laboral y la seguridad social. 
    Su experiencia jurídica ha estado encaminada a los temas de discapacidad,
    inclusión social y educativa. Es un emprendedor de la vida, del conocimiento y dar lo mejor de sí mismo al mundo.
    `,
    instagram: '#',
    linkedin: '#',
    web: '#',

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



// renderiza parrafos de "Que aprendere" y "A quien se dirije"
if (aprenderasDirigido.idDesktop) {
    aprenderasDirigido.idDesktop
        .innerHTML = `
            <div class="ml-masterclass-desktop-aprenderas-dirigido__row">

                <div class="ml-masterclass-desktop-aprenderas-dirigido__row__title">
                    ¿A quien se dirige
                    <span>la masterclass?</span>
                </div>

                <p class="ml-masterclass-desktop-aprenderas-dirigido__row__paragraph"
                    id="ml-masterclass-desktop-que-aprenderas">
                    ${aprenderasDirigido.dirigido}
                </p>

            </div>
        `

}

if (aprenderasDirigido.idMovil) {
    aprenderasDirigido.idMovil
        .innerHTML = `

            <h3 class="ml-masterclass-movil-aprenderas-dirigido__title">
                ¿A quien se dirige 
                <span>la masterclass?</span>
            </h3>

            <p class="ml-masterclass-movil-aprenderas-dirigido__paragraph">
                ${aprenderasDirigido.dirigido}
            </p>
        `
}



if (requisitos.idDesktop) {

    requisitos.idDesktop
        .innerHTML = `
            <h3 class="ml-masterclass-desktop-requisitos__title">Requisitos</h3>

                </div>
            <div class="ml-masterclass-desktop-requisitos__points">

            
                <div class='ml-masterclass-desktop-requisitos__points__item' >
            
                    <div class='ml-masterclass-desktop-requisitos__points__item__circle'></div>

                    <div class="ml-masterclass-desktop-requisitos__points__item__text"
                        id="ml-masterclass-desktop-requisitos__points__item-1">


                        ${requisitos.paragraph1}
                    </div>

                </div>



                <div class='ml-masterclass-desktop-requisitos__points__item' >
            
                    <div class='ml-masterclass-desktop-requisitos__points__item__circle'></div>

                    <div class="ml-masterclass-desktop-requisitos__points__item__text"
                        id="ml-masterclass-desktop-requisitos__points__item-1">


                        ${requisitos.paragraph2}
                    </div>

                </div>
            </div>

            <div class="ml-masterclass-desktop-requisitos__points">

                
                <div class='ml-masterclass-desktop-requisitos__points__item' >
            
                    <div class='ml-masterclass-desktop-requisitos__points__item__circle'></div>

                    <div class="ml-masterclass-desktop-requisitos__points__item__text"
                        id="ml-masterclass-desktop-requisitos__points__item-1">


                        ${requisitos.paragraph3}
                    </div>

                </div>

                
                <div class='ml-masterclass-desktop-requisitos__points__item' >
            
                    <div class='ml-masterclass-desktop-requisitos__points__item__circle'></div>

                    <div class="ml-masterclass-desktop-requisitos__points__item__text"
                        id="ml-masterclass-desktop-requisitos__points__item-1">


                        ${requisitos.paragraph4}
                    </div>

                </div>

            </div>
        `
}

if (requisitos.idMovil) {

    requisitos.idMovil
        .innerHTML = `
            <div class="ml-masterclass-movil-requisitos__title">Requisitos</div>
        
            <div class="ml-masterclass-movil-requisitos__points">
                <span></span>
                <p>
                    ${requisitos.paragraph1}
    
                </p>
            </div>
    
            
            <div class="ml-masterclass-movil-requisitos__points">
                <span></span>
                <p>
                    ${requisitos.paragraph2}
    
                </p>
            </div>
    
            
            <div class="ml-masterclass-movil-requisitos__points">
                <span></span>
                <p>
                    ${requisitos.paragraph3}
    
                </p>
            </div>

            
            <div class="ml-masterclass-movil-requisitos__points">
                <span></span>
                <p>
                    ${requisitos.paragraph4}
    
                </p>
            </div>
        `
}



// renderiza la zona donde estan las redes del experto
if (redesDeExperto.idDesktop) {

    redesDeExperto.idDesktop
        .innerHTML = `
            <img src="${redesDeExperto.imgExpertoDesktop}" alt="${redesDeExperto.nombreExperto}"
                class="ml-masterclass-desktop-redes-del-expertos__fotos">
            <style>
            .ml-masterclass-desktop-redes-del-expertos__fotos{
                margin-left: 5vw;
            }

            </style>
            <div class="ml-masterclass-desktop-redes-del-expertos__nombre">
                ${redesDeExperto.nombreExperto}
            </div>

            <div class="ml-masterclass-desktop-redes-del-expertos__redes">

                <p class="ml-masterclass-desktop-redes-del-expertos__redes__paragraph" style='
                width: 35vw; margin-top: 0vw; 
                '>
                    ${redesDeExperto.paragraph}
                </p>

                <div class="ml-masterclass-desktop-redes-del-expertos__redes__paragraph__row">

                    <a href="${redesDeExperto.instagram}">
                        <img src="https://pyndele.co/wp-content/uploads/2021/04/instagram.svg" alt="instagram" 
                            class="ml-masterclass-desktop-redes-del-expertos__redes__paragraph__row__items">
                    </a>

                    <a href="${redesDeExperto.linkedin}">
                        <img src="https://pyndele.co/wp-content/uploads/2021/04/linkedin.svg" alt="linkedin" 
                            class="ml-masterclass-desktop-redes-del-expertos__redes__paragraph__row__items">
                    </a>

                    <a href="${redesDeExperto.web}">
                        <img src="https://pyndele.co/wp-content/uploads/2021/04/web.svg" alt="web" 
                            class="ml-masterclass-desktop-redes-del-expertos__redes__paragraph__row__items">
                    </a>

                    <img src="https://pyndele.co/wp-content/uploads/2021/04/risa-morada-2.svg" alt="risa morada" 
                        class="ml-masterclass-desktop-redes-del-expertos__redes__paragraph__row__risa-morada"
                        style='margin-top: -3vw; margin-left: 20vw'
                        >

                </div>

            </div>
        `
}

if (redesDeExperto.idMovil) {

    redesDeExperto.idMovil
        .innerHTML = `
            
            <div class="ml-masterclass-movil-redes-del-expertos__perfil">

                <img src="${redesDeExperto.imgExpertoMovil}" alt="${redesDeExperto.nombreExperto}" 
                    class="ml-masterclass-movil-redes-del-expertos__perfil__foto">

                <div class="ml-masterclass-movil-redes-del-expertos__perfil__nombre">
                ${redesDeExperto.nombreExperto}
                </div>
            </div>

            <p class="ml-masterclass-movil-redes-del-expertos__paragraph" >

                ${redesDeExperto.paragraph}


            </p>

            <div class="ml-masterclass-movil-redes-del-expertos__redes">

                <a href="${redesDeExperto.instagram}">
                    <img src="https://pyndele.co/wp-content/uploads/2021/04/instagram.svg" alt="instagram" class="ml-masterclass-movil-redes-del-expertos__redes__items">
                </a>

                <a href="${redesDeExperto.linkedin}">
                    <img src="https://pyndele.co/wp-content/uploads/2021/04/linkedin.svg" alt="linkedin" class="ml-masterclass-movil-redes-del-expertos__redes__items">
                </a>

                <a href="${redesDeExperto.web}">
                    <img src="https://pyndele.co/wp-content/uploads/2021/04/web.svg" alt="web" class="ml-masterclass-movil-redes-del-expertos__redes__items">
                </a>

            </div>

        </div>
        `
} 