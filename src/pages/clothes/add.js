import React, { useEffect, useState } from 'react';
import {Breadcrumb, Col, Container, Form, Row, Table} from 'react-bootstrap';

import "./../../assets/pages/home.scss";
import {addDoc, collection, onSnapshot, query} from "firebase/firestore";
import {ref,uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {DBFirebase, storage} from "../../utils/firebase";

function Clothesadd () {

    const [name, setName] = useState("");
    const [file, setFile] = useState(null);
    const [price, setPrice] = useState("");
    const [avatar, setAvatar] = useState("");
    const [description, setDescription] = useState("");

    const loginSubmit = (e) => {
        e.preventDefault();
        handleValidation().then(r => {});
    }

    // progress
    const [percent, setPercent] = useState(0);

    // Handle file upload event and update state
    const handleChange = async(event) => {
        let file = event.target.files[0];
        const storageRef = ref(storage, `/files/${file.name}`);

        // progress can be paused and resumed. It also exposes progress updates.
        // Receives the storage reference and the file to upload.
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );

                // update progress
                setPercent(percent);
            },
            (err) => console.log(err),
            () => {
                // download url
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    console.log(" URL ", url);
                    setAvatar(url);
                });
            }
        );
    }


    const handleValidation = async (event)  => {
        console.log('=============== CHECK avatar', avatar);
        let results = await addDoc(collection(DBFirebase, 'clothes'), {
            name: name,
            price: price,
            description: description,
            avatar: avatar,

        });

        console.log('------------- results:clothes ', results)

        let resultsProducts = await addDoc(collection(DBFirebase, 's_products'), {
            p_name: name,
            p_price: price,
            p_desc: description,
            p_imgs: [avatar],

        });

        window.location.href = '/ao-quan';
    }

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (!user)
        {
            window.location.href = '/auth/login';
        }

    }, []);

    return (
        <div style={{ minHeight: "60vh"}}>
            <Container className={'auth'} style={{ minHeight: "60vh"}}>
                <Row>
                    <Col xl={12}>
                        <div className='breadcrumbs mt-2'>
                            <Breadcrumb>
                                <Breadcrumb.Item to="/">Trang chủ</Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    Trang phục
                                </Breadcrumb.Item>
                                <Breadcrumb.Item active>Thêm mới</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                    </Col>
                    <Col xl={{span: 6, offset: 3}}>
                        <form  onSubmit={loginSubmit} className="mb-5">
                            <div className="form-group mb-3">
                                <label>Tên ao quan </label>
                                <input
                                    type="text"
                                    className="form-control mt-2"
                                    name="name"
                                    placeholder="Name"
                                    onChange={(event) => setName(event.target.value)}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label>Giá</label>
                                <input
                                    type="text"
                                    className="form-control mt-2"
                                    name="price"
                                    placeholder="giá"
                                    onChange={(event) => setPrice(event.target.value)}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label>Hình ảnh</label>
                                <input type="file" className={'form-control'} accept="image/*" onChange={handleChange}/>
                            </div>
                            <div className="form-group mb-3">
                                <label>Mô tả</label>
                                <textarea className="form-control mt-2"
                                          name="description"
                                          placeholder=" Mô tả"
                                          onChange={(event) => setDescription(event.target.value)}
                                />
                            </div>

                            <div className={'d-flex justify-content-between align-items-center'}>
                                <button type="submit" className="btn btn-primary">
                                    Lưu dữ liệu
                                </button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Clothesadd;
