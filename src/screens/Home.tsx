import * as React from "react";
import {makeStyles} from "@material-ui/core";
import {startTimeline} from "../animations/homeAnimation";
interface IProps {}

const Home: React.FC<IProps> = props => {
  let heroImg;
  let staticBg;
  React.useEffect(() => {
    if (!heroImg || !staticBg) return;
    startTimeline(heroImg, staticBg);
  }, []);

  const classes = useStyles();

  return (
    <div>
      <div className={classes.imgContainer} ref={ref => (heroImg = ref)}>
        <img
          src="https://images.unsplash.com/photo-1570161766218-f8488ebb8078?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          alt="heroimage"
        />
      </div>
      <div className={classes.background} ref={ref => (staticBg = ref)} />
    </div>
  );
};

const useStyles = makeStyles({
  imgContainer: {
    margin: "0 auto",
    "& img": {
      width: "100%"
    }
  },
  background: {
    width: "0%",
    height: "100vh",
    position: "absolute",
    background: "linear-gradient(to right, #cc6d2e, #f5af19)",
    top: 0,
    zIndex: -1
  }
});

export default Home;
