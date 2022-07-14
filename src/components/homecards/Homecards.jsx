import React from 'react';
import './Homecards.css';




const Homecards = () => {
    return (
        
            
                <div className="container"  >
                    <div className="card mb-3" style={{maxWidth : "100%"}}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="img/Dry fruits.jpg" className="img-fluid rounded-start" alt="ketan" />
                            </div>
                            <div className="col-md-8"  >
                                <div className="card-body">
                                    <h3 className="card-title">Card title</h3>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
                )
}


                export default Homecards;