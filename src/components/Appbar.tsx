import * as React from "react";
import {makeStyles, Typography} from "@material-ui/core";
import {startTimeline} from "../animations/appbarAnimation";

interface IProps {}

const AppBar: React.FC<IProps> = props => {
  const classes = useStyles();

  let logoText;
  let navContainer: HTMLDivElement;
  let logoController = React.useRef(null);
  React.useEffect(() => {
    if (!logoText || !navContainer) return;
    logoController.current = startTimeline(logoText, navContainer);
  }, []);

  const handleClick = () => {
    if (!logoController) return;
  };

  return (
    <div className={classes.root}>
      <Typography
        onClick={handleClick}
        ref={ref => (logoText = ref)}
        variant="h5"
      >
        TRAVEL
      </Typography>
      <div className={classes.navcontainer} ref={ref => (navContainer = ref)}>
        <div>
          <Typography>HOME</Typography>
        </div>
        <div>
          <Typography>HOME</Typography>
        </div>
        <div>
          <Typography>HOME</Typography>
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles({
  root: {
    height: 50,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    "& h5": {
      color: "white"
    }
  },
  navcontainer: {
    display: "flex",
    "& > div": {
      margin: "0px 12px",
      color: "white"
    }
  }
});

export default AppBar;
