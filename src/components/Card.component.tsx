import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {AnimalInterface} from 'constants/animals';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 12,
  },
  media: {
    height: 200,
  },
});

interface OwnPropsInterface {
  data: AnimalInterface;
}

const CardComponent: React.FC<OwnPropsInterface> = ({data}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://cdn.pixabay.com/photo/2019/07/30/05/53/dog-4372036__340.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data.id}
            {data.name && `- ${data.name}`}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            {data.breed}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardComponent;
