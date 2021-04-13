import {
  ListItemIcon,
  ListItemText,
  ListItem,
  List,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import Drawer from "@material-ui/core/Drawer";
import { SubjectOutlined, AddCircleOutline } from "@material-ui/icons";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { useHistory,useLocation } from "react-router";
import { format } from 'date-fns'
const drawerWidth = 240;
const useStyle = makeStyles((theme)=>{
    return{
        page: {
            background: '#f9f9f9',
            width: "100%",
          },
          drawer: {
            width: drawerWidth,
          },
          drawerPaper: {
            width: drawerWidth,
          },
          root: {
            display: "flex",
          },
          active: {
            background: '#f4f4f4'
        },
        title:{
           padding:theme.spacing(2)
        },
        appBar: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
          },
        date:{
            flexGrow:1,
        },
        toolbar: theme.mixins.toolbar
    }
});
export default function Layout({ children }) {
  const classes = useStyle();
  const history=useHistory()
  const location=useLocation()
  const menuItem = [
    {
      icon: <SubjectOutlined color="secondary" />,
      text: "NOTES",
      path: "/",
    },
    {
      icon: <AddCircleOutline color="secondary" />,
      text: "create Note",
      path: "/create",
    },
   
  ];
  return (
    <div className={classes.root}>
      <AppBar
       color="primary"
       elevation={0}
       position='fixed'
       className={classes.appBar}

      >
            <Toolbar>
          <Typography className={classes.date}>
            Today is the {format(new Date(), 'do MMMM Y')}
          </Typography>
          <Typography>Mario</Typography>
        </Toolbar>
      </AppBar>
     
     
      <Drawer
        variant="permanent"
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
        anchor="left"
      >
        <Typography variant="h5" className={classes.title}>
          Notes
        </Typography>
        <List>
          {menuItem.map((item) => (
            <ListItem 
            button
            key={item.id}
            onClick={() => history.push(item.path)}

            className={location.pathname == item.path ? classes.active : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.text}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>
     
      <div className={classes.page}>
      <div className={classes.toolbar}></div>
          {children}
     </div>
    </div>
  );
}
