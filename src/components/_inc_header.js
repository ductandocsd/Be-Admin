import React, {useEffect, useState} from 'react';
import {Button, Container, Form, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import AuthApi from "../api/AuthApi";
import {FaShoppingCart} from "react-icons/fa";
import {useSelector} from "react-redux";
function HeaderCpn()
{
    const [user, setUser] = useState([]);
    const [keyword, setKeyword] = useState('');
    const navigate = useNavigate();
    const location = useLocation()

    const getUser = async() => {
        try {
            const user = localStorage.getItem("user");
            if (user)
            {
                const infoUser = JSON.parse(user);
                setUser(infoUser);
            }

        } catch (e) {
            console.log("-----Expired");
        }
    }

    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem("user");
        window.location.reload();
        navigate("/");
    }


    const clickSearch = (e) => {
        navigate(`/search?keyword=${keyword}`)
    }

    useEffect(() => {
        getUser().then(r => {});
    }, []);

    return (
        <>
            <Navbar collapseOnSelect expand="lg"  className='header' bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand>
                        <Link to={"/"}>
                            Lương Quốc Khánh
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link to={`/ao-quan`} className='nav-item'>Áo quần</Link>
                            <Link to={`/trang-phuc`} className='nav-item'>Trang phục</Link>
                            <Link to={`/nguoi-dung`} className='nav-item'>Quản lý sản phẩm</Link>
                            <Link to={`/yeu-thich`} className='nav-item'>Quản lý đơn hàng</Link>
                        </Nav>
                        <Nav className='header-account'>
                            <NavDropdown title={(user && user.email) ? user.email : 'Tài khoản'} id="collasible-nav-dropdown">
                                {user && user.email ? (
                                    <>
                                        <NavDropdown.Item onClick={logout}>Đăng xuất</NavDropdown.Item>
                                    </>
                                ) : (
                                    <Link data-rr-ui-dropdown-item className={"dropdown-item"} role="button" to={`auth/login`}>Đăng nhập</Link>
                                )}
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default HeaderCpn;

