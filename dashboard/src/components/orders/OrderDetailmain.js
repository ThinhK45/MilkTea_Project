import React, { useEffect } from 'react';
import OrderDetailProducts from './OrderDetailProducts.js';
import OrderDetailInfo from './OrderDetailInfo.js';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    deliveredOrder,
    getOrderDetails,
} from '../../Redux/Actions/OrderActions.js';
import Loading from './../LoadingError/Loading';
import Message from './../LoadingError/Error';
import moment from 'moment';
const OrderDetailmain = (props) => {
    const { orderId } = props;
    const dispatch = useDispatch();

    const orderDetails = useSelector((state) => state.orderDetails);
    const { loading, error, order } = orderDetails;

    const orderDelivered = useSelector((state) => state.orderDelivered);
    const { loading: loadingDelivered, success: successDelivered } =
        orderDelivered;

    useEffect(() => {
        dispatch(getOrderDetails(orderId));
    }, [dispatch, orderId, successDelivered]);

    const deliveredHandler = () => {
        dispatch(deliveredOrder(order));
    };

    return (
        <section className="content-main">
            <div className="content-header">
                <Link to="/orders" className="btn btn-dark text-white">
                    Trở lại đơn hàng
                </Link>
            </div>

            {loading ? (
                <Loading />
            ) : error ? (
                <Message variant="alert-danger">{error}</Message>
            ) : (
                <div className="card">
                    <header className="card-header p-3 Header-green">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <span>
                                    <i className="far fa-calendar-alt mx-2"></i>
                                    <b className="text-white">
                                        {moment(order.createAt).format('llll')}
                                    </b>
                                </span>
                                <br />
                                <small className="text-white mx-3">
                                    ID đơn hàng: {order._id}
                                </small>
                            </div>
                            <div className="col-lg-6 col-md-6 ms-auto d-flex justify-content-end align-items-center">
                                <select
                                    className="form-select d-inline-block"
                                    style={{ maxWidth: '200px' }}
                                >
                                    <option>Thay đổi trạng thái</option>
                                    <option>Chờ thanh toán</option>
                                    <option>Đã xác nhận</option>
                                    <option>Vận chuyển</option>
                                    <option>Đã giao hàng</option>
                                </select>
                                <Link className="btn btn-success ms-2" to="#">
                                    <i className="fas fa-print"></i>
                                </Link>
                            </div>
                        </div>
                    </header>
                    <div className="card-body">
                        <OrderDetailInfo order={order} />
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="table-responsive">
                                    <OrderDetailProducts
                                        order={order}
                                        loading={loading}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="box shadow-sm bg-light">
                                    {order.isDelivered ? (
                                        <button className="btn btn-success col-12">
                                            Đã giao hàng vào ({' '}
                                            {moment(order.isDeliveredAt).format(
                                                'MMM Do YY'
                                            )}
                                            )
                                        </button>
                                    ) : (
                                        <>
                                            {loadingDelivered && <Loading />}
                                            <button
                                                onClick={deliveredHandler}
                                                className="btn btn-dark col-12"
                                            >
                                                Giao hàng ngay
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};
export default OrderDetailmain;
