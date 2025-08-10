import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import DocumentTitle from 'react-document-title'
import { scrollTop } from '../AllFunctions'

export default function AllTagList() {
    let { all_tags } = useParams();
    const [allTags, setAllTags] = useState([])

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}tags`)
            .then(({ data }) => {
                setAllTags(data.tags);
            });
        document.querySelectorAll('link[rel="canonical"]')[0].setAttribute('href', window.location.href)
        const timer = setTimeout(() => { window.location.reload(1); }, 300000);
        return () => clearTimeout(timer);
    }, [all_tags])

    return (
        <main>
            <div className="container">
                <div className="TopHomeSection"></div>
                <DocumentTitle title='দ্য নিউজ ২৪ :: ট্যাগ সমূহ' />
                <h2 className="DTitle">
                    <Link to={+ '/'} onClick={scrollTop}>
                        <span className="DTitleInner"><span className="DTitleInnerBar"><span>ট্যাগ সমূহ</span></span></span>
                    </Link>
                </h2>
                <div className="DTagListArea mb-5">
                    <ul className="row">
                        {allTags.map((nc) => {
                            return (
                                <li className="col-lg-4 col-sm-6 col-12" key={nc.TagID}>
                                    <div className="DTagListItem">
                                        <Link to={"/tags/" + nc.TagName}>
                                            <div className="Desc">
                                                <h2 className="Title">{nc.TagName}{/* || <span>sara-ali-khan</span> */}
                                                </h2>
                                            </div>
                                        </Link>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </main>
    )
}
