import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Avatar,
  Chip,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import EmployeeDetails from "./EmployeeDetails";
import EmployeeGeneralDetails from "./EmployeeGeneralDetails";
import Resize from "../hooks/useResize";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "98%",
    padding: "5px",
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
    background: "#42b883",
    color: `#ffffff`,
    fontWeight: "bold",
    width: "65px",
  },
  engineering: {
    background: "#9033FF",
    color: `#ffffff`,
    width: "120px",
    fontWeight: "bold",
  },
  sales: {
    background: "#FF9033",
    color: `#ffffff`,
    fontWeight: "bold",
  },
  operations: {
    background: "#33A5FF",
    color: `#ffffff`,
    fontWeight: "bold",
  },
  chip: {
    minWidth: "120px",
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
  currentUserRole: number;
};

const EmployeeList = ({ employee, currentUserRole }: EmployeeListProps) => {
  const classes = useStyles();
  Resize();

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
            <Avatar style={{ background: `#24d177`, color: `#ffffff` }}>
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
      <Accordion className={classes.container}>
        <AccordionSummary expandIcon={<MoreVertIcon />}>
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
            {window.innerWidth > 600 ? (
              <>
                <Typography className={classes.column}>
                  {employee.title ? employee.title : "Profile not complete"}
                </Typography>
                <div className={classes.chip}>{chip}</div>
              </>
            ) : null}
          </div>
        </AccordionSummary>
        <AccordionDetails>
          {currentUserRole === 1328 ? (
            <EmployeeDetails employee={employee} />
          ) : (
            <EmployeeGeneralDetails employee={employee} />
          )}
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default EmployeeList;
