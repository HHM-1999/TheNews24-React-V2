import React from 'react'
import Ads from '../../assets/media/Advertisement/rajnitiAds.jpeg';

const PoliticsPgAds = () => {
    return (
        <div className="DRightSideAdd d-flex justify-content-center mb-3 mt-3">
            <a href="https://www.shwapno.com/" target='blank' rel=''>
                <img src={Ads} alt="Advertisement" title="Advertisement" className='img-fluid'/>
            </a>
        </div>
    )
}

export default PoliticsPgAds;