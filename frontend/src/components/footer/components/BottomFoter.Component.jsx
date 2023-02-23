import React from 'react';
import AppLinks from './AppLinks';
import CopyRigth from './CopyRigth';
import Payment from './Payment';

function bottomFoterComponent(props) {
    return (
        <div className='bottom-footer'>
            <div className="container">
                <div className="row">
                    <AppLinks />
                    <CopyRigth />
                    <Payment/>                    
                </div>
            </div>
        </div>
    );
}

export default bottomFoterComponent;