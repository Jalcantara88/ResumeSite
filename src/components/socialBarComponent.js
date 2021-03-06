import React from 'react';
import { Jumbotron } from 'reactstrap';

function RenderSocialLinks({socialLink}) {
    return(
        <React.Fragment>
            <div className="col">
                <a href={socialLink.url}>
                    <img className="img-fluid" alt="something" src={socialLink.image}/>
                </a>
            </div>         
        </React.Fragment>
    );
};

function SocialBar(props) {

    const socialbar = props.socialLinks.map(socialLink => {
        return (
                <RenderSocialLinks socialLink={socialLink}/>
        );
    });

    
    return(
        <Jumbotron className="bg-primary my-0 py-2" id="socialBar" fluid>
            <div className="row">
                <div className="col-11 col-md-8 col-lg-6 mx-auto">
                    <div className="row">
                        {socialbar}
                    </div>
                </div>
                        
                
                
            </div>
        </Jumbotron>
    );
    
};

export default SocialBar;