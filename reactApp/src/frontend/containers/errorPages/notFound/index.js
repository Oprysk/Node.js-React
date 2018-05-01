import React, { Component } from 'react';
import { login } from "../../../actions";
import { connect } from "react-redux";
class NotFound extends Component {

    render(){
            return (
                <div style={{textAlign:'center', background:'#1d2124'}}>
                  <img style={{maxHeight: '100vh',minHeight: '100%'}} src="https://i.imgur.com/vdU2Jlg.png" alt="404"/>
                </div>
            )
        }
}
const mapStateToProps = state => {
    return {
        isLogin: state
    }
};
const mapDispatchToProps = {
    login
};
export default connect(mapStateToProps, mapDispatchToProps)(NotFound)

