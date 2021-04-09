import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import GridItem from "./GridItem";

import Vehicle from "../../../types/Vehicle";

interface Props {
  rows: Vehicle[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      margin: "20px 0",
      width: "100%",
    },
    container: {
      width: "100%",
      margin: 0,
    },
  })
);

const GridList = (props: Props) => {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid
            container
            spacing={4}
            className={classes.container}
            id="grid-container"
          >
            {props.rows.map((value) => (
              <GridItem key={`${value.vid}${value.regNum}`} vehicle={value} />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default GridList;
