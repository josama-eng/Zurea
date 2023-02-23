import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';


function InfoLinkComponent(props) {

    const [toggle, setToggle] = useState(true)
    
    const handleToggle = () => {
        setToggle((state) => !state)
    } 
    return (
        <div className="footer-mainlink-wrapper col-lg-3 offset-lg-1">
            <div className="link-wrapper" toggle="collapse" aria-expanded="true">
                <h3>Information <a class="title" data-bs-toggle="collapse" href="#collapseInfo" role="button" aria-expanded="false" aria-controls="collapseInfo" onClick={handleToggle}>{toggle? <FaChevronDown/> : <FaChevronUp/>}</a></h3>
                <div class="collapse" id="collapseInfo">
                    <div class="card card-body">
                        <ul>
                            <li><a href="">Fashion Store</a></li>
                            <li><a href="">Shoes</a></li>
                            <li><a href="">Formal</a></li>
                            <li><a href="">Watch</a></li>
                            <li><a href="">More</a></li>                                
                        </ul>
                    </div>
                </div>                        
            </div>
        </div>
    );
}

export default InfoLinkComponent;