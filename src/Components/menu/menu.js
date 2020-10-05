import React from 'react';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import {Grid} from "@material-ui/core";
import './menu.css';


export const Menu = () => {

  return (
    <ThemeProvider theme={theme}>
        <AppBar position="static">
            <Grid
                container spacing={1}
                direction="row"
                justify="center">
                  <Grid item xs={9} >
                    <p>7-926-202-78-53</p>
                  </Grid>
                    <Button><a href="/info">О питомнике</a></Button>
                    <Button><a href="/pet-list">Питомцы</a></Button>
                    <Button><a href="/pet-form">Не нашли, что искали?</a></Button>
            </Grid>
        </AppBar>
    </ThemeProvider>
  )
};

const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#4caf50",
      },
    },
    });
export default Menu;