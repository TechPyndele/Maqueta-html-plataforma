
const proximos = [
    {
        'url-img': 'https://via.placeholder.com/150',
        'url-mas': '#',
        'nombre-master': 'Nombre de MasterClass',
        'nombre-experto': 'Nombre de experto'


    },
    {
        'url-img': 'https://via.placeholder.com/150',
        'url-mas': '#',
        'nombre-master': 'Nombre de MasterClass',
        'nombre-experto': 'Nombre de experto'


    },
    {
        'url-img': 'https://via.placeholder.com/150',
        'url-mas': '#',
        'nombre-master': 'Nombre de MasterClass',
        'nombre-experto': 'Nombre de experto'


    },
    {
        'url-img': 'https://via.placeholder.com/150',
        'url-mas': '#',
        'nombre-master': 'Nombre de MasterClass',
        'nombre-experto': 'Nombre de experto'


    },
    {
        'url-img': 'https://via.placeholder.com/150',
        'url-mas': '#',
        'nombre-master': 'Nombre de MasterClass',
        'nombre-experto': 'Nombre de experto'


    },
    {
        'url-img': 'https://via.placeholder.com/150',
        'url-mas': '#',
        'nombre-master': 'Nombre de MasterClass',
        'nombre-experto': 'Nombre de experto'


    },
    {
        'url-img': 'https://via.placeholder.com/150',
        'url-mas': '#',
        'nombre-master': 'Nombre de MasterClass',
        'nombre-experto': 'Nombre de experto'


    },
    {
        'url-img': 'https://via.placeholder.com/150',
        'url-mas': '#',
        'nombre-master': 'Nombre de MasterClass',
        'nombre-experto': 'Nombre de experto'


    },
    {
        'url-img': 'https://via.placeholder.com/150',
        'url-mas': '#',
        'nombre-master': 'Nombre de MasterClass',
        'nombre-experto': 'Nombre de experto'


    },
    {
        'url-img': 'https://via.placeholder.com/150',
        'url-mas': '#',
        'nombre-master': 'Nombre de MasterClass',
        'nombre-experto': 'Nombre de experto'


    },
];


for (item of proximos) {

    document.querySelector('#ml-carrusel-desktop').innerHTML += `


    <div class='swiper-slide'>
        
        <div class="ml-desktop-masterclass__proximos-lanzamientos__carrusel__item">

            <img 
            class="ml-desktop-masterclass__proximos-lanzamientos__carrusel__item__img"
            src="${ item['url-img'] }" />

        <div class="ml-desktop-masterclass__proximos-lanzamientos__carrusel__item__title">${ item['nombre-master'] }</div>

        <div class="ml-desktop-masterclass__proximos-lanzamientos__carrusel__item__nombre-experto">Experto: <span>${ item['nombre-experto'] }</span></div>

        <a href="${item['url-mas']}" class="ml-desktop-masterclass__proximos-lanzamientos__carrusel__item__conoce-mas">Conoce más</a>

        </div>
    </div>


    `

}

var swiper = new Swiper("#ml-desktop-wrapper-carrusel", {
    slidesPerView: 4,
    spaceBetween: 30,      
    // loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true
    }
});



for ( item of proximos){

    document.querySelector('#ml-movil-carrusel').innerHTML += `
        <div class='swiper-slide'>
            
            <div class="ml-movil-masterclass__carrusel__item">
    
                <img 
                class="ml-movil-masterclass__carrusel__item__img"
                src="${ item['url-img'] }" />
    
            <div class="ml-movil-masterclass__carrusel__item__title">${ item['nombre-master'] }</div>
    
            <div class="ml-movil-masterclass__carrusel__item__nombre-experto">Experto: <span>${ item['nombre-experto'] }</span></div>
    
            <a href="${item['url-mas']}" class="ml-movil-masterclass__carrusel__item__conoce-mas">Conoce más</a>
    
            </div>
        </div>
    `
}

var swiper = new Swiper("#ml-movil-wrapper-carrusel", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true
    }
});
