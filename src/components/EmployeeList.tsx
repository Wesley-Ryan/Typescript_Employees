import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  Avatar,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
type EmployeeListProps = {
  first_name: string;
};

const EmployeeList = ({ first_name }: EmployeeListProps) => {
  return (
    <>
      <ExpansionPanel style={{ width: "95%" }}>
        <ExpansionPanelSummary expandIcon={<MoreVertIcon />}>
          <Avatar
            src="https://ik.imagekit.io/WesleyRyan/social_preview/avatar_8kCbbtDiP.jpeg"
            alt="employee-avatar"
          />
          <Typography>{first_name}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </>
  );
};

export default EmployeeList;
