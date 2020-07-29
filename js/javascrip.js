/*Iniciar muuri
Muuri( element, [options] )*/

const grid = new Muuri('.grid',{
    layout: {
        rounding: false
      }

})
/*Esto funciona como para hacer que cuando todas las imagenes esten cargadas se mestren en la pagina*/
window.addEventListener('load',() =>{
    document.getElementById('grid').classList.add('imagenescargadas');
    
    /*estoy me funciona para filtar las foto con el menu*/
    const enlace= document.querySelectorAll('#categoria a ');
    enlace.forEach(element => {
        element.addEventListener('click',(evento)=>{
            evento.preventDefault();
            enlace.forEach((enlace)=> enlace.classList.remove('activo') );
            evento.target.classList.add('activo');

            /*esto es para filtrar los elemnetos con grid,.... Estudiar mas afondo*/
            const categoria=evento.target.innerHTML.toLowerCase();
            categoria==='todos' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categoria}"]`);
        })

        /*filtrado en la barrra de busqueda*/
        document.querySelector('#barra-busqueda').addEventListener('input',(evento)=>{
            const busqueda= evento.target.value;
            grid.filter((item)=> item.getElement().dataset.etiqueta.includes(busqueda));
        });

        /*Esto lo use para que cuando le de un toque a la foto salga en grande con la descipcion de ella*/

       const overlay= document.getElementById('overlay');
       /*esto esta pa haceder a todo las clase de la grid item y de las imagenes*/
      document.querySelectorAll('.grid .item img').forEach((element)=>{
         element.addEventListener('click',()=>{
            /*lo use para llamar a las imagenes y descripcion*/
            const ruta= element.getAttribute('src')
            const descripcion = element.parentNode.parentNode.dataset.descripcion;
            overlay.classList.add('activo');
            document.querySelector('#overlay img').src=ruta;
            document.querySelector('#overlay .descripcion').innerHTML= descripcion;

        });
           
      });

      /*codigo pra cerrar con la x*/
      document.querySelector('#btn-cerrar').addEventListener('click',()=>{
          overlay.classList.remove('activo');
      })




    });
    
})