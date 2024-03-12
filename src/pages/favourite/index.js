import React, { useEffect, useState } from 'react';
import {Col, Container, Row, Table} from 'react-bootstrap';

import "./../../assets/pages/home.scss";
import {Link} from "react-router-dom";
import {collection, deleteDoc, doc, onSnapshot, query, getDoc} from "firebase/firestore";
import {DBFirebase} from "../../utils/firebase";
import formatPrice from "../utils/util_price";

function FavouriteIndex ()  {

    const [listsData, setData] = useState([]);

    const deleteItem = async(item) => {
        console.log('----------------- item: ', item);
        const user = doc(DBFirebase, 'bill', item.id)
        try{
            await deleteDoc(user)
        } catch (err) {
            alert(err)
        }
    }


    useEffect(() => {
        const q = query(collection(DBFirebase, 'bill'));
        onSnapshot(q, (querySnapshot) => {
            setData(querySnapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
            console.log('----------------- listsData', listsData);
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
                    <Col>
                        <div className={'d-flex justify-content-between align-items-center'}>
                            <h1 className='heading-h1 mt-2 mb-2' >quản lý đơn hàng</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} xl={12}>
                        <Table responsive="sm" bordered hover>
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Location</th>
                                <th>Phone</th>
                                <th>Name_Product</th>
                                <th>#</th>
                                
                            </tr>
                            </thead>
                            <tbody>
                            { listsData.length === 0 ? (
                                <tr>
                                    <td colSpan={5}>Dữ liệu đang loading</td>
                                </tr>
                            ) : (
                                <>
                                    { listsData && listsData.map( ( item, index ) => (
                                        <tr>
                                            <td>{item.id}</td>
                                            <td>{item.data.p_name}</td>
                                            <td>{item.data.p_location}</td>
                                            <td>{item.data.p_phone}</td>
                                            <td>{item.data.p_nameproduct}</td>
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

export default FavouriteIndex;
