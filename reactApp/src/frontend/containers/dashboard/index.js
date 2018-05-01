import React from 'react';
import CreateUserForm from '../../components/createUserForm';
import UserTable from '../../components/userTable';
import SimpleExpansionPanel from '../../components/expansionPanel';

function Dashboard() {
        return (
            <div className='dashboard-page'>
                <div className="col-md-12">
                    <SimpleExpansionPanel title={'Tweets Timelines'} component={<CreateUserForm />}/>
                </div>
                <div className="col-md-12">
                    <UserTable style={{margin: '30px 0px'}} />
                </div>
            </div>
        )
}

export default Dashboard;



