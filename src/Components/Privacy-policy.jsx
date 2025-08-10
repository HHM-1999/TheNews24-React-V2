import React from 'react'
import DocumentTitle from 'react-document-title'
import { Link } from 'react-router-dom'
import { scrollTop } from '../Components/AllFunctions'
import FBpagePlugin from './FBpagePlugin'
import LeadLatestNews from './HomeContent/LeadLatestNews'



export default function PrivacyPolicy() {
    return (
        <div className='page-bangla'>
            <main>
                <div className="container">
                    <div className="TopHomeSection"></div>
                    <DocumentTitle title=' দ্য নিউজ ২৪ ::  Privacy Policy' />
                    <div className="SectionTitleEn"><h3><Link to="/privacy-policy" onClick={scrollTop}><span className="ColorBox"></span>Privacy Policy</Link></h3></div>

                    <div className='row mt-5 '>
                        <div className='col-lg-8'>
                            <div className="policy-details">
                                <h2>Privacy Policy for thenews24.com</h2>
                                <div className='policy-list'>
                                    <p>At thenews24.com, the privacy of our visitors is of utmost importance to us. This Privacy Policy document outlines the types of personal information received and collected by thenews24.com and how it is used.</p>
                                </div>
                                {/* log files */}
                                <h2>Log Files</h2>
                                <div className='policy-list'>
                                    <p>thenews24.com may use cookies to store information about visitors' preferences, to record user-specific information on which pages the user accesses or visits, and to personalize or customize our web page content based upon visitors' browser type or other information that the visitor sends via their browser.</p>
                                </div>

                                {/*Cookies and Web Beacons  */}
                                <div className='mt-3'>
                                    <h2 >Cookies and Web Beacons</h2>
                                    <div className='policy-list'>
                                        <p>Like many other websites, thenews24.com makes use of log files. The information inside the log files includes internet protocol (IP) addresses, type of browser, Internet Service Provider (ISP), date/time stamp, referring/exit pages, and the number of clicks to analyze trends, administer the site, track user’s movement around the site, and gather demographic information. IP addresses and other such information are not linked to any information that is personally identifiable.</p>
                                    </div>
                                </div>
                                {/*DoubleClick DART Cookie  */}
                                <div className='mt-3'>
                                    <h2 >DoubleClick DART Cookie</h2>
                                    <div className='policy-list'>
                                        <p>Google, as a third-party vendor, uses cookies to serve ads on thenews24.com. Google's use of the DART cookie enables it to serve ads to users based on their visit to thenews24.com and other sites on the Internet. Users may opt-out of the use of the DART cookie by visiting the Google ad and content network privacy policy at the following URL: http://www.google.com/privacy_ads.html</p>
                                    </div>
                                </div>
                                {/*Third-Party Ad Servers or Ad Networks  */}
                                <div className='mt-3'>
                                    <h2>Third-Party Ad Servers or Ad Networks</h2>
                                    <div className='policy-list'>
                                       <p>thenews24.com may use third-party advertising companies to serve ads when you visit our website. These companies may use information (not including your name, address, email address, or telephone number) about your visits to thenews24.com and other websites in order to provide advertisements about goods and services of interest to you. If you would like more information about this practice and to know your choices about not having this information used by these companies, please visit the Network Advertising Initiative website at http://www.networkadvertising.org.</p>
                                    </div>
                                </div>
                                 {/*Consent*/}
                                 <div className='mt-3'>
                                    <h2>Third-Party Ad Servers or Ad Networks</h2>
                                    <div className='policy-list'>
                                       <p>By using our website, you hereby consent to our privacy policy and agree to its terms.</p>
                                    </div>
                                </div>
                                 {/*Changes to the Privacy Policy*/}
                                 <div className='mt-3'>
                                    <h2>Changes to the Privacy Policy</h2>
                                    <div className='policy-list'>
                                       <p>thenews24.com reserves the right to update or change its Privacy Policy at any time. Any changes will be posted on this page. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.</p>
                                       <p>If you have any questions about our Privacy Policy, please feel free to contact us at   <a href="mailto:hello@thenews24.com" target="_blank"  rel="noreferrer">hello@thenews24.com</a></p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4">
                            <FBpagePlugin />
                            <div className='mt-5'>
                                <LeadLatestNews />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
