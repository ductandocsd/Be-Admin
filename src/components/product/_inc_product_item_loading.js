import React, {  } from 'react';
import { Col } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';

function ProductItemLoadingCpn({count}){
    let arrLoading = [];
    for (let i = 0 ; i <= 100; i++)
    {
        arrLoading.push({
            id: i
        });
        if (i === count) break;
    }

    return (
        <>
            {/* { arrLoading.length > 0 && arrLoading.map((item) => {
                
            })} */}
            <Col xs={2}>
                <div className='product-item mb-3'>
                    <Skeleton height={70} /> 
                    <Skeleton  count={3} /> 
                </div>
            </Col>
            <Col xs={2}>
                <div className='product-item mb-3'>
                    <Skeleton height={70} /> 
                    <Skeleton  count={3} /> 
                </div>
            </Col>
            <Col xs={2}>
                <div className='product-item mb-3'>
                    <Skeleton height={70} /> 
                    <Skeleton  count={3} /> 
                </div>
            </Col>
            <Col xs={2}>
                <div className='product-item mb-3'>
                    <Skeleton height={70} /> 
                    <Skeleton  count={3} /> 
                </div>
            </Col>
            <Col xs={2}>
                <div className='product-item mb-3'>
                    <Skeleton height={70} /> 
                    <Skeleton  count={3} /> 
                </div>
            </Col>
            <Col xs={2}>
                <div className='product-item mb-3'>
                    <Skeleton height={70} /> 
                    <Skeleton  count={3} /> 
                </div>
            </Col>

        </>
    );
}

export default ProductItemLoadingCpn;