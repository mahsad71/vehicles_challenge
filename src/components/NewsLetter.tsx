import React from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    paper: {
      marginBottom: theme.spacing(2),
      margin: 20,
      padding: 15,
      minHeight: 170,
    },
    title: {
      fontSize: 18,
      fontWeight: 600,
    },
    field: {
      width: "100%",
      marginTop: 15,
    },
    submit: {
      margin: 20,
      float: "right",
    },
  })
);

const NewsLetter: React.FC = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <Paper className={classes.paper}>
      <Typography
        className={classes.title}
        component="h2"
        data-test-id="newsletterId"
      >
        {t("Newsletter")}
      </Typography>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          className={classes.field}
          id="outlined-basic"
          label={t("Enter Your Email Address")}
          variant="outlined"
        />
        <Button
          variant="contained"
          color="primary"
          component="span"
          className={classes.submit}
        >
          {t("Submit")}
        </Button>
      </form>
    </Paper>
  );
};
export default NewsLetter;
