function clicouSobre(){
    alert("clicou")
}

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        400:{
            items:2

        },
        800:{
            items:4
        },
        1200:{
            items:8
        }
    }
})