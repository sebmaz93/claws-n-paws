import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {
  ANIMAL_BREED_TYPE,
  ANIMAL_GENDER,
  AnimalInterface,
} from 'constants/animals';
import Chip from '@material-ui/core/Chip';
import {ReactComponent as MaleIcon} from 'assets/male.svg';
import {ReactComponent as FemaleIcon} from 'assets/female.svg';
import PureBreedIcon from '@material-ui/icons/TrendingFlatRounded';
import MixBreedIcon from '@material-ui/icons/ShuffleRounded';
import CakeIcon from '@material-ui/icons/CakeOutlined';
import SizeIcon from '@material-ui/icons/TrendingUpOutlined';
import PetIcon from '@material-ui/icons/PetsOutlined';
import {formatDistanceToNowStrict} from 'date-fns';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 12,
  },
  media: {
    height: 240,
  },
  cardContent: {
    paddingTop: 12,
  },
  name: {
    textTransform: 'capitalize',
  },
  male: {
    backgroundColor: '#5c6bc0',
  },
  female: {
    backgroundColor: '#ec407a',
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
          image={data.images[0]}
          title={data.name || data.breed}
        />
        <CardContent className={classes.cardContent}>
          <Typography
            gutterBottom
            variant="h6"
            component="h2"
            className={classes.name}
          >
            {data.id}
            {data.name && ` / ${data.name}`}
          </Typography>
          <Chip icon={<PetIcon />} color="primary" label={data.breed} />
          <Chip
            color="secondary"
            className={
              data.gender === ANIMAL_GENDER.MALE ? classes.male : classes.female
            }
            icon={
              data.gender === ANIMAL_GENDER.MALE ? <MaleIcon /> : <FemaleIcon />
            }
            label={data.gender}
          />
          <Chip
            color="secondary"
            label={data.pureBreed}
            icon={
              data.pureBreed === ANIMAL_BREED_TYPE.PURE ? (
                <PureBreedIcon />
              ) : (
                <MixBreedIcon />
              )
            }
          />
          <Chip color="secondary" icon={<SizeIcon />} label={data.size} />
          <Chip
            color="secondary"
            icon={<CakeIcon />}
            label={formatDistanceToNowStrict(data.ageISO)}
          />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="secondary">
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
