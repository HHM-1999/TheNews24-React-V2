import React from 'react'
import LeadNews from './LeadNews'
import SpecialTop1 from './SpecialTop1'
import SpecialTop2 from './SpecialTop2';

export default function LeadNewsSection() {

    return (
        <>

            <div class="leadnews-wrap">
                <div class="container">
                    <div class="row gx-3">
                        <div class="col-lg-3 order-lg-1 order-2">
                        <SpecialTop1 />
                        </div>
                        <div class="col-lg-6 order-lg-2 order-1">
                            <LeadNews />
                        </div>
                        <div class="col-lg-3 order-3">
                            <SpecialTop2 />
                        </div>
                    </div>

                </div>
            </div>

        </>

    )
}
