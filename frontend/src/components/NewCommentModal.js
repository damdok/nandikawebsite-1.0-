import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewCommentForm from "./NewCommentForm";

class NewCommentModal extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState(previous => ({
      modal: !previous.modal
    }));
  };

  render() {
    const create = this.props.create;

    var title = "Editing Comment";
    var button = <Button onClick={this.toggle} style={{backgroundColor:"#996633",borderColor:"#996633"}}>Edit</Button>;
    if (create) {
      title = "Creating New Comment";

      button = (
        <Button
          color="primary"
          className="float-right"
          onClick={this.toggle}
          style={{marginRight:"5px",marginTop:"10px"}}
        >
          comment
        </Button>
      );
    }

    return (
      <Fragment>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle} style={{backgroundColor:"#ffcccc"}}>{title}</ModalHeader>

          <ModalBody style={{backgroundColor:"#ffcccc"}}>
            <NewCommentForm
              resetState={this.props.resetState}
              toggle={this.toggle}
              comment={this.props.comment}
            />
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default NewCommentModal;
