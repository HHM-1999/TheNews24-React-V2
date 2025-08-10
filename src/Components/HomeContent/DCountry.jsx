import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { scrollTop, ForLazyLoaderImg } from '../AllFunctions'
var lazyloaded = false
export default function DCountry() {
    const [country, setCountry] = useState([])
    const [country2, setCountry2] = useState([])
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}json/file/generateCategory2.json`)
            .then(({ data }) => {
                setCountry(data.data.slice(0, 1))
                setCountry2(data.data.slice(1, 4))
                setTimeout(function () {
                    lazyloaded = false
                    ForLazyLoaderImg(lazyloaded)
                }, 1000);
            })
    }, [])

    return (
        <>
            <div className="SectionTitle"><h3><Link to="/country" onClick={scrollTop}><span className="ColorBox"></span>স্বদেশ</Link></h3></div>
            <div className="row">
                {country.map((nc, i) => {
                    return (
                        <div className="col-lg-6 col-12">
                            <div className="SpecialEventTop">

                                <Link to={"/" + nc.Slug + "/news/" + nc.ContentID} key={nc.CategoryID} onClick={scrollTop}>
                                    <div className="DImgZoomBlock">
                                        <picture>
                                            <img src={process.env.REACT_APP_LAZYL_IMG} data-src={process.env.REACT_APP_IMG_Path + nc.ImageBgPath} alt={nc.ContentHeading} title={nc.ContentHeading}
                                                className="img-fluid img100" />
                                            {nc.ShowVideo === 1 && <div className="card-video-icon big transition"> <i className="fa-solid fa-play"></i> </div>}
                                        </picture>
                                    </div>
                                    <div className="Desc">
                                        {nc.ContentSubHeading == null ?
                                            <h2 className="Title FW700">{nc.ContentHeading} </h2> :
                                            <h2 className="Title FW700"> <span className="subheadTitle">{nc.ContentSubHeading + " /"}</span> {nc.ContentHeading} </h2>
                                        }

                                        {/* <h2 className="Title FW700">{nc.ContentSubHeading ===1 && <span className="subheadTitle">{nc.ContentSubHeading  + " /"}</span> } {nc.ContentHeading}</h2> */}
                                        <div className="Brief">
                                            <p>{nc.ContentBrief}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    )
                })}
                <div className="col-lg-6 col-12">
                    {country2.map((nc, i) => {
                        return (
                            <div className="SpecialEventList">
                                <Link to={"/" + nc.Slug + "/news/" + nc.ContentID} key={nc.CategoryID} onClick={scrollTop} >
                                    <div className="row">
                                        <div className="col-lg-4 col-4">
                                            <div className="DImgZoomBlock">
                                                <picture>
                                                    <img src={process.env.REACT_APP_LAZYL_IMG} data-src={process.env.REACT_APP_IMG_Path + nc.ImageSmPath} alt={nc.ContentHeading} title={nc.ContentHeading} className="img-fluid img100" />
                                                    {nc.ShowVideo === 1 && <div className="card-video-icon big transition"> <i className="fa-solid fa-play"></i> </div>}
                                                </picture>
                                            </div>
                                        </div>
                                        <div className="col-lg-8 col-8">
                                            <div className="Desc">
                                            {nc.ContentSubHeading == null ?
                                            <h2 className="Title FW700">{nc.ContentHeading} </h2> :
                                            <h2 className="Title FW700"> <span className="subheadTitle">{nc.ContentSubHeading + " /"}</span> {nc.ContentHeading} </h2>
                                        }
                                                {/* <h2 className="Title FW700">{nc.ContentSubHeading === 1 && <span className="subheadTitle">{nc.ContentSubHeading + "/ "}</span>}{nc.ContentHeading} </h2> */}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>

        </>

    )
}
