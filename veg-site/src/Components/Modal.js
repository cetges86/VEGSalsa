import React, {Component} from "react";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class Modal extends Component {

  render(){
    return(
  
      <MDBContainer>
              {/* BUTTON */}
              {/* <MDBBtn color="info" onClick={this.props.toggle}>Click</MDBBtn> */}
              {/* MODAL */}
              <MDBModal isOpen={this.props.modal} toggle={this.props.toggle}   size="lg"  position="top">
                <MDBModalHeader toggle={this.props.toggle}>MDBModal title</MDBModalHeader>
                <MDBModalBody>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </MDBModalBody>
                <MDBModalFooter>
                  <MDBBtn color="secondary" onClick={this.props.toggle}>Close</MDBBtn>
                  <MDBBtn color="primary">Save changes</MDBBtn>
                </MDBModalFooter>
              </MDBModal>
        </MDBContainer>
    )
  }
}

export default Modal;