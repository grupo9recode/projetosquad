import Menu from "../Menu/Menu";
function EditarDados() {
    return (
        <div className="">
            <Menu />
            <div className="container">
                <div className="mt-5 border p-3 caixa">
                    <h1 className="text-center">Editar dados</h1>
                    <form>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" name="email" />
                        </div>
                        <div className="mb-3 d-flex">
                            <div className="ml-auto mt-4">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            </div>
    );
}

export default EditarDados;