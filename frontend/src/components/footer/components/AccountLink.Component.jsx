import React, {useState} from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function AccountLinksComponent(props) {

    const [toggle, setToggle] = useState(true)
    
    const handleToggle = () => {
        setToggle((state) => !state)
    } 
    return (
            <div className="footer-account-link col-lg-3 offset-lg-1">
            <div className="link-wrapper" toggle="collapse" aria-expanded="true">
                    <h3>Account <a class="title" data-bs-toggle="collapse" href="#collapseAccount" role="button" aria-expanded="false" aria-controls="collapseAccount" onClick={handleToggle}>{toggle ? <FaChevronDown /> : <FaChevronUp />}</a></h3>
                    <div class="collapse" id="collapseAccount">
                        <div class="card card-body">
                            <ul>
                                <li><a href="">Personal info</a></li>
                                <li><a href="">Orders</a></li>
                                <li><a href="">Credit slips</a></li>
                                <li><a href="">Addresses</a></li>
                                <li><a href="">My wishlists</a></li>                                
                            </ul>
                        </div>
                    </div>                        
                </div>
            </div>
    );
}

export default AccountLinksComponent;