import React, { Component, Fragment } from "react";
import { Modal, ModalHeader, Button, ModalFooter } from "reactstrap";

import axios from "axios";

class ConfirmRemovalModal extends Component {
    state = {
        modal: false
    };

    toggle = () => {
        this.setState(previous => ({
            modal: !previous.modal
        }));
    };

    deleteStudents = pk => {
        axios.delete("/api/students/" + pk).then(() => {
            this.props.resetState();
            this.toggle();
        });
    };

    render() {
        return (
            <Fragment>
                <Button color="danger" onClick={() => this.toggle()}>
                    Remove
                </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        Do you want to delete this student?
                    </ModalHeader>
                    <ModalFooter>
                        <Button type="button" onClick={() => this.toggle()}>
                            Cancel
                        </Button>
                        <Button type="button" color="primary"
                        onClick={() => this.deleteStudents(this.prop.pk)}
                        >
                        Yes
                        </Button>
                    </ModalFooter>
                </Modal>
            </Fragment>
        );
    }
}
export default ConfirmRemovalModal;