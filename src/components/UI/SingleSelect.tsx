import React from "react";
import { useTranslation } from "react-i18next";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      marginTop: 10,
      "@media (max-width:916px)": {
        display: "block",
      },
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    select: {
      width: "100%",
    },
  })
);

interface Props {
  title: string;
  onStatusChange: (value: string) => void;
  value: string;
}

export default function SingleSelect(props: Props) {
  const classes = useStyles();
  const { t } = useTranslation();

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    props.onStatusChange(event.target.value as string);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="simple-select-label">{t("Status")}</InputLabel>
        <Select
          labelId="simple-select-label"
          id="simple-select"
          value={props.value}
          onChange={handleChange}
          className={classes.select}
        >
          <MenuItem value="">{t("None")}</MenuItem>
          <MenuItem value="Connected">{t("Connected")}</MenuItem>
          <MenuItem value="Disconnected">{t("Disconnected")}</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
