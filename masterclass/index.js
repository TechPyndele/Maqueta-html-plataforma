
const bgMoradoNombreYFoto = {
    idDesktop: document.querySelector('.ml-masterclass-desktop-nombre-y-foto'),
    idMovil: document.querySelector('.ml-masterclass-movil-nombre-y-foto'),
    urlImagenDesktop: 'https://pyndele.co/wp-content/uploads/2021/04/Desarrollar-un-negocio-escalable-si-es-posible.jpg',
    urlImagenMovil: 'https://pyndele.co/wp-content/uploads/2021/04/Desarrollar-un-negocio-escalable-si-es-posible-movil.jpg',
    nombreMasterClass: 'Desarrollar un negocio <br> escalable sí es posible',
    nombreExperto: 'Ángel Celis Botto',
    historia: true
}

const videoIntroduccion = {
    idDesktop: document.querySelector('.ml-masterclass-desktop-introduccion'),
    idMovil: document.querySelector('.ml-masterclass-movil-introduccion'),
    paragraph: `En esta masterClass aprenderás de la mano de un emprendedor y empresario tecnológico de gran trayectoria, consejos prácticos para aplicar en tus iniciativas de negocios y empresa. 
    Realizarás un recorrido por puntos clave orientados al crecimiento, desde la importancia de los equipos y la construcción de un negocio rentable. Pasando por el desarrollo tecnológico propio de la revolución industrial 4.0, el foco estratégico, la toma de decisiones y la importancia de los datos en los negocios.`,
    videoId: '524660836',
}

const aprenderasDirigido = {
    idDesktop: document.querySelector('.ml-masterclass-desktop-aprenderas-dirigido'),
    idMovil: document.querySelector('.ml-masterclass-movil-aprenderas-dirigido'),
    aprenderas: `
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
        laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
        ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.`,
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
    imgExpertoDesktop: 'https://pyndele.co/wp-content/uploads/2021/04/Angel-Celis-Botto-Desktop.png',
    imgExpertoMovil: 'https://pyndele.co/wp-content/uploads/2021/04/Angel-Celis-Botto-Movil.png',
    nombreExperto: 'Ángel <span>Celis Botto.</span>',
    paragraph: `
    Co-founder y líder de tecnología y producto y Liftit. A sido cofundador de 4 compañías en los últimos 10 años, 3 respaldadas por VC. Cree que las startups también son uno de los mejores vehículos para maximizar el crecimiento de las personas. 
    Considera el Internet como un igualador de oportunidades y de ese pensar deriva su pasión de crear más que empresas, crear equipos, crear misión y visión.
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
        `
}



// renderiza la zona donde estan las redes del experto
if (redesDeExperto.idDesktop) {

    redesDeExperto.idDesktop
        .innerHTML = `
            <img src="${redesDeExperto.imgExpertoDesktop}" alt="${redesDeExperto.nombreExperto}"
                class="ml-masterclass-desktop-redes-del-expertos__fotos">

            <div class="ml-masterclass-desktop-redes-del-expertos__nombre">
                ${redesDeExperto.nombreExperto}
            </div>

            <div class="ml-masterclass-desktop-redes-del-expertos__redes">

                <p class="ml-masterclass-desktop-redes-del-expertos__redes__paragraph" style='
                width: 30vw;
                '>
                    ${redesDeExperto.paragraph}
                </p>

                <div class="ml-masterclass-desktop-redes-del-expertos__redes__paragraph__row">

                    <a href="${redesDeExperto.instagram}">
                        <img src="https://pyndele.co/wp-content/uploads/2021/04/instagram.svg" alt="instagram" class="ml-masterclass-desktop-redes-del-expertos__redes__paragraph__row__items">
                    </a>

                    <a href="${redesDeExperto.linkedin}">
                        <img src="https://pyndele.co/wp-content/uploads/2021/04/linkedin.svg" alt="linkedin" class="ml-masterclass-desktop-redes-del-expertos__redes__paragraph__row__items">
                    </a>

                    <a href="${redesDeExperto.web}">
                        <img src="https://pyndele.co/wp-content/uploads/2021/04/web.svg" alt="web" class="ml-masterclass-desktop-redes-del-expertos__redes__paragraph__row__items">
                    </a>

                    <img src="https://pyndele.co/wp-content/uploads/2021/04/risa-morada-2.svg" alt="risa morada" class="ml-masterclass-desktop-redes-del-expertos__redes__paragraph__row__risa-morada">

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