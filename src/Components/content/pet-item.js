import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

export default function PetItem() {
    const classes = useStyles();
  
    return (
    <Grid container 
      direction="row"
      justify="center"
      spacing={3}>
      <Grid item xs={8}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://cs11.pikabu.ru/post_img/big/2019/01/07/8/154686452218282874.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Герцог
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Имя: Герцог
                < br />
                Возраст: 4 месяца
                < br />
                Порода: Мейн-кун
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <ThemeProvider theme={theme}>
              <Button size="small" color="primary">
                Подробнее
              </Button>
              <Button size="small" color="primary">
                Забронировать
              </Button>
            </ThemeProvider>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
    );
  }

  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 200,
    },
  });
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#4caf50',
      },
    },
    });
 