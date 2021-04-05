

const bgMoradoNombreYFoto = {
    idDesktop: document.querySelector('.ml-masterclass-desktop-nombre-y-foto'),
    idMovil: document.querySelector('.ml-masterclass-movil-nombre-y-foto'),
    urlImagenDesktop: 'https://pyndele.co/wp-content/uploads/2021/04/master-class-foto-experto-nombre-2.png',
    urlImagenMovil: 'https://pyndele.co/wp-content/uploads/2021/04/Recurso-1-8-1.png',
    nombreMasterClass: 'Nombre de la <span>Master class.</span>',
    nombreExperto: 'Nombre del experto ',
}

const videoIntroduccion = {
    idDesktop: document.querySelector('.ml-masterclass-desktop-introduccion'),
    idMovil: document.querySelector('.ml-masterclass-movil-introduccion'),
    paragraph: `
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
        laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
        ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.`,
    videoId: '507229784',
}

const aprenderasDirigido = {
    idDesktop: document.querySelector('.ml-masterclass-desktop-aprenderas-dirigido'),
    idMovil: document.querySelector('.ml-masterclass-movil-aprenderas-dirigido'),
    aprenderas: `
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
        laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
        ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.`,
    dirigido: `
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
        laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
        ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.            `
}

const requisitos = {
    idDesktop: document.querySelector(".ml-masterclass-desktop-requisitos"),
    idMovil: document.querySelector(".ml-masterclass-movil-requisitos"),
    paragraph1: `
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
    `,
    paragraph2: `
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
    `,
    paragraph3: `
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
    `,
    paragraph4: `
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
    `,
}

const redesDeExperto = {
    idDesktop: document.querySelector('.ml-masterclass-desktop-redes-del-expertos'),
    imgExperto: 'https://pyndele.co/wp-content/uploads/2021/04/Recurso-14-8.png',
    nombreExperto: 'Carolina <span>Melendez</span>',
    paragraph: `
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
        laoreet dolore magna aliquam erat volutpat. Ut wvisi enim ad minim veniam, quis nostrud exerci
        tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.`,
    instagram: '#',
    linkedin: '#',
    web: '#',

}





// renderiza basandose en la constante [bgMoradoNombreYFoto] nombre de masterclass en fondo purpura con degradado
if (bgMoradoNombreYFoto.idDesktop) {

    document.querySelector('.ml-masterclass-desktop-nombre-y-foto ')
        .style.cssText = `
            background: url(${bgMoradoNombreYFoto.urlImagenDesktop});
            background-size: cover;
            background-repeat: no-repeat;
            `

    bgMoradoNombreYFoto.idDesktop.innerHTML = `
    
        <div class="ml-masterclass-desktop-nombre-y-foto__info">

            <div class="ml-masterclass-desktop-nombre-y-foto__info__nombre-masterclass">${bgMoradoNombreYFoto.nombreMasterClass}</div>

            <h3 class="ml-masterclass-desktop-nombre-y-foto__info__nombre-experto"> 
                
            <img src="https://pyndele.co/wp-content/uploads/2021/03/risa-cain.svg" 
                    alt="risa cain" class="ml-masterclass-desktop-nombre-y-foto__info__nombre-experto__risa-cain">
            
                ${bgMoradoNombreYFoto.nombreExperto} 
                
            </h3>

        </div>
    
    `

}

if (bgMoradoNombreYFoto.idMovil) {

    bgMoradoNombreYFoto.idMovil.style.cssText = `
        background: url(${bgMoradoNombreYFoto.urlImagenMovil});
        background-repeat: no-repeat;
        background-size: cover;
    `

    bgMoradoNombreYFoto.idMovil.innerHTML = `
        <div class="ml-masterclass-movil-nombre-y-foto__nombre-masterclass">${ bgMoradoNombreYFoto.nombreMasterClass }</div>

        <h3 class="ml-masterclass-movil-nombre-y-foto__nombre-experto"> 
            <img src="https://pyndele.co/wp-content/uploads/2021/03/risa-cain.svg" alt="risa cain">
            ${ bgMoradoNombreYFoto.nombreExperto }    
        </h3>
    `
}





// renderiza basandose en la constante [videoIntroduccion] el video de introdduccion y parrafo
if (videoIntroduccion.idDesktop) {
    
    videoIntroduccion.idDesktop.innerHTML = `
        <lite-vimeo videoid="${ videoIntroduccion.videoId }" class="ml-masterclass-desktop-introduccion__video">
        </lite-vimeo>

        <div class="ml-masterclass-desktop-introduccion__info">

            <p class="ml-masterclass-desktop-introduccion__info__paragraph">
            
                ${videoIntroduccion.paragraph}

                <img src="https://pyndele.co/wp-content/uploads/2021/04/tres-puntos.svg" 
                    alt="tres puntos" class="ml-masterclass-desktop-introduccion__info__paragraph__tres-puntos">
            
            </p>

            <div class="ml-masterclass-desktop-introduccion__info__valor"></div>

        </div>
    `



}

if (videoIntroduccion.idMovil) {

    videoIntroduccion.idMovil.innerHTML = `
    
        <lite-vimeo videoid="${ videoIntroduccion.videoId }" class="ml-masterclass-movil-introduccion__video">
        </lite-vimeo>

        <p class="ml-masterclass-movil-introduccion__paragraph">
        
            ${videoIntroduccion.paragraph}

        </p>

        <div class="ml-masterclass-movil-introduccion__woo"></div>

    `


    
}




