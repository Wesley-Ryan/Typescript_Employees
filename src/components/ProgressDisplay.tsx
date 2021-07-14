import { CircularProgress, Typography, Box } from "@material-ui/core/";

type ProgressProps = {
  val: number;
};

const ProgressDisplay = ({ val }: ProgressProps) => {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress
        variant="determinate"
        value={val}
        size="6rem"
        color="primary"
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
        >{`${Math.round(val)}%`}</Typography>
      </Box>
    </Box>
  );
};
export default ProgressDisplay;
