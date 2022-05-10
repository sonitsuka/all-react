import React from 'react';
import {Typography, AppBar, Card, CardActions, CardContent, CardMedia, 
  CssBaseline, Grid, Toolbar, Container,Button, cardClasses } from '@mui/material';
import PhotoCamera from '@emotion/styled';
import useStyles from './styles';

const cards = [1,2,3,4,5,6,7,8]
const App = ()  => {
  const classes = useStyles();

  return (
      <div>
          <CssBaseline />
          <AppBar position = "relative">
              <Toolbar>
                  <PhotoCamera className={classes.icon} />
                  <Typography variant ="h6">
                    Photo Album
                  </Typography>
              </Toolbar>
          </AppBar>
          <main>
            <div className={classes.container}>
              <Container maxWidth = "sm">
                <Typography variant ="h2" align='center' color="textPrimary" gutterBottom>
                  PhotoAlbum
                </Typography>
                <Typography variant ="h5" align='center' color="textSecondary" paragraph>
                  subtitle, description
                </Typography>
                <div className={classes.buttons}>
                  <Grid container spacing={2} justify = "center">
                    <Grid item>
                      <Button variant="contained" color="primary">
                        See My Photos
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button variant="outlined" color="secondary">
                        Secondary 
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              </Container>
            </div>
            <Container className={classes.cardGrid} maxWidth ="md">
              <Grid container spacing ={4}>
              {cards.map((card)=>(
                  <Grid item key = {card} xs = {12} sm ={6} md ={4}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.CardMedia}
                        image = '../public/logo192.png'
                        title = 'image title' 
                      />
                      <CardContent className= {classes.card}>
                        <Typography gutterBottom variant='h5'>
                          Heading 
                        </Typography>
                        <Typography>
                          this is amedia card. section content
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size ="small" color="primary"> View</Button>
                        <Button size ="medium" color="primary"> Edit</Button>

                      </CardActions>
                    </Card>
                  </Grid>
              ))}
              </Grid>
            </Container>
            
          </main>
          <footer className={classes.footer}>
                <Typography variant ="h6" align='center' gutterBottom>
                  Footer
                </Typography>
                <Typography variant ="subtitle1" align='center' color="secondary">
                  Someting here to give the footer a purpose
                </Typography>
          </footer>
      </div>
  );
}

export default App;
