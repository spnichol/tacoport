var maingraphic = $("svg");
var tacodots = $(".st4");
var mainlogo = $("#frescodev");
var fresco = $("#fresco");
var dev = $("#dev");
var nav = $(".site-navigation")
var tl;

tl = new TimelineMax();
tl.set(maingraphic, {yPercent:50, xPercent: 0});
tl.set(nav, {y: -200});
tl.set([fresco], {xPercent: -500});
tl.set([dev], {xPercent: 500});
tl.staggerTo(tacodots, 0, {
	cycle: {

		opacity: 0,
		y: function() {return Math.random() * 30000;},
		x: function() {return Math.random() * 30000;}
		}
	}, .06);

tl.to([fresco, dev], 1, {xPercent: 0, ease:Bounce.easeOut}, 2)
	.to(nav, 1, {y: 0}, 3)
	.to(maingraphic, 1, {yPercent: 70, xPercent: 0}, 3.5)
	.add("end");
	
