import Menu from '../Menu/Menu';
import '../CSS/Cadastrar.css';

function Cadastrar(){
    return(

        <div>
            <Menu />
            <div className="container">
                <div className="mt-5 border p-3 caixa">
                    <h1 className="text-center">Cadastrar</h1><hr></hr>
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">NOME</label>
                        <input type="email" className="form-control" id="email" name="email" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">CPF</label>
                        <input type="password" className="form-control" id="senha" name="senha" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">NIS</label>
                        <input type="password" className="form-control" id="senha" name="senha" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">CELULAR</label>
                        <input type="password" className="form-control" id="senha" name="senha" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">EMAIL</label>
                        <input type="password" className="form-control" id="senha" name="senha" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">CONFIRMAR EMAIL</label>
                        <input type="password" className="form-control" id="senha" name="senha" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">SENHA</label>
                        <input type="password" className="form-control" id="senha" name="senha" />
                    </div>
                    <div className="mb-3 text-center">
                        <button type="submit" className="btn btn-primary">Registrar</button>  
                    </div>
                </form>
                </div>
            </div>
        </div>
    );
}

export default Cadastrar;