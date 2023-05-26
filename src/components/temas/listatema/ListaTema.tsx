import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaTema.css';
import Tema from '../../../models/Tema';
import useLocalStorage from 'react-use-localstorage';
import { useNavigate } from 'react-router-dom';
import { busca } from '../../../services/Service';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
// import { UserState } from '../../../store/token/Reducer';
import { toast } from 'react-toastify';


function ListaTema() {
    const [temas, setTemas] = useState<Tema[]>([])
    const [token, setToken] = useLocalStorage('token');

    // const token = useSelector<UserState, UserState["tokens"]>(
    //     (state) => state.tokens
    // ) -> Redux

    let navigate = useNavigate();

    useEffect(() => {
        if (token == '') {
            toast.error('Você precisa estar logado!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined
            });
            navigate("/login")
        }
    }, [token])

    async function getTema() {
        await busca('temas', setTemas, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        getTema()
    }, [temas.length])

    return (
        <>
            <Link to="/formularioTema">
                <Box mx={1} m={2}>
                    <Button variant="contained" size='small' color="primary">
                        Cadastre aqui um novo tema
                    </Button>
                </Box>
            </Link>

            {
                temas.map(tema => (
                    <Box m={2} >
                        <Card variant="outlined">
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    {tema.tema}
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {tema.descricao}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5} >
                                    <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" className="marginLeft" size='small' color="secondary" style={{ background: "#ccae62" }}>
                                                atualizar
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" size='small' color="secondary">
                                                deletar
                                            </Button>
                                        </Box>
                                    </Link>
                                </Box>
                            </CardActions>
                        </Card>
                    </Box>
                ))
            }
        </>
    );
}
export default ListaTema;