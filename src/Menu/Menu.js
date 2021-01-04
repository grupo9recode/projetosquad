import './Menu.css';

function Menu(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark menu">
            <div className="container-fluid">
                <img src={require('../Img/logo.png').default} alt="" width="50"/>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="/home" to="/home">Home</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="/login" to="/login">Login</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="/cadastrar" to="/cadastrar">Cadastre-se</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="/produtos" to="/produtos">Produtos</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="/servicos" to="/servicos">Serviços</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="/contatos" to="contatos">Contato</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );    
}

export default Menu;