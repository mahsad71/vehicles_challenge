import React from 'react';
import { useTranslation } from 'react-i18next';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

import Vehicle from "../../../types/Vehicle";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
    margin:'1%',
       '@media (min-width:971px)': {
        width: '23%'
      },
      '@media (max-width:970px)': {
        width: '31%'
      },
      '@media (max-width:600px)': {
        width: '48%'
      },
      '@media (max-width:479px)': {
        width: '100%'
      }
    },
    avatar: {
      backgroundColor: red[500],
    },

  }),
);

interface Props {
    vehicle: Vehicle;
  }

const GridItem = (props:Props) => {
  const classes = useStyles();
  const {vehicle} = props
  const { t } = useTranslation();
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {vehicle.name.slice(0,1)}
          </Avatar>
        }
        title={vehicle.name}
        subheader={vehicle.vid}
      />
      <CardContent>
        <Typography  component="b">
         {t('Reg.Nr.')}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="span">
         {' '}{vehicle.regNum}
        </Typography><br/>
        <Typography  component="b">
         {t('Status')}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="span">
         {' '}{vehicle.status}
        </Typography><br/>
        <Typography  component="b">
         {t('Address')}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="span">
         {' '}{vehicle.address}
        </Typography><br/>
      </CardContent>
    </Card>
  );
}

export default GridItem;
