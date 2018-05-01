import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import {createUser} from "../../actions";
import {connect} from "react-redux";


class CreateUserForm extends Component  {
    constructor (props) {
        super(props);
        this.store = this.props.store;
        this.state = {
            userName: ''
        };
        this.createUser = this.createUser.bind(this);

    }
    createUser(){
        console.log(this.name.value);
        this.props.createUser(
            {
                userName: this.name.value,
                email: this.email.value,
                pass: this.pass.value
            }
        );
        this.name.value = '';
        this.email.value = '';
        this.pass.value = '';
    }
    render(){
    return (
        <div >
                    <TextField
                        inputRef={el => this.name = el}
                        label="User Name"
                        margin="none"
                    />
                    <br/>
                    <TextField
                        inputRef={el => this.email = el}
                        label="Email"
                        id="margin-dense"
                        margin="none"/>
                    <br/>
                    <TextField
                        inputRef={el => this.pass = el}
                        label="Password"
                        id="margin-normal"
                        margin="none"/>
            <br/>
            <Button  style={{margin:'20px 0px'}}  onClick={this.createUser} raised color="primary">
                Create User
            </Button>
        </div>
    );
}

}
const mapStateToProps = (state) => {
    return {
        users: state
    }
};

const mapDispatchToProps = {
    createUser
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateUserForm);