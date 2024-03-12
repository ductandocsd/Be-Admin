import React, { useEffect, useState } from 'react';
import {Col, Container, Row, Table} from 'react-bootstrap';

import "./../../assets/pages/home.scss";
import {Link} from "react-router-dom";
import {collection, deleteDoc, doc, onSnapshot, query} from "firebase/firestore";
import {DBFirebase} from "../../utils/firebase";
import formatPrice from "../utils/util_price";

function ClothesIndex () {

    const [listsData, setData] = useState([]);

    const deleteItem = async(item) => {
        console.log('----------------- item: ', item);
        const user = doc(DBFirebase, 'clothes', item.id)
        try{
            await deleteDoc(user)
        } catch (err) {
            alert(err)
        }
    }


    useEffect(() => {
        const q = query(collection(DBFirebase, 'clothes'));
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
                            <h1 className='heading-h1 mt-2 mb-2' >Thêm mới áo quần</h1>
                            <Link to={`/them-moi-ao-quan`} className='nav-item'>Thêm mới</Link>
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
                                <th>Avatar</th>
                                <th>Price</th>
                                <th>Description</th>
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
                                            <td>{item.data.name}</td>
                                            <td>
                                                <img src={item.data.avatar} style={{ width: "120px", height: "auto"}} alt=""/>
                                            </td>
                                            <td>{formatPrice(item.data.price)}</td>
                                            <td>{item.data.description}</td>
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

export default ClothesIndex;
