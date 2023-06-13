import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { UserState } from '../../../store/token/Reducer';
import { addToken } from '../../../store/token/Actions';

function Navbar() {

    let navigate = useNavigate();

    const dispatch = useDispatch();

    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )

    function goLogout() {
        dispatch(addToken(''))

        toast.info('Usuário deslogado com sucesso!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        navigate('/login')
    }

    var navbarComponent;

    if (token !== '') {
        navbarComponent =


            <AppBar position="static" className='menunavegacao'>
                <Toolbar variant="dense">
                    {/* <Box style={{ cursor: "pointer" }} >
                <Typography variant="h5" color="inherit">
                    Code4CC 🌐
                </Typography>
            </Box> */}

                    <Box display="flex" justifyContent="start">
                        <Link to='/home' className='text-decorator-none'>
                            <Box mx={1} style={{ cursor: "pointer" }}>
                                <Typography variant="h6" style={{ color: "white" }}>
                                    Home
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/perfil' className='text-decorator-none'>
                            <Box mx={1} style={{ cursor: "pointer" }}>
                                <Typography variant="h6" style={{ color: "inherit" }}>
                                    Perfil
                                </Typography>
                            </Box>
                        </Link>
                        <Link className="text-decorator-none" to="/feed">
                            <Box mx={1} style={{ cursor: "pointer" }}>
                                <Typography variant="h6" color="inherit">
                                    Feed
                                </Typography>
                            </Box>
                        </Link>

                        <Link className="text-decorator-none" to="/temas">
                            <Box mx={1} style={{ cursor: "pointer" }}>
                                <Typography variant="h6" color="inherit">
                                    Tema
                                </Typography>
                            </Box>
                        </Link>

                                                                {/* <Box mx={1} style={{ cursor: "pointer" }}>
                                                            <Typography variant="h6" color="inherit">
                                                                Sobre
                                                            </Typography>
                                                        </Box>
                                                        <Box mx={1} style={{ cursor: "pointer" }}>
                                                            <Typography variant="h6" color="inherit">
                                                                Contatos
                                                            </Typography>
                                                        </Box> */}
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Link to='/login' className='text-decorator-none'>
                            <Box mx={1} style={{ cursor: "pointer" }} onClick={goLogout}>
                                <Typography variant="h6" style={{ color: "white" }}>
                                    Logout
                                </Typography>
                            </Box>
                        </Link>
                    </Box>


                </Toolbar>
            </AppBar>
    }
    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;