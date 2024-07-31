import React from 'react';
import StaticSite from './StaticSite';

const FrontPage = ({ site }) => {
    if (site==="StaticSite") {
        return (<StaticSite />);
    }

    if (site==="Application") {
        return (<h1>Application</h1>);
    }
}

export default FrontPage;