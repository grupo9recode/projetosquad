import Menu from "../Menu/Menu";
import '../CSS/Home.css';

function Home(){
    return(
        <div className="">
            <Menu />
            <div className="container">
                <div className="d-flex mt-5">
                    <div className="box border p-3 mx-auto">
                        <img src={require('../Img/Serviço.png').default} alt="..." />
                    </div>
                </div>           
            </div>
        </div>
    );
}

export default Home;