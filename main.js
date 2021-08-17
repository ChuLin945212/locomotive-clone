gsap.registerPlugin(scrollTrigger);

gsap.fromTo(document.querySelector('key-visual-section .left-title'),{
    x=0,
    y=0,
},{
    x='+=10vh',
    y='-=84px',
    scrollTrigger:{
        start:"top top",
        end:"+=200vh",
        scrub: 0.01,
    },
});

const splitTextElement = document.querySelectorAll('#key-visual-section .split-version > span');
gsap.to(Array.from(splitTextElement),{
    y:(index)=>{
      switch(index){
          case 0:
              return '-=15vh';
          case 1:
              return '-=30vh';
          case 1:
             return '-=30vh';    
      }
    }
})