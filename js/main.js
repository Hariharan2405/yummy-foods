var head=document.getElementById("header");
var li=head.querySelectorAll("li");
var body=document.querySelector("body");
var home=document.getElementById("banner");
var about=document.getElementById("about");
var testimoni=document.getElementById("testimoni");
var why=document.getElementById("why");
var count=document.getElementById("count");
var book=document.getElementById("book");
var menu=document.getElementById("menu");
var events=document.getElementById("event");
var chef=document.getElementById("chef");
var gallery=document.getElementById("gallery");
var concat=document.getElementById("contact");

document.addEventListener("scroll",function(){ 
var h=head.offsetTop;
//console.log(h);
//console.log(banner.offsetTop+banner.offsetHeight/2)
if(h<banner.offsetTop+banner.offsetHeight/2){
	var a=0;
	li.forEach(function(e,i){
		console.log(i,a);
		if(i==a){
			li[i].classList.add("h-ul");
		}
		else{
			li[i].classList.remove("h-ul");
		}
	})
}
else if(h>banner.offsetTop+banner.offsetHeight/2 && h<why.offsetTop+why.offsetHeight/2){
	var a=1;
	li.forEach(function(e,i){
		if(i==a){
			li[i].classList.add("h-ul");
		}
		else{
			li[i].classList.remove("h-ul");
		}
	})
}
else if(h>count.offsetTop && h<menu.offsetTop+menu.offsetHeight/2){
	var a=2;
	li.forEach(function(e,i){
		if(i==a){
			li[i].classList.add("h-ul");
		}
		else{
			li[i].classList.remove("h-ul");
		}
	})
}
else if(h>testimoni.offsetTop+testimoni.offsetHeight && h<events.offsetTop+events.offsetHeight/2){
	var a=3;
	li.forEach(function(e,i){
		if(i==a){
			li[i].classList.add("h-ul");
		}
		else{
			li[i].classList.remove("h-ul");
		}
	})
}
else if(h>events.offsetTop+events.offsetHeight && h<chef.offsetTop+chef.offsetHeight){
	var a=4;
	li.forEach(function(e,i){
		if(i==a){
			li[i].classList.add("h-ul");
		}
		else{
			li[i].classList.remove("h-ul");
		}
	})
}
else if(h>book.offsetTop+book.offsetHeight && h<gallery.offsetTop+gallery.offsetHeight){
	var a=5;
	li.forEach(function(e,i){
		if(i==a){
			li[i].classList.add("h-ul");
		}
		else{
			li[i].classList.remove("h-ul");
		}
	})
}
else if(h>gallery.offsetTop+gallery.offsetHeight){
	var a=7;
	li.forEach(function(e,i){
		if(i==a){
			li[i].classList.add("h-ul");
		}
		else{
			li[i].classList.remove("h-ul");
		}
	})
}


var owl = $('.testimoni');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
});
})
var owl = $('.event');
owl.owlCarousel({
	center: true,
    items:1,
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
	responsive:{
		0:{items:1},
		480:{items:2},
		680:{items:3},
	}
});
var owl = $('.gallery');
owl.owlCarousel({
	center: true,
    items:5,
	margin:10,
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
});

$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
});


function eventAuto(){
	var event=document.getElementById("event");
var dots=event.querySelectorAll(".owl-item");
var circule=event.querySelectorAll(".event-circule");
for(let i=0;i<dots.length;i++){
	if(dots[i].classList.contains("center")){
		circule[i-3].classList.add("red");
		if(i-3==0){
			circule[i-1].classList.remove("red");
			circule[i-2].classList.remove("red");
		}
		else if(i-3==1){
			circule[i-4].classList.remove("red");
			circule[i-2].classList.remove("red");
		}
		else{
			circule[i-5].classList.remove("red");
			circule[i-4].classList.remove("red");
		}
		
	}
}
}
setInterval(eventAuto,1000);

function galleryAuto(){
var gallery=document.getElementById("gallery");
var items=gallery.querySelectorAll(".owl-item");
items.forEach(function(e){
	if(e.classList.contains("center")){
		e.classList.add("gallery-img-center");
	}
	else{
		e.classList.remove("gallery-img-center");
	}
})
}
setInterval(galleryAuto,100);