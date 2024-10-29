Splitting({
	whitespace: true
});

console.clear();
gsap.registerPlugin(TextPlugin);

var tl = gsap.timeline({ delay: 1 });
tl
	.from(
		".first .char",
		{
			scale: 0,
			y: -40,
			duration: 0.25,
			ease: "expo.out",
			stagger: {
				amount: 1,
				from: "start"
			}
		},
		"<"
	)
	.to(
		".first .char",
		{
			scale: 1.1,
			textTransform: "uppercase",
			duration: 1,
			stagger: {
				amount: 0.75,
				from: "start"
			}
		},
		"-=0.2"
	)
	.to(
		".first .char",
		{
			duration: 0.8,
			stagger: {
				amount: 0.8,
				from: "start"
			},
			keyframes: {
				"5%": { y: -10, color: "blue" },
				"20%": { y: 0, color: "#f2b400" },
				"90%": { y: 0, color: "#fff" },
				"100%": { y: "random(-200 200)", scale: 0, color: "blue" }
			}
		},
		"-=0.7"
	)
	.from(
		".second .char",
		{
			scale: 0,
			y: "random(-100 100)",
			duration: 0.5,
			ease: "bounce.out",
			stagger: {
				amount: 0.5,
				from: "start"
			}
		},
		"-=0.7"
	)
	.to(
		".second .char",
		{
			duration: 0.1,
			stagger: {
				amount: 0.8,
				from: "start"
			},
			keyframes: {
				"60%": { scale: 1.75, color: "orange" },
				"100%": { scale: 1, color: "red" }
			}
		},
		"-=0.2"
	)
	.to(".second .char", {
		scale: 0,
		x: "random(-200 200)",
		y: "random(-200 200)",
		color: "yellow",
		delay: 0.75,
		duration: 1,
		ease: "expo.out",
		stagger: {
			amount: 1,
			from: "start"
		}
	})
	.to(
		".well .word",
		{
			y: 0,
			scale: 1,
			opacity: 1,
			color: "yellow",
			duration: 0.2,
			stagger: {
				ease: "back.out",
				amount: 0.6
			}
		},
		"-=1.25"
	)
	.to(
		".well",
		{
			scale: 0,
			duration: 1,
			ease: "expo.in"
		},
		"+=0.25"
	)
	.from(".will .word", {
		scale: 0,
		y: "-2em",
		duration: 0.15,
		stagger: {
			amount: 0.45,
			from: "start"
		}
	})
	.to(
		".will",
		{
			opacity: 0,
			color: "green",
			duration: 4,
			ease: "power4.in"
		},
		"+=0.5"
	)
	.to(
		".hands",
		{
			opacity: 1,
			duration: 3
		},
		"-=3"
	);