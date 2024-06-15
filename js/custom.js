$(document).ready(function(){

$('.owl-eyes').owlCarousel({
margin: 20,
nav: false,
loop: true,
autoplay:true,
autoplayTimeout: 3000,
autoplayHoverPause:true,
dots:true,
navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
responsive: {
0: {
items: 1
},
600: {
items: 1
},
1000: {
items: 3
}
}
});

});