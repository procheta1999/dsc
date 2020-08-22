import React from 'react'
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import { route } from 'next/dist/next-server/server/router';
import { FirebaseContext } from '../../firebase';

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
}));



export default function Logout() {
    const { user, firebase } = React.useContext(FirebaseContext);
    const classes = useStyles();
    const router = useRouter()

    function handleLogout(){
        firebase.logout();
        router.push('/');
    }
    return (
        <Button variant="contained" color="secondary" 
            size="large" className={classes.margin} 
            onClick={handleLogout} >
          LOGOUT
        </Button>
    )
}
