import React from "react";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import { useTranslation } from "react-i18next";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import IconButton from "@material-ui/core/IconButton";
import LanguageIcon from "@material-ui/icons/Language";
import ShareIcon from "@material-ui/icons/Share";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
      fontFamily: ["Roboto", '"Helvetica Neue"', '"Apple Color Emoji"'].join(
        ","
      ),
    },
    facebook: {
      color: "blue",
      verticalAlign: "bottom",
    },
    twitter: {
      color: "#1da1f2",
      verticalAlign: "bottom",
    },
    linkedin: {
      color: "#0a66c2",
      verticalAlign: "bottom",
    },
  })
);

export default function HideAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [anchorElShare, setAnchorElShare] = React.useState<null | HTMLElement>(
    null
  );
  const openShare = Boolean(anchorElShare);
  const { i18n } = useTranslation();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuShare = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElShare(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCloseShare = () => {
    setAnchorElShare(null);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="logo">
            <DriveEtaIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Vehicles
          </Typography>
          <div>
            <IconButton
              aria-label="Share"
              aria-controls="menu-appbar12a"
              aria-haspopup="true"
              onClick={handleMenuShare}
              color="inherit"
            >
              <ShareIcon />
            </IconButton>
            <Menu
              id="menu-appbar12a"
              anchorEl={anchorElShare}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={openShare}
              onClose={handleCloseShare}
            >
              <MenuItem>
                <FacebookShareButton url={window.location.href}>
                  <FacebookIcon className={classes.facebook} /> Facebook
                </FacebookShareButton>
              </MenuItem>
              <MenuItem>
                <TwitterShareButton url={window.location.href}>
                  <TwitterIcon className={classes.twitter} /> Twitter
                </TwitterShareButton>
              </MenuItem>
              <MenuItem>
                <LinkedinShareButton url={window.location.href}>
                  <LinkedInIcon className={classes.linkedin} /> Linkedin
                </LinkedinShareButton>
              </MenuItem>
            </Menu>
          </div>
          <div>
            <IconButton
              aria-label="Change Language"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
              data-test-id="change_language"
            >
              <LanguageIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={() => i18n.changeLanguage("en")}>
                English
              </MenuItem>
              <MenuItem
                data-test-id="swedish"
                onClick={() => i18n.changeLanguage("sw")}
              >
                Swedish
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
