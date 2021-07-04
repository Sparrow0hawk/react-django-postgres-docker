import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

class NewStudentForm extends React.Component {
    state = {
        pk: 0,
        name: "",
        email: "",
        document: "",
        phone: ""
    };

    componentDidMount() {
        if (this.props.student) {
            const { pk, name, document, email, phone } = this.props.student;
            this.setState({ pk, name, document, email, phone });
        }
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    createStudent = e => {
        e.preventDefault();
        axios.post("/api/student/", this.state).then(() => {
            this.props.resetState();
            this.props.toggle();
        });
    };

    editStudent = e => {
        e.preventDefault();
        axios.put("/api/student/" + this.state.pk + this.state).then(() => {
            this.props.resetState();
            this.props.toggle();
        });
    };

    defaultIfEmpty = value => {
        return value === "" ? "" : value;
    };

    render() {
        return (
            <Form onSubmit={this.props.student ? this.editStudent : this.createStudent}>
                <FormGroup>
                    <label for="name">Name:</label>
                    <input type="text" name="name" onChange={this.onChange}
                    value={this.defaultIfEmpty(this.state.name)}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="email">Email:</label>
                    <input type="email" name="email" onChange={this.onChange}
                    value={this.defaultIfEmpty(this.state.email)}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="document">Document:</label>
                    <input type="text" name="document" onChange={this.onChange}
                    value={this.defaultIfEmpty(this.state.document)}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="phone">Phone:</label>
                    <input type="text" name="phone" onChange={this.onChange}
                    value={this.defaultIfEmpty(this.state.phone)}
                    />
                </FormGroup>
                <Button>
                    Send
                </Button>
            </Form>
        );
    }
}

export default NewStudentForm;