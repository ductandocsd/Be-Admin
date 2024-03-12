import {Breadcrumb, Col, Container, Row} from "react-bootstrap";
import React, {useState} from "react";
import "./../../assets/pages/account.scss";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {DBFirebase, AuthFirebase} from "../../utils/firebase";
import {collection, addDoc} from 'firebase/firestore';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import async from "async";

function RegisterPage() {
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");

    const loginSubmit = (e) => {
        e.preventDefault();
        handleValidation().then(r => {
        });
    }


    const dispatch = useDispatch();

    const handleValidation = async (event) => {
        console.log('=============== CHECK');
        let formIsValid = true;


        if (!password.match(/^[a-z0-9]{5,22}$/)) {
            formIsValid = false;
            setPasswordError(
                "Password phải từ 5 đến 22 ký tự"
            );
            return false;
        } else {
            console.log('----------- password: ', password);
            setPasswordError("");
            formIsValid = true;
        }

        if (!name) {
            formIsValid = false;
            setNameError(
                "Tên không được để trống"
            );
            return false;
        } else {
            setNameError("");
            formIsValid = true;
        }

        if (!email) {
            formIsValid = false;
            setEmailError(
                "Email không được để trống"
            );
            return false;
        } else {
            setEmailError("");
            formIsValid = true;
        }

        console.log('----------- PASS');
        let flag = false;
        if (formIsValid === true) {
            console.log('------------- LOGIN');
            await createUserWithEmailAndPassword(AuthFirebase, email, password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    console.log("================= USER REGISTER => ",user);
                    flag = true;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                    // ..
                });

            if (flag === true) {
                let adminRegister =  await addDoc(collection(DBFirebase, 'admin'), {
                    name: name,
                    email: email,
                    password: password
                })
                console.log('================== SYNC ADMIN : ', adminRegister);
                window.location.href = '/';
            }
        }
    }

    const syncAdmin = async (data) => {
        let results = await addDoc(collection(DBFirebase, 'popular_product'), data);
        console.log('================ results: ', results);
    }

    return (
        <Container className={'auth'} style={{minHeight: "60vh"}}>
            <Row>
                <Col xl={12}>
                    <div className='breadcrumbs mt-2'>
                        <Breadcrumb>
                            <Breadcrumb.Item to="/">Trang chủ</Breadcrumb.Item>
                            <Breadcrumb.Item>
                                Auth
                            </Breadcrumb.Item>
                            <Breadcrumb.Item active>Đăng nhập</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                </Col>
                <Col xl={{span: 4, offset: 4}}>
                    <form onSubmit={loginSubmit} className="mb-5">
                        <div className="form-group mb-3">
                            <label>Họ tên</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                placeholder="Name"
                                onChange={(event) => setName(event.target.value)}
                            />
                            <small id="emailHelp" className="text-danger form-text">
                                {nameError}
                            </small>
                        </div>
                        <div className="form-group mb-3">
                            <label>Email</label>
                            <input
                                type="text"
                                className="form-control"
                                name="email"
                                placeholder="email"
                                onChange={(event) => setEmail(event.target.value)}
                            />
                            <small id="emailHelp" className="text-danger form-text">
                                {emailError}
                            </small>
                        </div>
                        <div className="form-group mb-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                onChange={(event) => setPassword(event.target.value)}
                            />
                            <small className="text-danger form-text">
                                {passwordError}
                            </small>
                        </div>
                        <div className={'d-flex justify-content-between align-items-center'}>
                            <button type="submit" className="btn btn-primary">
                                Đăng ký
                            </button>
                            <Link to={'/auth/login'}>Đăng nhập</Link>
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>
    )
}

export default RegisterPage;
