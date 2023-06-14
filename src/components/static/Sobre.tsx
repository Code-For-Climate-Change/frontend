import React from "react";
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, makeStyles } from "@material-ui/core";
import './Sobre.css'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';

function Sobre() {

    const integrantes = [ 
        { nome: 'Beatriz Seraphim', texto: 'A tecnologia me encanta quando me da oportunidade de criar, desenvolver e estar em constante evolução. Tenho como ponte forte Resolução de Conflitos e Trabalho em equipe. Para saber mais sobre mim e meus projetos, convido-os a visitarem meu LinkedIn e Github!', foto: 'https://i.imgur.com/sjp9Eao.jpeg',
          linkedin: <a href="https://www.linkedin.com/in/beatriz-seraphim/
          " target="_blank">
        <LinkedInIcon style={{ fontSize: 60, color: "#0A66C2" }} />
    </a> , github: <a href="https://github.com/BeatrizSeraphim" target="_blank">
                        <GithubIcon style={{ fontSize: 60, color: "black" }} />
                    </a>},
        { nome: 'Daisy Santos', texto: 'Sou formada em Marketing e tenho experiência com Mídias Sociais e Melhoria Contínua. A tecnologia é algo que sempre esteve presente em minha vida. Sou uma pessoa criativa, com comunicação assertiva. Para saber mais sobre mim, acesse meu LinkedIn e GitHub.', foto: 'https://i.imgur.com/EORrmGw.png' ,
        linkedin: <a href="https://www.linkedin.com/in/daisy-santos-s/
        " target="_blank">
      <LinkedInIcon style={{ fontSize: 60, color: "#0A66C2" }} />
  </a> , github: <a href="https://github.com/daisysantos" target="_blank">
                        <GithubIcon style={{ fontSize: 60, color: "black" }} />
                    </a>},
        { nome: 'Gabriel Machado', texto: 'Em minha carreira profissional adquiri conhecimentos em produtos bancários e experiência na área a prevenção a lavagem de dinheiro. Sempre fui proativo tenho facilidade em me comunicar. Para mais detalhes acesse meu Github e Linkedin, deixo os links a disposição!', foto: 'https://i.imgur.com/Tk5cNgY.png',
        linkedin: <a href="https://www.linkedin.com/in/gabriel-machado-s/
        " target="_blank">
      <LinkedInIcon style={{ fontSize: 60, color: "#0A66C2" }} />
  </a> , github: <a href="https://github.com/GabriMachado" target="_blank">
                        <GithubIcon style={{ fontSize: 60, color: "black" }} />
                    </a>},
        { nome: 'Heimy Dias', texto: 'O meu propósito é contribuir para o desenvolvimento de produtos, serviços e projetos que impactem positivamente a vida das pessoas e acredito que podemos fazer isso juntos então quero te convidar a olhar minhas mídias sociais para conhecer alguns dos meus projetos!', foto: 'https://i.imgur.com/6kQdsgt.jpg' ,
        linkedin: <a href="https://www.linkedin.com/in/heimydias/
        " target="_blank">
      <LinkedInIcon style={{ fontSize: 60, color: "#0A66C2" }} />
  </a> , github: <a href="https://github.com/heimydias" target="_blank">
                        <GithubIcon style={{ fontSize: 60, color: "black" }} />
                    </a>},
        { nome: 'Marcos Caldas', texto: 'Olá! Apaixonado por tecnologia e café, resolvi entrar no mundo da programação. Atualmente estou estudando Spring Boot e React.js almejando a minha primeira vaga como desenvolvedor. Para saber mais sobre mim, acesse meu LinkedIn e GitHub.', foto: 'https://avatars.githubusercontent.com/u/59856706?s=400&u=0b67f45beab5a074e92bc4af114a18dedcc5c7d8&v=4' ,
        linkedin: <a href="https://www.linkedin.com/in/marcos-v-ramos-caldas/
        " target="_blank">
      <LinkedInIcon style={{ fontSize: 60, color: "#0A66C2" }} />
  </a> , github: <a href="https://github.com/Marcos-V-Ramos" target="_blank">
                        <GithubIcon style={{ fontSize: 60, color: "black" }} />
                    </a>}
 
 ];

    const useStyles = makeStyles({
        root: {
            maxWidth: 345,
        },
        media: {
            height: 420,
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
                                <Typography align="center">
                                {integrante.linkedin}
                                {integrante.github}
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
export default Sobre;
