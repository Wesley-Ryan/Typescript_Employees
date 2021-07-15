import { CircularProgress, Typography, Box } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  progress: {
    color: "#42b883",
  },
});
type ProgressProps = {
  val: number;
};

const ProgressDisplay = ({ val }: ProgressProps) => {
  const classes = useStyles();

  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress
        variant="determinate"
        value={val}
        size="6rem"
        className={classes.progress}
      />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          variant="caption"
          component="div"
          color="textSecondary"
          style={{ fontSize: "1.2rem" }}
        >{`${Math.round(val)}%`}</Typography>
      </Box>
    </Box>
  );
};
export default ProgressDisplay;
