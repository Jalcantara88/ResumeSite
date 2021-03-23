import React from 'react';
import { Button } from 'reactstrap';

function Footer(props) {
    return(
        <React.Fragment>
            <div className="container">
                <div className="row justify-content-center py-2">             
                    
                    <div className="col-4 col-md-3 col-lg-2 text-center align-self-center">
                        <Button className="bg-danger w-100" style={{border: 0}} href="#socialBar">Go To Top</Button> 
                    </div>
                    <div className="col-6 col-md-5 col-lg-4 text-center align-self-center">
                        <a role="button" className="btn btn-link" href="mailto:julio@deadheadstudio.com"><i className="fa fa-envelope-o" /> julio@deadheadstudio.com</a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Footer;