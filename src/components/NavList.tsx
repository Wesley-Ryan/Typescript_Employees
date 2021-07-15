import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  List,
} from "@material-ui/core";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import UpdateIcon from "@material-ui/icons/Update";
import EventIcon from "@material-ui/icons/Event";
import BusinessIcon from "@material-ui/icons/Business";
import SettingsIcon from "@material-ui/icons/Settings";
export interface NavListProps {}

const NavList: React.FC<NavListProps> = () => {
  const items = [
    { id: 1, title: "Home", icon: <HomeWorkIcon /> },
    { id: 2, title: "People Directory", icon: <PeopleAltIcon /> },
    { id: 3, title: "Time Tracking", icon: <EventIcon /> },
    { id: 4, title: "Payroll", icon: <UpdateIcon /> },
    { id: 5, title: "Company Details", icon: <BusinessIcon /> },
  ];
  const subItems = [
    { id: 6, title: "Settings", icon: <SettingsIcon /> },
    { id: 7, title: "Account", icon: <AccountBoxIcon /> },
  ];
  return (
    <>
      <Divider />
      <List>
        {items?.map((item) => {
          return (
            <div key={item.id}>
              <ListItem button>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.title}</ListItemText>
              </ListItem>
            </div>
          );
        })}
      </List>
      <Divider />
      <List>
        {subItems?.map((subItem) => {
          return (
            <div key={subItem.id}>
              <ListItem button>
                <ListItemIcon>{subItem.icon}</ListItemIcon>
                <ListItemText>{subItem.title}</ListItemText>
              </ListItem>
            </div>
          );
        })}
      </List>
    </>
  );
};

export default NavList;
