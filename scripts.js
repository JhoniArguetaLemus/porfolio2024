const btnAbrir=document.querySelector('#abrir');

const nav=document.querySelector('#nav');
const btnCerrar=document.querySelector('#cerrar')
btnAbrir.addEventListener('click', ()=>{

   nav.classList.add('visible');
  
})

btnCerrar.addEventListener('click', ()=>{
   nav.classList.remove('visible');
   
})