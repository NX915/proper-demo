import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPropertyList } from '../../Redux/actions';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  bold: {
    fontWeight: 700,
  },
}));

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  const classes = useStyles();
  const propertyList = useSelector(
    (state: { property: PropertyState }) => state.property.list
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (propertyList === null) dispatch(fetchPropertyList());
  }, []);

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {propertyList &&
          propertyList.map((card) => (
            <Grid item key={card.mlsNumber} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={card.photoUrl[0]}
                  title="Main house photo"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {`${card.address.street}`}
                  </Typography>
                  <Typography>{`${card.address.city} ${card.address.province}`}</Typography>
                  <Typography>{`${card.class} Property`}</Typography>
                  <Typography>{`For ${card.type}`}</Typography>
                  <Typography className={classes.bold}>{`$${
                    card.askingPriceFormmated
                      ? card.askingPriceFormmated
                      : card.askingPrice
                  }`}</Typography>
                  <Typography>{`Listed on ${card.listDate.slice(
                    2,
                    10
                  )}`}</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                  <Button size="small" color="primary">
                    Save
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}
