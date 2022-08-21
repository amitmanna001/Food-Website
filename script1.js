document.querySelector('.menu').addEventListener('click',()=>{
    document.querySelector('.target').classList.toggle('nav-change')
    document.querySelector('.menu').classList.toggle('menu-change')
    document.querySelectorAll('.navbar-link').classList.toggle('navbar-link-change')

})
// document.querySelector('.menu').addEventListener('click',()=>{
//     document.querySelectorAll('.target').forEach((item)=>{
//         item.classList.toggle('change')
//     })
// })

// document.querySelector('.navbar-link').addEventListener('click',()=>{
//     document.querySelectorAll('.navbar').forEach((item)=>{
//         item.classList.toggle('navbar-link-change')
//     })
// })
const icons = document.querySelectorAll('.section-1-icons i')

let i=1;
setInterval(()=>{
    i++;

    const icon = document.querySelector('.section-1-icons .change')
    icon.classList.remove('change')

    if(i>icons.length){
        icons[0].classList.add('change')
        i=1
    }else{
        icon.nextElementSibling.classList.add('change')
    }
},1000)

