import React from 'react';
import BodyFooterComponent from './components/BodyFooter.Component';
import BottomFooterComponent from './components/BottomFoter.Component';

function FooterComponent(props) {
    return (
        <footer id='footer'>
            <BodyFooterComponent />
            <BottomFooterComponent />
        </footer>
    );
}

export default FooterComponent;