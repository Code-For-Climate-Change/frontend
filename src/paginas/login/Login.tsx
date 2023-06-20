import React, { useState, useEffect, ChangeEvent } from 'react';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/Service';
import UserLogin from '../../models/UserLogin';
import './Login.css';
import { useDispatch } from 'react-redux';
import { addId, addToken } from '../../store/token/Actions';
import { toast } from 'react-toastify';

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState("");
    const [userId, setUserId] = useState(0);
    // const [token, setToken] = useLocalStorage('token');
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            token: ''

        }
    )

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (token != '') {
            dispatch(addId(`${userId}`))
            dispatch(addToken(token))
            navigate('/home')
        }
    }, [token, userId])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            
            const response = await login(`/usuarios/logar`, userLogin, setToken, setUserId);

            toast.success('Usuário logado com sucesso!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });

        } catch (error) {

            toast.error('Dados do usuário inválidos, erro ao logar!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });

        }

    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' className='fotologin' >
            <Grid 
            alignItems='center' 
            // xs={6}
            >
                <Box className='the-box'>
                    <form onSubmit={onSubmit} className='campoentrada'>
                        <Typography variant='h3' gutterBottom component='h3' align='center' className='tituloEntrar'>Entrar</Typography>
                        <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='E-mail' variant='outlined' name='usuario' margin='normal' fullWidth/>
                        <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth/>
                        <Box marginTop={2} textAlign='center'>
                            <Button type='submit' variant='contained' color='primary' className='botaoatualizar'>
                                Logar
                            </Button>
                        </Box>
                        <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center' className='tituloEntrar'>Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastrousuario'>
                            <Typography variant='subtitle1' gutterBottom align='center' className='tituloEntrar'><mark>Cadastre-se</mark></Typography>
                        </Link>

                    </Box>
                    </form>
                    
                </Box>
            </Grid>
            {/* <Grid xs={6} className='imagem' >

            </Grid> */}
        </Grid>
    );
}


export default Login;