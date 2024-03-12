import React, { useEffect, useState } from 'react';
import {Col, Container, Row, Table} from 'react-bootstrap';

import "./../../assets/pages/home.scss";
import {collection, query, doc, onSnapshot, deleteDoc} from "firebase/firestore"
import { DBFirebase} from "../../utils/firebase";
import ProductItemLoadingCpn from "../../components/product/_inc_product_item_loading";
import ProductItem from "../../components/product/_inc_product_item";
import {Link} from "react-router-dom";
import formatPrice from "../utils/util_price";


function UserPage () {
    const [users, setUsers] = useState([]);

    const deleteItem = async(item) => {
        console.log('----------------- item: ', item);
        const user = doc(DBFirebase, 's_products', item.id)
        try{
            await deleteDoc(user)
        } catch (err) {
            alert(err)
        }
    }

    useEffect(() => {
        const q = query(collection(DBFirebase, 's_products'));
        onSnapshot(q, (querySnapshot) => {
            setUsers(querySnapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
            console.log('----------------- s_products', users);
        })

        const user = localStorage.getItem("user");
        if (!user)
        {
            window.location.href = '/auth/login';
        }
    }, []);

    return (
        <div style={{ minHeight: "60vh"}}>
            <Container>
                <Row>
                    <Col><h1 className='heading-h1 mt-2 mb-2' >Quản lý sản phẩm</h1></Col>
                </Row>
                <Row>
                    <Col xs={12} xl={12}>
                        <Table responsive="sm" bordered hover>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Avatar</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                { users.length === 0 ? (
                                    <tr>
                                        <td colSpan={5}>Dữ liệu đang loading</td>
                                    </tr>
                                ) : (
                                    <>
                                        { users && users.map( ( item, index ) => (
                                            <tr>
                                                <td>{item.id}</td>
                                                <td>
                                                    <img src={item.data.p_imgs} style={{ width: "120px", height: "auto"}} alt=""/>
                                                </td>
                                                <td>{item.data.p_name}</td>
                                                <td>{formatPrice(item.data.p_price)}</td>
                                                <td>
                                                    <span className={'text-danger'} onClick={() => deleteItem(item)}>Xoá</span>
                                                </td>
                                            </tr>
                                        ) ) }

                                    </>
                                ) }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default UserPage;
