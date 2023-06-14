import React from "react";
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, makeStyles } from "@material-ui/core";
import './Contatos.css'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';

function Contatos() {

    const integrantes = [ 
        
        { nome: 'Code4CC', texto: 'Unimos nossos conhecimentos em programação com a nossa vontade de contribuir com a mudança global do clima e desenvolvemos o Code For Climate Change, nos baseando na ODS-13 e na situação atual do nosso Planeta. Decidimos criar uma rede social pois identificamos uma grande oportunidade de visibilidade e movimentação com foco em preservar o planeta. A idéia é potencializar a conscientização referente ao aquecimento global, e impactar todas as gerações, assim o movimento é maior e efetivo.' , 
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

export default Contatos;
