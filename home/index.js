
(function(){



    const proximos = []

    // Consumo de API para renderizar expertos
    for (let i = 0; i < 10; i++) {
        proximos.push({
            'url-img': `https://via.placeholder.com/150`,
            'url-mas': `https://pyndele.co/master-class/`,
            'nombre-master': `Nombre de MasterClass ${i}`,
            'nombre-experto': `Nombre de experto ${i}`
        })
    }
    
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
        
        const swiperDesktop = new Swiper("#ml-home-desktop-wrapper-carrusel", {
            slidesPerView: 4,
            spaceBetween: 30,      
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

})();
