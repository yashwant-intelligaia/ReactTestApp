import React from 'react';
import Task1 from './component/Task1';
// import Task2 from './component/Task2';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import BarChartIcon from '@material-ui/icons/BarChart';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  selectTask: {
    width: 200
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [task, setTask] = React.useState("task1");
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const selectTask = (val) => {
    setTask(val);
    handleClose();
  }

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <BarChartIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>TestApp</Typography>
          <div>
            <IconButton aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleMenu} color="inherit">
              <MenuOpenIcon />
            </IconButton>
            <Menu id="menu-appbar" anchorEl={anchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={open} onClose={handleClose}>
              <MenuItem onClick={() => selectTask("task1")}>Task1</MenuItem>
              {/* <MenuItem onClick={()=>selectTask("task2")}>Task2</MenuItem> */}
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      {/* {task === "task1" ? <Task1 /> : <Task2 />} */}
      <Task1 />
    </div>
  );
}

export default App;