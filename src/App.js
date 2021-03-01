import React, { useState } from 'react';
import Task1 from './component/Task1';
import Task2 from './component/Task2';
import Task3 from './component/Task3';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import BarChartIcon from '@material-ui/icons/BarChart';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route, Redirect, useHistory } from 'react-router-dom'
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
  const history = useHistory();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null); //State Hook
  const [task, setTask] = useState("task1");
  const open = Boolean(anchorEl);
  const taskList = ['task1', 'task2', 'task3'];

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const selectTask = (val) => {
    // setTask(val);
console.log('val=>',val);
    history.push("/task2");
    handleClose();
  }

  var component = <Task1 />
  switch (task) {
    case 'task1':
      component = <Task1 />
      break;

    case 'task2':
      component = <Task2 />
      break;
    
    case 'task3':
      component = <Task3/>
      break;

    default:
      component = <Task1 />
      break;
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
            <Menu id="menu-appbar" anchorEl={anchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={open} onClose={handleClose} PaperProps={{ style: { maxHeight: 30 * 4.5, width: '20ch' } }} >
              {taskList.map((element, index) => {
                return <MenuItem key={index} onClick={() => selectTask(element)}>{element}</MenuItem>
              })}
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      {/* {component} */}
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect strict from="/" to="/task1" />
          </Route>
          <Route path="/task1" component={Task1}></Route>
          <Route path="/task2" component={Task2}></Route>
          <Route path="/task3" component={Task3}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;