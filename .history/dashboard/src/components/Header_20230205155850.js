import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

const Header = () => {
    useEffect(() => {
        $('[data-trigger]').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            var offcanvas_id = $(this).attr('data-trigger');
            $(offcanvas_id).toggleClass('show');
        });
        $('.btn-aside-minimize').on('click', function () {
            if (window.innerWidth < 768) {
                $('body').removeClass('aside-minimize');
                $('.navbar-aside').removeClass('show');
            } else {
                $('body').toggleClass('aside-mini');
            }
        });
    }, []);
    return (
        <header className="main-header navbar">
            <div className="col-search">
                <form className="searchform">
                    <div className="input-group">
                        <input
                            list="search_terms"
                            type="text"
                            className="form-control"
                            placeholder="Nhập từ tìm kiếm"
                        />
                        <button className="btn btn-light bg" type="button">
                            <i className="far fa-search"></i>
                        </button>
                    </div>
                    <datalist id="search_terms">
                        <option value="Sản phẩm"></option>
                        <option value="Sản phẩm"></option>
                        <option value="Đơn hàng mới"></option>
                        <option value="Samsung"></option>
                        <option value="Thinh"></option>
                    </datalist>
                </form>
            </div>
            <div className="col-nav">
                <button
                    className="btn btn-icon btn-mobile me-auto"
                    data-trigger="#offcanvas_aside"
                >
                    <i className="md-28 fas fa-bars"></i>
                </button>
                <ul className="nav">
                    <li className="nav-item">
                        <Link
                            className={`nav-link btn-icon`}
                            title="Dark mode"
                            to="#"
                        >
                            <i className="fas fa-moon"></i>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link btn-icon`} to="#">
                            <i className="fas fa-bell"></i>
                        </Link>
                    </li>
                    <li className="dropdown nav-item">
                        <Link
                            className="dropdown-toggle"
                            data-bs-toggle="dropdown"
                            to="#"
                        >
                            <img
                                className="img-xs rounded-circle"
                                src="/images/favicon.png"
                                alt="Người dùng"
                            />
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};
