import React from "react";
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, makeStyles } from "@material-ui/core";
import './Contatos.css'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';

function Contatos() {

    const integrantes = [ 
        
        { nome: 'Code4CC', texto: 'o meu propósito é contribuir para o desenvolvimento de produtos, serviços e projetos que impactem positivamente a vida das pessoas e acredito que podemos fazer isso juntos então quero te convidar a olhar minhas mídias sociais para conhecer alguns dos meus projetos!' , 
        foto: 'https://i.imgur.com/h29fit4.jpg'}
 
 ];

    const useStyles = makeStyles({
        root: {
            maxWidth: 900,
        },
        media: {
            height: 500,
        },
    });

    const classes = useStyles();

    return (
        <div className="container">
            { integrantes.map(integrante =>
                (
                    <Card className={classes.root}>
                        <CardActionArea >
                            <CardMedia
                                className={classes.media}
                                image={integrante.foto}
                                title="Contemplative Reptile"
                                
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2" align="center">
                                    {integrante.nome}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" align="center">
                                    {integrante.texto}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        {/* <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions> */}
                    </Card>
                )
                )
            }
        </div>
    )
}


// <div>
//                 {integrante.nome} <br/>
//                 {integrante.texto} <br/>
//                 {integrante.foto} <br/>
//             </div>
export default Contatos;
