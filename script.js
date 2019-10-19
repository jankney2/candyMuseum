let navbar=document.getElementsByTagName('nav')[0]

console.log('hit')

window.addEventListener('scroll', (e)=>{
    console.log('hit2', 
    window.scrollY)

    if(window.scrollY<100){
        navbar.classList.remove('scrollNav')
    }else {
        navbar.classList.add('scrollNav')
    }
})