import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import {compose} from 'redux'

import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import {fetchUsers} from '../../actions'
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import Spinner from '../spinner'


class UserTable extends Component {
    constructor (props) {
        super(props);
        this.props.fetchUsers();
    }
    render () {
        let tableRows = [];
        if(this.props.users.length){
            tableRows = this.props.users.map((user) =>
            <TableRow key={user._id}>
                <TableCell>{user.userName}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell numeric>
                        <IconButton aria-label="Delete">
                            <DeleteIcon onClick={() =>  this.props.deleteUser(user)}   />
                        </IconButton>
                </TableCell>
            </TableRow>
            );
        }
        const TableU = (
            <div>
                <Paper style={{margin:"30px 0px"}}>
                    <Table className={'table-font'}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Role</TableCell>
                                <TableCell> </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tableRows}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        );
               return (
                   <Spinner loading={this.props.loading} component={TableU} />
               );
           }



}
const mapStateToProps = (state, ownProps) => {
    return {
        users: state.users.data,
        loading:state.users.loading,
        ownProps: ownProps
    }
};

const mapDispatchToProps = {
    fetchUsers
};
export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(UserTable)