import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  Avatar,
  Chip,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import EmployeeDetails from "./EmployeeDetails";
const useStyles = makeStyles((theme) => ({
  container: {
    width: "95%",
  },
  panel: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  column: {
    width: "80px",
  },
  it: {
    background: "#33FFB2",
    color: `#ffffff`,
  },
  engineering: {
    background: "#9033FF",
    color: `#ffffff`,
  },
  sales: {
    background: "#FF9033",
    color: `#ffffff`,
  },
  operations: {
    background: "#33A5FF",
    color: `#ffffff`,
  },
}));

type EmployeeListProps = {
  employee: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    avatar: string;
    role_name: string;
    title: string;
    department: number;
    department_name: string;
    active: boolean;
  };
};
const EmployeeList = ({ employee }: EmployeeListProps) => {
  const classes = useStyles();
  let chip = null;
  switch (employee.department) {
    case 100:
      chip = (
        <Chip
          avatar={
            <Avatar style={{ background: `#711FD4`, color: `#ffffff` }}>
              {employee.department}
            </Avatar>
          }
          label={employee.department_name}
          className={classes.engineering}
        />
      );
      break;
    case 200:
      chip = (
        <Chip
          avatar={
            <Avatar style={{ background: `#258BDC`, color: `#ffffff` }}>
              {employee.department}
            </Avatar>
          }
          label={employee.department_name}
          className={classes.operations}
        />
      );
      break;
    case 300:
      chip = (
        <Chip
          avatar={
            <Avatar style={{ background: `#E4771C`, color: `#ffffff` }}>
              {employee.department}
            </Avatar>
          }
          label={employee.department_name}
          className={classes.sales}
        />
      );
      break;
    default:
      chip = (
        <Chip
          avatar={
            <Avatar style={{ background: `#1B89E0`, color: `#ffffff` }}>
              {employee.department}
            </Avatar>
          }
          label={employee.department_name}
          className={classes.it}
        />
      );
      break;
  }
  return (
    <>
      <ExpansionPanel className={classes.container}>
        <ExpansionPanelSummary expandIcon={<MoreVertIcon />}>
          <div className={classes.panel}>
            <Avatar
              src={
                employee.avatar
                  ? employee.avatar
                  : "https://ik.imagekit.io/WesleyRyan/social_preview/avatar_8kCbbtDiP.jpeg"
              }
              alt="employee-avatar"
            />
            <Typography className={classes.column}>{employee.id}</Typography>
            <Typography className={classes.column}>
              {employee.first_name}
            </Typography>
            <Typography className={classes.column}>
              {employee.last_name}
            </Typography>
            <Typography className={classes.column}>
              {employee.title ? employee.title : "Profile not complete"}
            </Typography>
            {chip}
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <EmployeeDetails employee={employee} />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </>
  );
};

export default EmployeeList;
