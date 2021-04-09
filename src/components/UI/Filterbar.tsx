import React, { useState } from "react";
import { useDispatch } from "react-redux";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

import Toolbar from "@material-ui/core/Toolbar";
import {
  createStyles,
  lighten,
  makeStyles,
  Theme,
} from "@material-ui/core/styles";

import MultipleSelect from "./MultipleSelect";
import SingleSelect from "./SingleSelect";
import SelectOptions from "../../types/SelectOptions";
import FilterList from "../../types/FilterList";

import { ActionCreators } from "../../state";
import { useTypeSelector } from "../../hooks/useTypeSelector";

interface FilterProps {
  customers: string[];
}

const useToolbarStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
    highlight:
      theme.palette.type === "light"
        ? {
            color: theme.palette.secondary.main,
            backgroundColor: lighten(theme.palette.secondary.light, 0.85),
          }
        : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.dark,
          },
    title: {
      flex: "1 1 100%",
    },
  })
);

const Filterbar = (props: FilterProps) => {
  const { filters } = useTypeSelector((state) => state.filters);
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const [filter, setFilter] = useState<FilterList>(filters);
  const classes = useToolbarStyles();

  return (
    <Toolbar className={clsx(classes.root)}>
      <MultipleSelect
        title={t("Customer(s)")}
        customers={Array.from(new Set(props.customers))}
        value={filter.customer}
        onCustomersChange={(values: SelectOptions[]) => {
          const newFilter = { ...filter, customer: values };
          dispatch(ActionCreators.setFilters(newFilter));
          setFilter(newFilter);
        }}
      />
      <SingleSelect
        title={t("Status")}
        value={filter.status}
        onStatusChange={(value: string) => {
          const newFilter = { ...filter, status: value };
          dispatch(ActionCreators.setFilters(newFilter));
          setFilter(newFilter);
        }}
      />
    </Toolbar>
  );
};

export default Filterbar;
