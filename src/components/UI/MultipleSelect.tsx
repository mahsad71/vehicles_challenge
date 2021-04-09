import React, { useEffect, useState } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import SelectOptions from "../../types/SelectOptions";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "@media (min-width:917px)": {
        minWidth: 700,
      },
      "@media (max-width:916px)": {
        minWidth: "50%",
        display: "block",
      },
    },
  })
);

interface Props {
  title: string;
  customers: string[];
  onCustomersChange: (values: SelectOptions[]) => void;
  value: SelectOptions[];
}

export default function MultiSelect(props: Props) {
  const classes = useStyles();
  const [items, setItems] = useState<SelectOptions[]>([]);

  useEffect(() => {
    const values = props.customers.map((customer) => {
      return { name: customer, value: customer };
    });
    setItems(values);
  }, [props.customers]);

  return (
    <div className={classes.root}>
      <Autocomplete
        multiple
        id="tags-standard"
        options={items}
        getOptionLabel={(option) => option.name}
        defaultValue={props.value}
        onChange={(event: React.ChangeEvent<{}>, newValue: SelectOptions[]) => {
          props.onCustomersChange(newValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label={props.title}
            placeholder={props.title}
          />
        )}
      />
    </div>
  );
}
