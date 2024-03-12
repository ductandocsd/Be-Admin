import Skeleton from "react-loading-skeleton";
import {Link, useSearchParams} from "react-router-dom";
import {FaStar} from "react-icons/fa";
import React, {useEffect, useState} from "react";
import categoryService from "../api/categoryService";

const prices = [
    {
        value : "Dưới 60.000",
        id : 1
    },
    {
        value : "60.000 -> 180.000",
        id : 2
    },
    {
        value : "180.000 -> 500.000",
        id : 3
    },
    {
        value : "500.000 -> 1.000.000",
        id : 4
    },
]

const startConfig = [5,4,3,2,1];

function SidebarSearch({queryParameters, category}) {
    const [categories, setCategories] = useState([]);
    const [loadingCategory, setLoadingCategory] = useState(true);
    const [search, setSearch] = useSearchParams();

    const handleClickVote = (e) => {
        e.preventDefault();
        let vote = e.target.getAttribute('data-vote');
        if (e.target.classList.contains('active')) {
            e.target.classList.remove('active');
            delete search.vote;
            setSearch(search);
        } else {
            let newParams = {
                ...search,
                vote: vote
            }
            setSearch(newParams);
        }
    }

    const handleClickPrice = (e) => {
        e.preventDefault();

        let price = e.target.getAttribute('data-price');
        if (e.target.classList.contains('active')) {
            e.target.classList.remove('active');
            delete search.price;
            setSearch(search);
        } else {
            e.target.classList.add('active');
            let newParams = {
                ...search,
                price: price
            }
            setSearch(newParams);
        }
    }

    const getListsCategory = async () => {
        const response = await categoryService.getListsCategory();
        if (response.status === 200) {
            setCategories(response.data);
            setLoadingCategory(false);
        }
    }

    useEffect(() => {
        getListsCategory().then(r => {});
    },[]);

    return(
        <div className='box-right'>
            <div className='box-right-item item-category'>
                <h4 className='heading-h4 mt-2'>Danh mục sản phẩm</h4>
                <ul>
                    { loadingCategory === true ? (
                        <>
                            <Skeleton count={4}/>
                        </>
                    ) : (
                        <>
                            {categories.length > 0 &&  categories.map((item, index) => (
                                <li key={index} className={ item.slug === (category?.slug ?? "") ? 'active' : ''}>
                                    <Link to={`/danh-muc/${item.slug}`}>{item.name}</Link>
                                </li>
                            ))}
                        </>
                    )}

                </ul>
            </div>
            <div className='box-right-item'>
                <h4 className='heading-h4 mt-2'>Đánh giá</h4>
                { startConfig.map((item) => (
                    <Link key={item} className='item-start' onClick={handleClickVote} data-vote={item}>
                        { startConfig.map((index) => (
                            <FaStar key={index} className={ item >= index ? 'active' : ''}  />
                        ))}
                        Từ {item } sao
                    </Link>
                ))}
            </div>
            <div className='box-right-item'>
                <h4 className='heading-h4 mt-2'>Giá</h4>
                <div className='item-price'>
                    { prices.map((item) => (
                        <Link key={item.id} onClick={handleClickPrice} className={search.price == item.id ? 'active' : ''}
                              data-price={item.id}>{item.value}</Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SidebarSearch;
