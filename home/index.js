
(function(){

    const urlBase = 'https://pyndele.co/'

    const proximos = [];

    const expertos = [
        {
            imageTop: `${urlBase}/wp-content/uploads/Angel-Celis-Botto-perfil.png`,
            nameTop: 'Angel Celis Botto',
            tematicaTop: 'Temática del experto',

            imageDown: `${urlBase}/wp-content/uploads/Olga-Gonzalez-Perfil.png`,
            nameDown: 'Olga Gonzalez',
            tematicaDown: 'Temática del experto'
        },
        {
            imageTop: `${urlBase}/wp-content/uploads/Gabriel-Laverde-Perfil.png`,
            nameTop: 'Gabriel Laverde',
            tematicaTop: 'Temática del experto',

            imageDown: `${urlBase}/wp-content/uploads/Javier-Gomez-perfil.png`,
            nameDown: 'Javier Gomez',
            tematicaDown: 'Temática del experto'
        },
        {
            imageTop: `${urlBase}/wp-content/uploads/CarolinaMelendez-Perfil.png`,
            nameTop: 'Carolina Melendez',
            tematicaTop: 'Temática del experto',

            imageDown: `${urlBase}/wp-content/uploads/Camilo-Castrillon-Perfil.png`,
            nameDown: 'Camilo Castrillon',
            tematicaDown: 'Temática del experto'
        },
        {
            imageTop: `${urlBase}/wp-content/uploads/Juan-Ignacio-Isaza-Perfil.png`,
            nameTop: 'Juan Ignacio',
            tematicaTop: 'Temática del experto',

            imageDown: `${urlBase}/wp-content/uploads/Vanessa-Calle-Perfil.png`,
            nameDown: 'Vanessa Calle',
            tematicaDown: 'Temática del experto'
        },
        {
            imageTop: `${urlBase}/wp-content/uploads/Juan-David-Londono-Perfil.png`,
            nameTop: 'Juan Londoño',
            tematicaTop: 'Temática del experto',

            imageDown: `${urlBase}/wp-content/uploads/Edy-Munoz-Perfil.png`,
            nameDown: 'Edy Munoz',
            tematicaDown: 'Temática del experto'
        },
        {
            imageTop: `${urlBase}/wp-content/uploads/Nathalia-Miranda-Perfil.png`,
            nameTop: 'Nathalia Miranda',
            tematicaTop: 'Temática del experto',

            imageDown: `${urlBase}/wp-content/uploads/Jaiber-Perez-Perfil.png`,
            nameDown: 'Jaiber Perez',
            tematicaDown: 'Temática del experto'
        },
        {
            imageTop: `${urlBase}/wp-content/uploads/2021/04/Samuel-Gonzalez-perfil.png`,
            nameTop: 'Samuel González',
            tematicaTop: 'Temática del experto',

            imageDown: `${urlBase}/wp-content/uploads/2021/04/Sara-Rojas-Perfil.png`,
            nameDown: 'Sara Rojas',
            tematicaDown: 'Temática del experto'
        },
        {
            imageTop: `${urlBase}/wp-content/uploads/Andersson-Londono-Perfil.png`,
            nameTop: 'Andersson Londoño',
            tematicaTop: 'Temática del experto',

            imageDown: `${urlBase}/wp-content/uploads/Melissa-del-Valle-Perfil.png`,
            nameDown: 'Melissa del Valle',
            tematicaDown: 'Temática del experto'
        },
        {
            imageTop: `${urlBase}/wp-content/uploads/Santiago-Correa-Perfil.png`,
            nameTop: 'Santiago Correa',
            tematicaTop: 'Temática del experto',

            imageDown: `${urlBase}/wp-content/uploads/Juan-Carlos-Andrade-Perfil.png`,
            nameDown: 'Juan Carlos',
            tematicaDown: 'Temática del experto'
        },
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
                                    <img src="${item['imageTop']}" 
                                        alt="perfil" class="ml-home-desktop-nuestros-expertos__perfil__row__item__img">

                                <h3 class="ml-home-desktop-nuestros-expertos__perfil__row__item__nombre">${item['nameTop']}</h3>
                                
                                <h3 class="ml-home-desktop-nuestros-expertos__perfil__row__item__tematica">${item['tematicaTop']}</h3>
                            </div>
                        </div>

                        <div class="ml-home-desktop-nuestros-expertos__perfil__row">
                            <div class="ml-home-desktop-nuestros-expertos__perfil__row__item">
                            
                                    <img src="${item['imageDown']}" 
                                        alt="perfil" class="ml-home-desktop-nuestros-expertos__perfil__row__item__img">
                                
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
