import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { LazyLoadImage } from "react-lazy-load-image-component";
import ImageDefailt from "../../assets/image/default-image.png";
import formatPrice, {buildImage, onErrorImage} from "../../pages/utils/util_price";

function ProductItem({product, loading}) {
    const renderAge = () => {
        if (loading === false && product.review_total > 0) {
            return Math.round(product.review_star / product.review_total, 1);
        }
        return 0;
    }
    return (
        (loading === true ? (
            <div>
                Loading
            </div>
        ) : (
            <div className='product-item mb-3'>
                <Link to={`/san-pham/${product.slug}`} className='product-item-image'>
                    <img src={ buildImage(product.avatar) } alt={ product.name } onError={ onErrorImage } />
                </Link>
                <h3 className='product-item-title'>
                    <Link to={`/san-pham/${product.slug}`}>{product.name}</Link>
                </h3>
                <p className='product-item-start'>
                    <span><span>{renderAge()} </span> <FaStar className='start' /> </span> <span>|</span>  <span>Đã bán {product.pay}</span>
                </p>
                {/*{ product.sale > 0 ? (*/}
                {/*    <p className='product-item-price'>*/}
                {/*        <span className='sale'>120.000 <sup>đ</sup> <sub>-5</sub></span>*/}
                {/*    </p>*/}
                {/*) : (*/}
                {/*    <p className='product-item-price'>*/}
                {/*        <span className='price'>120.000 <sup>đ</sup></span>*/}
                {/*    </p>*/}
                {/*)}*/}
                <p className='product-item-price'>
                    <span className='price'>{formatPrice(product?.price)} <sup>đ</sup></span>
                </p>
            </div>
        ))
    );
}

export default ProductItem;
