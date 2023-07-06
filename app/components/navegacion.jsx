import { Link, useLocation } from '@remix-run/react'
import imagen from '../../public/img/carrito.png'

function Navegacion() {

    const location = useLocation();
    
    return (
        <nav className="navegacion">
            <Link 
                to='/' 
                className={ location.pathname === '/' ? 'activate' : '' }
            >Inicio</Link>
            <Link 
                to='/nosotros'
                className={ location.pathname === '/nosotros' ? 'activate' : '' }
            >Nosotros</Link>
            <Link 
                to='/guitarras'
                className={ location.pathname === '/guitarras' ? 'activate' : '' }
            >Tienda</Link>
            <Link 
                to='/blog'
                className={ location.pathname === '/blog' ? 'activate' : '' }
            >Blog</Link>
            
            <Link 
                to='/carrito'
                
            >
                <img src={imagen} alt='carrito de compras'/>
            </Link>
            
        </nav>
    )
}

export default Navegacion