// renderiza parrafos de "Que aprendere" y "A quien se dirije"
if (aprenderasDirigido.idDesktop) {
    aprenderasDirigido.idDesktop.innerHTML = `
    
        <div class="ml-masterclass-desktop-aprenderas-dirigido__row">

            <div class="ml-masterclass-desktop-aprenderas-dirigido__row__title">
                ¿Que aprenderé
                <span>con esta masterclass?</span>
            </div>

            <p class="ml-masterclass-desktop-aprenderas-dirigido__row__paragraph"
                id="ml-masterclass-desktop-que-aprenderas">
                ${ aprenderasDirigido.aprenderas }
            </p>

        </div>

        <div class="ml-masterclass-desktop-aprenderas-dirigido__row">

            <div class="ml-masterclass-desktop-aprenderas-dirigido__row__title">
                ¿A quien se dirige
                <span>la masterclass?</span>
            </div>

            <p class="ml-masterclass-desktop-aprenderas-dirigido__row__paragraph"
                id="ml-masterclass-desktop-a-quien-se-dirige">
                ${ aprenderasDirigido.dirigido }
            </p>

        </div>
    `

}

if (aprenderasDirigido.idMovil) {
    aprenderasDirigido.idMovil.innerHTML = `
        <h3 class="ml-masterclass-movil-aprenderas-dirigido__title">
            ¿Que aprenderé
            <span>con esta masterclass?</span>
        </h3>

        <p class="ml-masterclass-movil-aprenderas-dirigido__paragraph">
            ${ aprenderasDirigido.aprenderas }
        </p>

        <h3 class="ml-masterclass-movil-aprenderas-dirigido__title">
            ¿A quien se dirige 
            <span>la masterclass?</span>
        </h3>

        <p class="ml-masterclass-movil-aprenderas-dirigido__paragraph">
            ${ aprenderasDirigido.dirigido }
        </p>
    `
}



if (requisitos.idDesktop) {

    requisitos.idDesktop.innerHTML = `
        <h3 class="ml-masterclass-desktop-requisitos__title">Requisitos</h3>

        <div class="ml-masterclass-desktop-requisitos__points">

            <div class="ml-masterclass-desktop-requisitos__points__item"
                id="ml-masterclass-desktop-requisitos__points__item-1">
                ${ requisitos.paragraph1 }
            </div>


            <div class="ml-masterclass-desktop-requisitos__points__item"
                id="ml-masterclass-desktop-requisitos__points__item-2">
                ${ requisitos.paragraph2 }
            </div>

        </div>


        <div class="ml-masterclass-desktop-requisitos__points">

            <div class="ml-masterclass-desktop-requisitos__points__item"
                id="ml-masterclass-desktop-requisitos__points__item-3">
                ${ requisitos.paragraph3 }
            </div>


            <div class="ml-masterclass-desktop-requisitos__points__item"
                id="ml-masterclass-desktop-requisitos__points__item-4">
                ${ requisitos.paragraph4 }
            </div>

    </div>
`
}

if (requisitos.idMovil) {
    
    requisitos.idMovil.innerHTML = `
        <div class="ml-masterclass-movil-requisitos__title">Requisitos</div>
    
            <div class="ml-masterclass-movil-requisitos__points">
                <span></span>
                <p>
                    ${ requisitos.paragraph1 }
    
                </p>
            </div>
    
            
            <div class="ml-masterclass-movil-requisitos__points">
                <span></span>
                <p>
                    ${ requisitos.paragraph2 }
    
                </p>
            </div>
    
            
            <div class="ml-masterclass-movil-requisitos__points">
                <span></span>
                <p>
                    ${ requisitos.paragraph3 }
    
                </p>
            </div>
    `
}



// renderiza la zona donde estan las redes del experto
if (redesDeExperto.idDesktop) {

    redesDeExperto.idDesktop.innerHTML = `

    <img src="${ redesDeExperto.imgExperto }" alt="${ redesDeExperto.nombreExperto }"
        class="ml-masterclass-desktop-redes-del-expertos__fotos">

    <div class="ml-masterclass-desktop-redes-del-expertos__nombre">
        ${ redesDeExperto.nombreExperto }
    </div>

    <div class="ml-masterclass-desktop-redes-del-expertos__redes">

        <p class="ml-masterclass-desktop-redes-del-expertos__redes__paragraph">
            ${ redesDeExperto.paragraph }
        </p>

        <div class="ml-masterclass-desktop-redes-del-expertos__redes__paragraph__row">

            <a href="${ redesDeExperto.instagram }">
                <img src="https://pyndele.co/wp-content/uploads/2021/04/instagram.svg" alt="instagram" class="ml-masterclass-desktop-redes-del-expertos__redes__paragraph__row__items">
            </a>

            <a href="${ redesDeExperto.linkedin }">
                <img src="https://pyndele.co/wp-content/uploads/2021/04/linkedin.svg" alt="instagram" class="ml-masterclass-desktop-redes-del-expertos__redes__paragraph__row__items">
            </a>

            <a href="${ redesDeExperto.web }">
                <img src="https://pyndele.co/wp-content/uploads/2021/04/web.svg" alt="instagram" class="ml-masterclass-desktop-redes-del-expertos__redes__paragraph__row__items">
            </a>

            <img src="https://pyndele.co/wp-content/uploads/2021/04/risa-morada-2.svg" alt="" class="ml-masterclass-desktop-redes-del-expertos__redes__paragraph__row__risa-morada">

        </div>

    </div>
    `
}




