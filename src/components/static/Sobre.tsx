import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, makeStyles } from "@material-ui/core";

function Sobre() {

    const integrantes = [
        { nome: 'Beatriz Seraphim', texto: 'Apaixonada por tecnologia', foto: 'https://i.imgur.com/Tk5cNgY.png' },
        { nome: 'Daisy Santos', texto: 'Adora novos desafios', foto: 'https://i.imgur.com/EORrmGw.png' },
        { nome: 'Gabriel Machado', texto: 'Apaixonada por tecnologia', foto: 'https://i.imgur.com/Tk5cNgY.png' },
        { nome: 'Heimy Dias', texto: 'Apaixonada por tecnologia', foto: 'https://i.imgur.com/6kQdsgt.jpg' },
        { nome: 'Marcos Caldas', texto: 'Apaixonada por tecnologia', foto: 'https://i.imgur.com/Tk5cNgY.png' }
    ];

    const useStyles = makeStyles({
        root: {
            maxWidth: 345,
        },
        media: {
            height: 140,
        },
    });

    const classes = useStyles();

    return (
        integrantes.map(integrante =>
        (
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={integrante.foto}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {integrante.nome}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
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
    )
}


// <div>
//                 {integrante.nome} <br/>
//                 {integrante.texto} <br/>
//                 {integrante.foto} <br/>
//             </div>
export default Sobre;
