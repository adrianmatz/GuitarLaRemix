import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'


export function meta(){
  return[
    
    {title: 'GuitarLA - Sobre Nosotros'},
    {description: 'Venta de guitarras, blog de música'}
    
  ]
}

export function links(){
    return[
      {
        rel: 'stylesheet',
        href: styles
      },
      {
        rel: 'preload',
        href: imagen,
        as:'image'
      }
    ] 
}

function Nosotros() {

   

    return (
      <main className="contenedor nosotros">
        
        <h2 className="heading">Nosotros</h2>

        <div className="contenido">
          <img src={imagen} alt='imagen sobre nosotros'/>
        
          <div>
            <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi vitae tellus mauris. Quisque ac rhoncus nibh, non tempus neque. Morbi dui sem, ullamcorper eget nibh sit amet, elementum aliquet sapien. Pellentesque blandit neque vel lacus mattis gravida. Donec laoreet accumsan mi. Integer blandit nisl tortor, et condimentum velit imperdiet ac.
            </p>
            <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi vitae tellus mauris. Quisque ac rhoncus nibh, non tempus neque. Morbi dui sem, ullamcorper eget nibh sit amet, elementum aliquet sapien. Pellentesque blandit neque vel lacus mattis gravida. Donec laoreet accumsan mi. Integer blandit nisl tortor, et condimentum velit imperdiet ac. 
            </p>
          </div>
        </div>
      </main>
    )
}

export default Nosotros