import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/token/Reducer';
import { Link } from 'react-router-dom';
 

function Footer() {

    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    );
    var footerComponent

    if (token !== '') {
        footerComponent =

    <Grid container direction="row" justifyContent="center" alignItems="center" >
        <Grid alignItems="center" item xs={12}>
            <Box className='menunavegacao'>
                <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                    <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>Siga-nos nas redes sociais </Typography>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <a href="https://github.com/Code-For-Climate-Change" target="_blank">
                        <GithubIcon style={{ fontSize: 60, color: "white" }} />
                    </a>
                    {/* <a href="https://www.instagram.com/" target="_blank">
                        <InstagramIcon style={{ fontSize: 60, color: "white" }} />
                    </a>
                    <a href="" target="_blank">
                        <LinkedInIcon style={{ fontSize: 60, color: "white" }} />
                    </a> */}
                </Box>
            </Box>
            <Box className='menunavegacao' >
                <Box paddingTop={1}>
                    <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >Code For Climate Change © 2023</Typography>
                </Box>
                <Box display="flex" justifyContent="center" >
                <Link to='/sobre'  className='text-decorator-none'>
                <Box mx={1} style={{ cursor: "pointer" }}>
                 
                   <Typography variant="subtitle2" align="center" style={{ color: "white" }}>
                        Contatos 
                        
                    </Typography> 
                   
                </Box>
                </Link>
                <Link to='/contatos'  className='text-decorator-none'>
                <Box mx={1} style={{ cursor: "pointer" }} >
                   
                    <Typography variant="subtitle2" align="center"  style={{ color: "white" }} >
                        Sobre Nós
                    </Typography>
                   
                </Box>
                </Link>
                </Box>
                <Box>
                    <a target="_blank" href="https://brasil.generation.org"  className='text-decorator-none'>
                        <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">brasil.generation.org</Typography>
                    </a>
                </Box>
            </Box>
        </Grid>
    </Grid>
}
    return (
        <>
        {footerComponent}
        </>
    )
}

export default Footer;