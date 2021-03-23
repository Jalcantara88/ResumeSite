import React, { Component } from 'react';
import { Button, Card, CardImg, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { CERTS } from '../shared/certs';

const RenderCert = ({item}) => {

    return(
        <Card >

            <CardImg src={item.image} alt={item.name} />

        </Card>
    );
}

class Certs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCert: CERTS[0],
            modalVisible: false
        };
    }

    toggleModal = () => {
        this.setState({modalVisible: !this.state.modalVisible})
    }

    render() {

        const certs = CERTS.map(cert => {
            return(
                <div className="col-3 mt-2" onClick={() => {
                    this.setState({modalVisible: !this.state.modalVisible});
                    this.setState({selectedCert: cert});
                }}>
                    <RenderCert item={cert} />
                </div>
            )
        })

        console.log(this.state.selectedCert);

        return(
            
            <div className="jumbotron-fluid">
                <div className="row pb-2 pt-0 px-4 justify-content-center">
                    <div className="col-10 col-md-8 col-lg-6">
                        <div className="row justify-content-center">
                            {certs}
                            <Modal isOpen={this.state.modalVisible} toggle={this.toggleModal}>
                                <ModalHeader toggle={this.toggleModal}>{this.state.selectedCert.name}</ModalHeader>
                                <ModalBody>
                                    <img className="img-fluid" src={this.state.selectedCert.image} />
                                    issued by: {this.state.selectedCert.issuedBy}
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" onClick={this.toggleModal}>Close</Button>
                                </ModalFooter>
                            </Modal>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Certs;