import React from 'react';
import './Banner.css'
import { Breadcrumb } from 'react-bootstrap'


const Banner = ({bannerheader, home, protfolio, currentpage}) => {
    return (
        <div className="bannerSectionWrapper">
            <div className="bannerHeaderWrapper">
                <h1>{bannerheader}</h1>
            </div>
        </div>
    )
}

export default Banner
