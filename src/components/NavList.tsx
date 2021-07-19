import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  List,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

import HomeWorkIcon from "@material-ui/icons/HomeWork";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import BusinessIcon from "@material-ui/icons/Business";

const NavList: React.FC = () => {
  const history = useHistory();
  const items = [
    { id: 1, title: "Home", icon: <HomeWorkIcon /> },
    { id: 2, title: "People Directory", icon: <PeopleAltIcon /> },
    { id: 5, title: "Company Details", icon: <BusinessIcon /> },
  ];
  const subItems = [{ id: 7, title: "Account", icon: <AccountBoxIcon /> }];

  const handleAccountClick = () => history.push(`current/edit`);
  const handleCompanyClick = () => history.push(`/about`);

  return (
    <>
      <Divider />
      <List>
        {items?.map((item) => {
          return (
            <div key={item.id}>
              <ListItem button onClick={() => handleCompanyClick()}>
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
              <ListItem button onClick={() => handleAccountClick()}>
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
