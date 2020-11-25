import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
  root: {
    maxWidth: 800,
    margin: "100px auto"
  },
  media: {
    height: 500
  },
  typo: {
    textAlign: "center"
  }
});

export default function Task1() {
  let greeting = "";
  let date = new Date();
  let activeHour = date.getHours();
  let backgroundUrl = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sunrise-quotes-21-1586892331.jpg";
  if (activeHour >= 4 && activeHour < 12) {
    greeting = "Good morning";
    backgroundUrl = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sunrise-quotes-21-1586892331.jpg"
  } else if (activeHour >= 12 && activeHour < 17) {
    greeting = "Good Afternoon";
    backgroundUrl = "https://wallpapercave.com/wp/wp2214654.jpg"
  } else if (activeHour >= 17 && activeHour < 20) {
    greeting = "Good Evening";
    backgroundUrl = "https://wallpapercave.com/wp/wp3113563.jpg"
  } else {
    greeting = "Good Night";
    backgroundUrl = "https://wallpaperaccess.com/full/253790.jpg"
  }
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={backgroundUrl}
          title={greeting}
          alt={greeting}
        />
        <CardContent>
          <Typography className={classes.typo} gutterBottom variant="h5" component="h2">
            Hello David, {greeting}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}