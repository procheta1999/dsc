import React, {useContext} from 'react';
import Head from 'next/head'
import Link from 'next/link'
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import { makeStyles, responsiveFontSizes } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Input from '@material-ui/core/Input';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Box from '@material-ui/core/Box';

import { blue } from '@material-ui/core/colors';

import {IndexLink} from "../../../pages/index";
import { FirebaseContext } from "../../firebase";

import CreateLink from '../Link/CreateLink'
import LinkList from '../Link/LinkList'
import SearchLinks from '../Link/SearchLinks';
import Logout from '../Auth/Logout';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <>
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
    </>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
fontSize:50,
  },
}));
  


const ScrollableTabsButtonAuto = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { user, firebase } = useContext(FirebaseContext);

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Drafts📜" {...a11yProps(0)} />
          <Tab label="My feed📃" {...a11yProps(1)} />
          <Tab label="Publish🖋" {...a11yProps(2)} />
          <Tab label="Starred items⭐" {...a11yProps(3)} />
          <Tab label="Search Blogs"  {...a11yProps(4)} />
          <Tab label="Notifications🔔" {...a11yProps(5)} />
          <Tab label="My account🙋‍♀️🙋‍♂️" {...a11yProps(6)} />
          <Tab label="Log out📤" {...a11yProps(7)} />
         
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} id="new"><br></br>
        
      </TabPanel>

      <TabPanel value={value} index={1}>
        <h1 className="title">
        DSC NSEC BLOGS-<i id="s">Write Your Own Story!</i>
        </h1>
        <Typography variant="h4" gutterBottom style={{ textAlign: "center" }}>
          Start blogging today! ✒📝Share your stories📚, your experiences! 🙋‍♀️Did you get success at one throw 🤔or was it hard? Tell us your stories.✨We would love to hear them. 📖 
        </Typography>
        <br/><br/>
        <LinkList/>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <br></br>
        <CreateLink/>
      </TabPanel>

      <TabPanel value={value} index={3}>
        <div id="e">
         Starred Stories ⭐
        </div>
      </TabPanel>

      <TabPanel value={value} index={4}>
        <SearchLinks/>
      </TabPanel>

      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>

      <TabPanel value={value} index={6}>
        <h4>{user && user.displayName}</h4>
        <p>Email Registered: { user && user.email}</p>
        <p>{user && user.uid}</p>
      </TabPanel>

      <TabPanel value={value} index={7}>
      <Typography variant="h4" gutterBottom style={{ textAlign: "center" }}>
        Do you wish to log out?
      </Typography>
        <center>
          <Logout/>
        </center>
      </TabPanel>
      <style jsx>{`
      .title {
        text-align:center;
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
        padding: 3rem 3rem 3rem 3rem;
      }
      #s{
        animation: pulse 5s infinite;
      }
      @keyframes pulse {
        20% {
          color: red;
        }
        30%{
            color:blue; 
        }
        40%{
            color:green;
        }
        100% {
          color: yellow;
        }
      }
      #e{
        font-size:40px;
      }
      #pro{
        color:blue;
      }
      
      
      #b InputBase{
        font-size:100px;
      }
      textField: {
        width: 400;
        margin: 100;
      } 
      #but{
          align-items:center;
      }
      `}</style>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
const FeedLink = () => (
    <p>
      <Link href='/feed'>
        <a>Feed</a>
      </Link>
    </p>
  );

export default ScrollableTabsButtonAuto

export{ FeedLink}
