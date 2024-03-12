import React, { Component } from 'react';

class FooterCpn extends Component {

    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="footer-widget">
                                <h3>Thông tin liên hệ</h3>
                                <div className="footer-widget-content">
                                    <a href="mailto:sales@example.com"  className="contact-link">luongquockhanh45@gmail.com</a>
                                    <a href="mailto:support@example.com" className="contact-link red"> support@gmail.com </a>
                                    <a href="tel:0121234" className="contact-link">0765260352</a>
                                    {/*<div className="footer-social">*/}
                                    {/*    <ul>*/}
                                    {/*        <li><a href="#"><i className="fa fa-facebook"></i></a></li>*/}
                                    {/*        <li><a href="#"><i className="fa fa-twitter"></i></a></li>*/}
                                    {/*        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>*/}
                                    {/*        <li><a href="#"><i className="fa fa-youtube"></i></a></li>*/}
                                    {/*        <li><a href="#"><i className="fa fa-rss"></i></a></li>*/}
                                    {/*    </ul>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="footer-widget">
                                <h3>Latest Events</h3>
                                <div className="footer-widget-content">
                                    <div className="media">
                                        <div className="media-left">
                                            <a href={'/'}><img className="media-object" src="http://placehold.it/60x60"  alt={'123code.net'}/></a>
                                        </div>
                                        <div className="media-body">
                                            <p>vulputate velit esse consequat</p>
                                            <span>September 30, 2016 </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="footer-widget">
                                <h3>Giờ làm việc</h3>
                                <div className="footer-widget-content">
                                    <div className="open-time ">
                                        <ul className="opening-time">
                                            <li><span><i className="fa fa-times"></i></span><p className="clock-time"><strong>Chủ nhật :</strong> Nghỉ</p>
                                            </li>
                                            <li><span><i className="fa fa-check"></i></span><p><strong>Thứ 2 - Thứ 6 :</strong> 8am - 12am</p></li>
                                            <li><span><i className="fa fa-check"></i></span><p><strong>Thứ 7:</strong> 7am - 1am</p></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="footer-widget">
                                <h3>Latest Events</h3>
                                <div className="footer-widget-content">
                                    <div className="images-gellary">
                                        <ul>
                                        {/*<li><a href="#"><img src="http://placehold.it/85x85" alt="Instagram 01" /></a></li>*/}
                                        {/*<li><a href="#"><img src="http://placehold.it/85x85" alt="Instagram 02" /></a></li>*/}
                                        {/*<li><a href="#"><img src="http://placehold.it/85x85" alt="Instagram 03" /></a></li>*/}
                                        {/*<li><a href="#"><img src="http://placehold.it/85x85" alt="Instagram 04" /></a></li>*/}
                                        {/*<li><a href="#"><img src="http://placehold.it/85x85" alt="Instagram 05" /></a></li>*/}
                                        {/*<li><a href="#"><img src="http://placehold.it/85x85" alt="Instagram 06" /></a></li>*/}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default FooterCpn;
