import {Breadcrumb, Col, Container, Row} from "react-bootstrap";
import React, {useState} from "react";
import "./../../assets/pages/account.scss";
import AuthApi from "../../api/AuthApi";
import {useDispatch} from "react-redux";
import {setTokenLogin} from "../../store/AuthSlice";
import Swal from "sweetalert2";
import {Link} from "react-router-dom";
import {collection, onSnapshot, query} from "firebase/firestore";
import {DBFirebase, AuthFirebase} from "../../utils/firebase";
import {  signInWithEmailAndPassword   } from 'firebase/auth';
function LoginPage()
{
    const [password, setPassword] = useState("");
    const [email, setUsername] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [usernameError, setUsernameError] = useState("");

    const loginSubmit = (e) => {
        e.preventDefault();
        handleValidation().then(r => {});
    }


    const dispatch = useDispatch();

    const handleValidation = async (event)  => {
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

        console.log('----------- PASS');

        if (formIsValid === true) {

            signInWithEmailAndPassword(AuthFirebase, email, password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    window.location.href = '/';
                    console.log(user);

                    localStorage.setItem("user", JSON.stringify(userCredential.user));
                    const token = localStorage.getItem("user");
                    const tokenString = JSON.parse(token);
                    // localStorage.setItem("accessToken", tokenString.token_info.access_token);
                    dispatch(setTokenLogin(userCredential.user));
                    window.location.href = '/';

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage)

                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: 'Đăng nhập thất bại? Mời bạn kiểm tra lại thông tin',
                        showConfirmButton: false,
                        timer: 1500
                    })

                });
        }
    }

    return (
        <Container className={'auth'} style={{ minHeight: "60vh"}}>
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
                    <form  onSubmit={loginSubmit} className="mb-5">
                        <div className="form-group mb-3">
                            <label>Tài khoản đăng nhập</label>
                            <input
                                type="text"
                                className="form-control"
                                name="email"
                                placeholder="email"
                                onChange={(event) => setUsername(event.target.value)}
                            />
                            <small id="emailHelp" className="text-danger form-text">
                                {usernameError}
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
                                Đăng nhập
                            </button>
                            <Link to={'/auth/register'} >Đăng ký</Link>
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>
    )
}

export default LoginPage;
