


//Prøvede at animere svg stregen på forsiden med dette javascript.
// Siden bruges dog ikke.



let svg = document.querySelector("svg");
let path = svg.querySelector("path");

const pathLength = path.getTotalLength()

console.log(pathLength);

gsap.set(path, { strokeDasharray: pathLength});

gsap.fromTo(path , {
    strokeDashoffset: pathLength,
},
    {
        strokeDashoffset: 0,
        duration: 10,
        scrollTrigger: {
            trigger: ".svg-container",
            start: "top top",
            end: "bottom bottom",
        },
    }
);
