import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    margin: "100px auto"
  },
  media: {
    height: 500
  },
  typo: {
    textAlign: "center"
  }
});

export default function Task2() {
  const date = new Date();
  const hour = (date.getHours() > 12 ? (date.getHours() - 12) : date.getHours());
  const minute = (date.getMinutes() >= 10 ? (date.getMinutes()) : ("0" + date.getMinutes()));
  const seconds = (date.getSeconds() >= 10 ? date.getSeconds() : ("0" + date.getSeconds()));
  const period = ((date.getHours()>12)?"PM":"AM")
  const watchTime = ((hour > 9 ? hour : ("0" + hour)) + ":" + minute + ":" + seconds+ " "+period);
  const [time, setTime] = useState(watchTime);
  const classes = useStyles();
  const backgroundUrl = "https://i.pinimg.com/originals/24/48/24/244824821f943a397973d35a9b5f6748.jpg";

  const updateTime = () => {
    let now = new Date();
    let hour = (now.getHours() > 12 ? (now.getHours() - 12) : now.getHours());
    hour = (hour > 9 ? hour : ("0" + hour));
    let minute = (date.getMinutes() >= 10 ? (date.getMinutes()) : ("0" + date.getMinutes()));
    let seconds = (now.getSeconds() >= 10 ? now.getSeconds() : ("0" + now.getSeconds()));
    let period = ((date.getHours()>12)?"PM":"AM")
    setTime(hour + ":" + minute + ":" + seconds+" "+period);
  }
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={backgroundUrl}
        title={time}
        alt={time}
      />
      <CardActions>
        <Grid item xs={9} sm={9}>
          <h1>{time}</h1>
        </Grid>
        <Grid item xs={3} sm={3}>
          <Button onClick={updateTime} variant="contained" color="primary">Update</Button>
        </Grid>
      </CardActions>
    </Card>
  );
}