import React, { useState } from 'react'
import './home.css'
import { Link } from 'react-router-dom';

const Home = () => {
    const [currentStatus, setCurrentStatus] = useState(true);

    const changePlan = () => {
        setCurrentStatus(false);
    };

    return (
        <div className='container-main'>
            <div className='plan-detail'>
                {/* row1 */}
                <div className='row row1 mb-3'>
                    <div className='col-8 detail-1'>
                        <h4>Current Plan Detail</h4>
                        <h6
                            className={`${currentStatus ? 'active-plan' : 'cancelled-plan'}`}
                        >
                            {currentStatus ? 'Active' : 'Cancelled'}
                        </h6>
                    </div>
                    <div className='col-3 detail-2'>
                        {currentStatus ? (
                            <button className='cancel-btn' onClick={changePlan}>
                                Cancel
                            </button>
                        ) : (
                            ''
                        )}
                    </div>
                </div>
                {/* row2 */}
                <div className='row row2'>
                    <div className='about-plan'>
                        <h6 className='head1'>Basic</h6>
                        <h6 className='head2 mb-3'>Phone + Tablet</h6>
                        <h2 className='head3 mb-3'>
                            <span>₹ 2,000</span>/yr
                        </h2>
                        <Link to='/pricing' className='head4 btn btn-outline-blue mb-3'>
                            {currentStatus ? 'Change Plan' : 'Choose Plan'}
                        </Link>

                        <h6 className='head5'>
                            {currentStatus
                                ? `Your subscription has started on Jul 11th, 2022 and will auto
              renew on Jul 12th, 2023`
                                : `Your subscription was cancelled and you will loose access to services on Jul 11th, 2023`}
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
