import React from 'react'
// import ReactDOM from 'react-dom';
import './Card.css';
import {Link} from 'react-router-dom';
// import { borderRadius } from '@mui/system';

function Cards() {
    return (
        <div className="row">
            <div className="column">
                <div className="card">
                    <img src="img/kishmis.jpg" alt="Kishmis" style={{ width: "100%" ,  borderTopRightRadius:"50px"} } />
                    <h1>Raisins</h1>
                    <p className="price">₹19.99</p>
                    <p>Some text about kishmis..</p>
                    <Link to='/product/626ad478703893776bc5f935'><p><button>View Product</button></p></Link>
                </div>
            </div>
            <div className="column">
                <div className="card">
                    <img src="img/Cashew Nuts.jpg" alt="Kaju" style={{ width: "100%" ,  borderTopRightRadius:"50px" } } />
                    <h1>Cashew</h1>
                    <p className="price">₹19.99</p>
                    <p>Some text about Kaju..</p>
                    <Link to='/product/626ad478703893776bc5f938'><p><button>View Product</button></p></Link>
                </div>
            </div>
            <div className="column">
                <div className="card">
                    <img src="img/Cashew Nuts.jpg" alt="Kaju" style={{ width: "100%" ,  borderTopRightRadius:"50px" }} />
                    <h1>Cashew</h1>
                    <p className="price">₹19.99</p>
                    <p>Some text about Kaju..</p>
                    <Link to='/product/626ad478703893776bc5f93b'><p><button>View Product</button></p></Link>
                </div>
            </div>
        </div>
    );
}


export default Cards;
// ReactDOM.render(<MyHeader />, document.getElementById('root'));