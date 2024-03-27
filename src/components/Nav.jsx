import {Link} from 'react-router-dom'

function Nav(){

    return(
        <>
            <header className='menu'>
                <nav className='nav-menu'>
                    <ul>
                        <Link to="/">Home</Link>
                        <Link to="/sobre">Sobre</Link>
                        <Link to="/portifolio">Portifolio</Link>
                        <Link to="/contato">Contato</Link>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Nav