import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { scrollTop, ForLazyLoaderImg } from '../AllFunctions'

var lazyloaded = false
export default function Lifestyle() {
    const [lifeStyle, setLifeStyle] = useState([])

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}json/file/generateCategory11.json`)
            .then(({ data }) => {

                setLifeStyle(data.data.slice(0, 4))
                setTimeout(function () {
                    lazyloaded = false
                    ForLazyLoaderImg(lazyloaded)
                }, 1000);


            })
    }, [])
    return (
        <>
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-heading">
                        <Link to="/lifestyle" onClick={scrollTop}>
                            <h2>জীবনযাপন</h2>
                        </Link>
                    </div>
                </div>
            </div>
            <div class="life-style-list-wrap">
                <div class="row gx-0">
                    {lifeStyle.map((nc) => {
                        return (
                            <div class="col-6 col-lg-3" key={nc.ContentID}>
                                <div class="life-style-list">
                                    <Link to={"/" + nc.Slug + "/news/" + nc.ContentID} onClick={scrollTop}>
                                        <div class="life-style-list-img">
                                            {nc.ImageBgPath ?
                                                <img src={process.env.REACT_APP_IMG_Path + nc.ImageBgPath} alt={nc.ContentHeading} title={nc.ContentHeading} className="img-fluid" /> :
                                                <img src={process.env.REACT_APP_LAZYL_IMG} alt={nc.ContentHeading} title={nc.ContentHeading} className="img-fluid img100" />}

                                            {nc.ShowVideo === 1 && <div className="card-video-icon big transition"> <i className="fa-solid fa-play"></i> </div>}
                                            <div class="Desc">
                                                <h3 class="Title">{nc.ContentHeading}
                                                </h3>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </>

    )
}
