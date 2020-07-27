import React from 'react';
import {Link} from "react-router-dom";

const Mypage = () => {
    const MypageLinks = [
        {
            title: '입금 확인',
            caption: '3건'
        },
        {
            title: '이사 접수 ',
            caption: '5건'
        },
        {
            title: '리뷰 알림',
            caption: '4건'
        },

    ]
    return (
        <section className="bg-light page-section">
            <div className="row">
                <div className="col-md-4 mb-5">
                    <div className="card h-100">
                        <img className="card-img-top" src="https://placehold.it/300x200" alt=""/>
                            <div className="card-body">
                                <h4 className="card-title">입금 확인</h4>
                                <p className="card-text">5건</p>
                            </div>
                            <div className="card-footer">
                                <Link to="payment" className="btn btn-primary">입금 확인 하기</Link>
                            </div>
                    </div>
                </div>
                <div className="col-md-4 mb-5">
                    <div className="card h-100">
                        <img className="card-img-top" src="https://placehold.it/300x200" alt=""/>
                            <div className="card-body">
                                <h4 className="card-title">이사 접수</h4>
                                <p className="card-text">8건</p>
                            </div>
                            <div className="card-footer">
                                <Link to="/order" className="btn btn-primary">이사 접수 확인하기</Link>
                            </div>
                    </div>
                </div>

             </div>
            {/*<section className="bg-light page-section" id="portfolio">*/}
            {/*    <div className="container">*/}
            {/*        <div className="row">*/}
            {/*            <div className="col-lg-12 text-center">*/}
            {/*                <h2 className="section-heading text-uppercase">주문 관리</h2>*/}
            {/*                <h3 className="section-subheading text-muted">사업장 짐싸님 께서는 최근 매출 100,000,00원입니다.    </h3>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="row">*/}
            {/*            {*/}
            {/*                MypageLinks && MypageLinks.map(({ title, caption }, index) =>*/}
            {/*                    <div className="col-md-4 col-sm-6 portfolio-item">*/}
            {/*                        <Link to="/map" className="portfolio-link" data-toggle="modal">*/}
            {/*                            <div className="portfolio-hover">*/}
            {/*                                <div className="portfolio-hover-content">*/}
            {/*                                    <i className="fa fa-plus fa-3x"></i>*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                            <img className="img-fluid" src={ `https://unsplash.it/350/140/?${Math.floor(Math.random(0,100) * 100)}` } alt="portfolio_img" />*/}
            {/*                        </Link>*/}
            {/*                        <div className="portfolio-caption">*/}
            {/*                            <h4>{ title }</h4>*/}
            {/*                            <p className="text-muted">{ caption }</p>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                )*/}
            {/*            }*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
        </section>
    );
};

export default Mypage