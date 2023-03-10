import React from 'react';
import { Link } from 'react-router-dom';
import Header from './../components/Header';
import { PayPalButton } from 'react-paypal-button-v2';

const OrderScreen = () => {
    window.scrollTo(0, 0);
    return (
        <>
            <Header />
            <div className="container">
                <div className="row order-detail">
                    <div className="col-lg-4 col-sm-12 col-md-4 col-12 mb-lg-4 mb-5 mb-sm-0">
                        <div className="row">
                            <div className="col-md-4 center">
                                <div className="alert-success order-box">
                                    <i className="fas fa-user"></i>
                                </div>
                            </div>
                            <div className="col-md-8 center">
                                <h5>
                                    <strong>Customer</strong>
                                </h5>
                                <p>Admin</p>
                                <p>
                                    <a href={`mailto:admin@example.com`}>
                                        admin@example.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 2 */}
                    <div className="col-lg-4 mb-lg-4 mb-5 mb-sm-0 col-sm-12 col-md-4 col-12">
                        <div className="row">
                            <div className="col-md-4 center">
                                <div className="alert-success order-box">
                                    <i className="fas fa-truck-moving"></i>
                                </div>
                            </div>
                            <div className="col-md-8 center">
                                <h5>
                                    <strong>Thông tin đơn hàng</strong>
                                </h5>
                                <p>Đang vận chuyển</p>
                                <p>Phương thức thanh toán: Paypal</p>
                                <div className="bg-info p-2 col-12">
                                    <p className="text-white text-center text-sm-start">
                                        Thanh toán vào Jan 12 2022
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 3 */}
                    <div className="col-lg-4 col-sm-12 col-md-4 col-12 mb-lg-4 mb-5 mb-sm-0">
                        <div className="row">
                            <div className="col-md-4 center">
                                <div className="alert-success order-box">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                            </div>
                            <div className="col-md-8 center">
                                <h5>
                                    <strong>Giao hàng đến</strong>
                                </h5>
                                <p>Địa chỉ: 3/2 Hưng Lợi, Ninh Kiều, Cần Thơ</p>
                                <div className="bg-danger p-1 col-12">
                                    <p className="text-white text-center text-sm-start">
                                        Chưa giao
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row order-products justify-content-between">
                    <div className="col-lg-8">
                        {/* <Message variant="alert-info mt-5">Đơn hàng trống</Message> */}
                        <div className="order-product row">
                            <div className="col-md-3 col-6">
                                <img src="/images/4.png" alt="product" />
                            </div>
                            <div className="col-md-5 col-6 d-flex align-items-center">
                                <Link to={`/`}>
                                    <h6>Milk tea</h6>
                                </Link>
                            </div>
                            <div className="mt-3 mt-md-0 col-6 col-md-2 d-flex align-items-center flex-column">
                                <h4>Số lượng</h4>
                                <h6>4</h6>
                            </div>
                            <div className="mt-3 mt-md-0 col-md-2 col-6 align-items-end d-flex flex-column">
                                <h4>Tổng</h4>
                                <h6>$544</h6>
                            </div>
                        </div>
                    </div>
                    {/*total*/}
                    <div className="col-lg-3 d-flex align-items-end flex-column mt-5 subtotal-order">
                        <table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <td>
                                        <strong>Sản phẩm</strong>
                                    </td>
                                    <td>$255</td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Vận chuyển</strong>
                                    </td>
                                    <td>$255</td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Thuế</strong>
                                    </td>
                                    <td>$2</td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Tổng</strong>
                                    </td>
                                    <td>$512</td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="col-12">
                            <PayPalButton amount={345} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default OrderScreen;
