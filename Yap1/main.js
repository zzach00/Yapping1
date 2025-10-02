const counter = {value: 0};

const tl = gsap.timeline(
    {defaults:
        {
            duration: 0.75,
            ease: "slow",
        }
    }
);

tl.to(
    counter,{
        value: 100,
        duration: 3,
        ease: "slow",
        onUpdate: () => {
            document.querySelector(".counter-text").textContent = `${Math.round(counter.value)}`;
        }
    }
);

tl.to(
    '.counter-section',{
        y: '-100%',
        duration: 1.5,
        ease: "slow",
        oncomplete: () => {
            document.body.style.overflow = 'auto';
        }
    }
);

tl.fromTo('.main-section', {
    opacity: 0,
},{
    opacity: 1,
    duration: 1,
},
"<");