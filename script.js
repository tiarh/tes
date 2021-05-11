$(document).ready(function(){
	$(window).scroll(function(){
		if(this.scrollY > 20){
			$('.navbar').addClass("sticky");
		}else{
			$('.navbar').removeClass("sticky");
		}
	})
});

// TYPING ANIMATION
var typed = new Typed(".typing", {
	strings: ["FullStack Developer", "Designer", "Informatics Engineer", "Freelancer"],
	typeSpeed: 100,
	backSpeed: 60,
	loop: true
});