import React, { useState, useEffect, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service'
import { Grid, Typography, Button, TextField } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './CadastroUsuario.css';
import { toast } from 'react-toastify';

function CadastroUsuario() {
    let navigate = useNavigate();

    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            dataNascimento: '',
            tipoUsuario: '',
            usuario: '',
            senha: '',
            foto: ''
        })
    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            dataNascimento: '',
            tipoUsuario: '',
            usuario: '',
            senha: '',
            foto: ''
        })
    useEffect(() => {
        if (userResult.id != 0) {
            navigate("/login")
        }
    }, [userResult])
    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (confirmarSenha == user.senha) {
            cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)

            toast.success('Usuario cadastrado com sucesso!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        } else {

            toast.error('Dados inconsistentes. Favor verificar as informações de cadastro!', {
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

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const validarEmail = emailRegex.test(user.usuario);

    const checaNome = user.nome.length > 0 && user.nome.length < 3
    const checaUsuario = !validarEmail && user.usuario.length > 0
    const checaSenha = user.senha.length > 0 && user.senha.length < 8
    const checaConfirmarSenha = confirmarSenha !== user.senha
    const checaVazio = user.nome.length === 0 || user.usuario.length === 0 ||
        user.senha.length === 0 || confirmarSenha.length === 0

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className='imagem3'></Grid>
            <Grid item xs={6} alignItems='center' className='respon'>
                <Box paddingX={10}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Cadastrar</Typography>
                        <div
                            className="imagemUsuario"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            style={{ backgroundImage: user.foto !== '' ? `url(${user.foto})` : 'url(https://i.imgur.com/qDUPJ43_d.webp?maxwidth=760&fidelity=grand)' }}
                        >
                        </div>
                        <TextField  error={checaNome} value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='Nome' variant='outlined' name='nome' margin='normal' fullWidth helperText={checaNome ? 'Digite um nome válido!' : ''}/>
                        <TextField value={user.dataNascimento} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='dataNascimento' label='Nascimento ex: AAA-MM-DD' variant='outlined' name='dataNascimento' margin='normal' fullWidth/>
                        <TextField value={user.tipoUsuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='tipoUsuario' label='Tipo de Usuario' variant='outlined' name='tipoUsuario' margin='normal' fullWidth />
                        <TextField error={checaUsuario} value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='E-mail' variant='outlined' name='usuario' margin='normal' fullWidth helperText={checaUsuario ? 'Digite um e-mail válido!' : ''}/>
                        <TextField error={checaSenha} value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth  helperText={checaSenha ? "A senha precisa ter no mínimo 8 caracteres" : ""}/>
                        <TextField error={checaConfirmarSenha} value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='Confirmar Senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth helperText={checaConfirmarSenha ? 'As senhas não conferem!' : ''}/>
                        <TextField
                            id="foto"
                            label="Insira o Link da sua foto"
                            placeholder="Insira o nome de usuário:"
                            variant="outlined"
                            name="foto"
                            margin="normal"
                            fullWidth
                            type="text"
                            value={user.foto}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                        />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className='text-decorator-none'>
                                <Button variant='contained' color='secondary' className='btnCancelar'>
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type='submit' variant='contained' color='primary' className="botaodeletar">
                                Cadastrar
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>

        </Grid>
    );
}

export default CadastroUsuario;