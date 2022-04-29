const nav=document.querySelector('.header');
const menu=document.querySelector('.menu');
const menu_btn=document.getElementById('btn-hamburguesa')
window.addEventListener('scroll',function(){
    nav.classList.toggle('active', window.scrollY>0);
});


    if(menu_btn){menu_btn.addEventListener('click', ()=>{
        menu.classList.toggle('active');});
    }
        
 
