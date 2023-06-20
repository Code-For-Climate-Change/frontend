import React, { useEffect } from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import './Home.css';
import { useSelector } from 'react-redux';
import { UserState } from '../../store/token/Reducer';
import { toast } from 'react-toastify';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';

function Home() {
    let navigate = useNavigate();
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )

    useEffect(() => {
        if (token == "") {
            toast.error('Você precisa estar logado!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            navigate("/login")

        }
    }, [token])


    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='fotofundo'>
                <Grid alignItems="center" 
                //item xs={12}
                >
                    <Box className='the-box'>
                        <Typography variant="h2" gutterBottom color="textPrimary" component="h4" align="center" className='nome'>Code4CC</Typography>
                        <Typography variant="h4" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>Vamos cuidar do planeta!</Typography>

                    </Box>
                    <Box display="flex" flex-wrap="wrap" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Link to="/feed" className='text-decorator-none'>
                            <Button variant="outlined" className='botaohome'>
                                Ver Postagens
                            </Button>
                        </Link>

                    </Box>
                    <Box className='the-box' >
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h6" align="center" style={{ color: "white", fontWeight: "bold" }}>
                        </Typography>
                        <Typography variant="h6" gutterBottom color="textPrimary" component="h6" align="center" style={{ color: "white", fontWeight: "bold" }}> Objetivos de Desenvolvimento Sustentável (ODS) 13
                        </Typography>
                    </Box>
                    <Grid alignItems="center" 
                    //item xs={12}
                    >
                        <Box className='the-box' >
                            {/* <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}> Rede social voltada para alertar sobre efeitos de comportamentos humanos que impactam em desastres naturais. Promovendo eventos para voluntários e orientações para prevenção e publicações
 </Typography> */}
                            <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}> </Typography>

                        </Box>
                    </Grid>
                </Grid>
                {/* <Grid item xs={6} >
                    <img src="" alt="" width="500px" height="500px" /> 
                </Grid> */}
                <Grid 
                //xs={12} 
                style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>

        </>
    );
}

export default Home;
