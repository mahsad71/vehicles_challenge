import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Skeleton from "@material-ui/lab/Skeleton";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

import Filterbar from "./UI/Filterbar";
import Table from "./UI/Table";
import GridList from "./UI/Grid/GridList";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { ActionCreators } from "../state";
import ListIcon from "@material-ui/icons/List";
import GridOnIcon from "@material-ui/icons/GridOn";
import Vehicle from "../types/Vehicle";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    error: {
      margin: 20,
      padding: 15,
      color: "rgb(220, 0, 78)",
      textAlign: "center",
    },
    margin20: {
      margin: 20,
    },
    paper: {
      marginBottom: theme.spacing(2),
      margin: 20,
      padding: 15,
    },
    viewMode: {
      float: "right",
      marginRight: 25,
    },
  })
);

enum viewType {
  list = "list",
  grid = "grid",
}

const VehiclesComponent: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const value = useTypeSelector((state) => state.vehicles);
  const [viewMode, setViewMode] = useState<viewType>(viewType.grid);
  const [row, setRow] = useState<Vehicle[]>([]);

  const { data, error, loading } = value
    ? value
    : { data: [], error: "not found", loading: false };
    
  const filterValue = useTypeSelector((state) => state.filters);

  const { filters } = filterValue
    ? filterValue
    : {
        filters: { status: "", customer: [] },
      };

  const MINUTE_MS = 20000;
  //  to fetch data every MINUTE_MS
  useEffect(() => {
    dispatch(ActionCreators.fetchVehicles());
    const interval = setInterval(() => {
      dispatch(ActionCreators.fetchVehicles());
    }, MINUTE_MS);
    // to clear previous interval
    return () => clearInterval(interval);
  }, [dispatch]);

  useEffect(() => {
    const selectedRow = data.filter((vehicle) => {      
      const connectionFilter =
        filters.status !== "" ? vehicle.status === filters.status : true;
      const customersFilter =
        filters.customer.length > 0
          ? filters.customer.some((cu) => cu.name === vehicle.name)
          : true;          
      return connectionFilter && customersFilter;
    });
    setRow(selectedRow);
  }, [filters,data]);

  if (loading) {
    return (
      <div className={classes.margin20} data-testid="loading">
        <Skeleton variant="rect" width="100%" height={118} />
        <Skeleton
          variant="rect"
          width="100%"
          height={300}
          style={{ marginTop: 20 }}
        />
      </div>
    );
  } else if (error) {
    return (
      <Paper className={classes.error}>
        <Typography>{error}</Typography>
      </Paper>
    );
  }

  return (
    <>
      <Paper className={classes.paper}>
        <Filterbar customers={data.map((value: Vehicle) => value.name)} />
      </Paper>
      <div>
        {viewMode === viewType.grid ? (
          <ListIcon className={classes.viewMode} onClick={()=>setViewMode(viewType.list)} />
        ) : (
          <GridOnIcon className={classes.viewMode} onClick={()=>setViewMode(viewType.grid)} />
        )}
      </div>
      {viewMode === viewType.grid ? (
        <GridList rows={row} />
      ) : (
        <Table rows={row} />
      )}
    </>
  );
};
export default VehiclesComponent;
