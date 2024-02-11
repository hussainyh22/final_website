// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

/* Preloader
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	setTimeout(function () {
		$('.loader_bg').fadeToggle();
	}, 1500);

// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
});

// Initiate the wowjs
new WOW().init();

 // Stats counter
 $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000
});



/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(18.964599477996703, 72.84387591165662, ),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

var slideIndex = 0;

        function showCards() {
            const cards = document.querySelectorAll('.card');
            const slider = document.querySelector('.slider');
            slider.style.transform = `translateX(${-slideIndex * 1050}px)`; // Adjust card width + margin
        }

        function moveSlider(n) {
            const cards = document.querySelectorAll('.card');
            if (slideIndex + n < 0 || slideIndex + n >= cards.length) return;
            slideIndex += n;
            showCards();
        }

        // Sample data (You can replace this with your actual data)
        const relatedProducts = [
            { name: 'Hitachi Scroll Compresso', image: 'images/hitachi (1).png' },
            { name: 'Sanyo Scroll Compressor', image: 'images/sanyo (1).png' },
            { name: 'Daikin Scroll Compressor', image: 'images/daikin (1).png' },

            { name: 'Performer Scroll Compressor', image: 'images/performer.png' },
            { name: 'Copeland Scroll Compressor', image: 'images/img2.png' },
            // Add more products as needed
        ];

        const cardsContainer = document.querySelector('.cards');
        relatedProducts.forEach(product => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
  `;
            cardsContainer.appendChild(card);
        });

        showCards();