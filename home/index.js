
(function(){

    const urlBase = 'https://pyndele.co/'

    const proximos = [];

    const expertos = [
        {
            imageTop: `${urlBase}/wp-content/uploads/2021/04/Juan-carlos-Andrade-desktop.png`,
            linkTop: '#',
            nameTop: 'Juan carlos Andrade',
            tematicaTop: 'Temática del experto',

            imageDown: `${urlBase}/wp-content/uploads/2021/04/Jaiber-Perez-desktop.png`,
            linkDown: '#',
            nameDown: 'Jaiber Perez ',
            tematicaDown: 'Temática del experto'
        },
        {
            imageTop: `${urlBase}/wp-content/uploads/2021/04/Edy-Munoz-desktop.png`,
            linkTop: '#',
            nameTop: 'Edy Munoz',
            tematicaTop: 'Temática del experto',

            imageDown: `${urlBase}/wp-content/uploads/2021/04/Vanessa-Calle-desktop.png`,
            linkDown: '#',
            nameDown: 'Vanessa Calle',
            tematicaDown: 'Temática del experto'
        },
        {
            imageTop: `${urlBase}/wp-content/uploads/2021/04/JUAN-INACIO-ISAZA-desktop.png`,
            linkTop: '#',
            nameTop: 'Juan Inacio Isaza',
            tematicaTop: 'Temática del experto',

            imageDown: `${urlBase}/wp-content/uploads/2021/04/Camilo-Castrillon-desktop-1.png`,
            linkDown: '#',
            nameDown: 'Camilo Castrillon',
            tematicaDown: 'Temática del experto'
        },
        {
            imageTop: `${urlBase}/wp-content/uploads/2021/04/Carolina-Melendez-Movil.png`,
            linkTop: '#',
            nameTop: 'Carolina Melendez',
            tematicaTop: 'Temática del experto',

            imageDown: `${urlBase}/wp-content/uploads/2021/04/Javier-Gomez-desktop.png`,
            linkDown: '#',
            nameDown: 'Javier Gomez',
            tematicaDown: 'Temática del experto'
        },
        {
            imageTop: `${urlBase}/wp-content/uploads/2021/04/Gabril-Laverde-desktop.png`,
            linkTop: '#',
            nameTop: 'Gabril Laverde',
            tematicaTop: 'Temática del experto',

            imageDown: `${urlBase}/wp-content/uploads/2021/04/Olga-Gonzalez-desktop.png`,
            linkDown: '#',
            nameDown: 'Olga Gonzalez',
            tematicaDown: 'Temática del experto'
        }
    ];

    // Consumo de API para renderizar expertos
    for (let i = 0; i < 10; i++) {
        proximos.push({
            'url-img': `https://via.placeholder.com/150`,
            'url-mas': `${urlBase}/master-class/`,
            'nombre-master': `Nombre de MasterClass ${i}`,
            'nombre-experto': `Nombre de experto ${i}`
        })
    }

    // for (let i = 0; i < 10; i++) {
    //     expertos.push({
    //         imageTop:'${urlBase}/wp-content/uploads/2021/04/Juan-carlos-Andrade-desktop.png',
    //         linkTop: '#',
    //         nameTop: 'Nombre del experto',
    //         tematicaTop: 'Temática del experto',

    //         imageDown:'https://via.placeholder.com/150',
    //         linkDown: '#',
    //         nameDown: 'Nombre del experto',
    //         tematicaDown: 'Temática del experto'
    //     })
    // }    

    console.log(expertos);
    // Renderiza expertos en desktop
    if (document.querySelector('#ml-home-desktop-carrusel')) {
        for (item of proximos) {
    
            document.querySelector('#ml-home-desktop-carrusel').innerHTML += `
        
            <div class='swiper-slide'>
                
                <div class="ml-home-desktop-masterclass__proximos-lanzamientos__carrusel__item">
                    
                <img 
                class="ml-home-desktop-masterclass__proximos-lanzamientos__carrusel__item__img"
                src="${ item['url-img'] }" />
                
        
                <div class="ml-home-desktop-masterclass__proximos-lanzamientos__carrusel__item__title">${ item['nombre-master'] }</div>
        
                <div class="ml-home-desktop-masterclass__proximos-lanzamientos__carrusel__item__nombre-experto">Experto: <span>${ item['nombre-experto'] }</span></div>
        
                <a href="${ item['url-mas'] }" class="ml-home-desktop-masterclass__proximos-lanzamientos__carrusel__item__conoce-mas">Conoce más</a>
        
                </div>
            </div>
            `
        }
        
        new Swiper("#ml-home-desktop-wrapper-carrusel", {
            slidesPerView: 4,
            spaceBetween: 100,      
            // loop: true, 
            grabCursor: true,
            pagination: {
                el: ".swiper-pagination",
                dynamicBullets: true
            }
        });
    }
    

    // Renderiza expertos en movil
    if (document.querySelector('#ml-home-movil-carrusel')) {
    

        for ( item of proximos){

            document.querySelector('#ml-home-movil-carrusel').innerHTML += `

                <div class='swiper-slide'>
                    
                    <div class="ml-home-movil-masterclass__carrusel__item">

                        <img 
                        class="ml-home-movil-masterclass__carrusel__item__img"
                        src="${ item['url-img'] }" />

                    <div class="ml-home-movil-masterclass__carrusel__item__title">${ item['nombre-master'] }</div>
            
                    <div class="ml-home-movil-masterclass__carrusel__item__nombre-experto">Experto: <span>${ item['nombre-experto'] }</span></div>
            
                    <a href="${ item['url-mas'] }" class="ml-home-movil-masterclass__carrusel__item__conoce-mas">Conoce más</a>
            
                    </div>
                </div>
            `
        }

        const swiperMovil = new Swiper("#ml-home-movil-wrapper-carrusel", {
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
    }   
    
    

    if (document.querySelector('#ml-home-desktop-expertos')) {
        
        for (const item of expertos) {
            
            document.querySelector('#ml-home-desktop-expertos-carrusel')
                .innerHTML += `

                <div class='swiper-slide' >
                    <div class="ml-home-desktop-nuestros-expertos__perfil">
                        <div class="ml-home-desktop-nuestros-expertos__perfil__row">
                            <div class="ml-home-desktop-nuestros-expertos__perfil__row__item">
                                <a href="${item['linkTop']}" >
                                    <img src="${item['imageTop']}" 
                                        alt="perfil" class="ml-home-desktop-nuestros-expertos__perfil__row__item__img">
                                </a>

                                <h3 class="ml-home-desktop-nuestros-expertos__perfil__row__item__nombre">${item['nameTop']}</h3>
                                
                                <h3 class="ml-home-desktop-nuestros-expertos__perfil__row__item__tematica">${item['tematicaTop']}</h3>
                            </div>
                        </div>

                        <div class="ml-home-desktop-nuestros-expertos__perfil__row">
                            <div class="ml-home-desktop-nuestros-expertos__perfil__row__item">
                            
                                <a href="${item['linkDown']}" >
                                    <img src="${item['imageDown']}" 
                                        alt="perfil" class="ml-home-desktop-nuestros-expertos__perfil__row__item__img">
                                </a>
                                
                                <h3 class="ml-home-desktop-nuestros-expertos__perfil__row__item__nombre">${item['nameDown']}</h3>
                                
                                <h3 class="ml-home-desktop-nuestros-expertos__perfil__row__item__tematica">${item['tematicaDown']}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            `
        }

        new Swiper("#ml-home-desktop-expertos", {
            slidesPerView: 4,
            // spaceBetween: 100,      
            // loop: true, 
            slidesPerView: 3,
            grabCursor: true,
            pagination: {
                el: "#swiper-pagination-expert",
                dynamicBullets: true
            }
        });
    }

})();
