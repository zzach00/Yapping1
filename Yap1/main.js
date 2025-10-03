

// Custom Cursor
const cursor = document.querySelector('.cursor');
const cursorHigh = document.querySelector('.cursor-high');
const hoverables = document.querySelectorAll('[data-hoverable]');

const onMouseMove =(e) => {
    const { clientX, clientY } = e;
    gsap.to(cursor, {
        x: clientX,
        y: clientY,
        duration: 1.9,
        ease: "power2.out"
    })
    gsap.to(cursorHigh, {
        x: clientX,
        y: clientY,
        duration: 0,
    })
};

const onMouseEnter = () => {
    gsap.to(cursor,{
        scale: 2,
        duration: 0.3,
        ease: "slow.out",
        rotation: 45,
        borderRadius: '25%',
    })
}

const onMouseLeave = () => {
    gsap.to(cursor,{
        scale: 1,
        duration: 0.3,
        ease: "slow.in",
        rotation: 0,
        borderRadius: '50%',
    })
}

window.addEventListener('mousemove', onMouseMove);
hoverables.forEach((card) => {
    card.addEventListener('mouseenter', onMouseEnter);
    card.addEventListener('mouseleave', onMouseLeave);
})



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
            document.body.style.overflow = 'hidden';
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

tl.call(() => {
    document.body.style.overflow = 'auto';
})

