import React from 'react'


function Spinner(props){
    const fontSize = 48;
    if(props.loading) {
        return (
            <div style={{textAlign:'center', marginTop:85}}>
                <i className="fa fa-spinner fa-pulse" style={{fontSize:fontSize}}>
                </i>
            </div>
        );
    } else {
        return (
        <div className="SplitPane-right">
            {props.component}
        </div>
        );
    }
}



export default  Spinner