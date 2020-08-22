import React from "react";
import Link from 'next/link'
import {useRouter} from 'next/router'
import distanceInWordsToNow from "date-fns/distance_in_words_to_now";
import FirebaseContext from "../../firebase/context";

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function LinkItem({ link }) {
  const { firebase, user } = React.useContext(FirebaseContext);
  const router = useRouter();
  
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  
  React.useEffect(() => {
    handleVote();
 }, []);

  

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  

  function handleVote() {
    if (!user) {
      router.push("/signin");
    } else {
      const voteRef = firebase.db.collection("links").doc(link.id);
      voteRef.get().then(doc => {
        if (doc.exists) {
          const previousVotes = doc.data().votes;
          const liked = previousVotes.votedBy.hasOwnProperty(user.uid)
          console.log(liked)
          if(liked){
            for (var i = 0; i < previousVotes.length; i++) {
              var obj = previousVotes[i];
          
              if (user.uid.indexOf(obj.id) !== -1) {
                  previousVotes.splice(i, 1);
                  i--;
              }
            }
            const updatedVotes = [...previousVotes];
            const voteCount = updatedVotes.length;
            voteRef.update({ votes: updatedVotes, voteCount });
          }
          else{
            const vote = { votedBy: { id: user.uid, name: user.displayName } };
            const updatedVotes = [...previousVotes, vote];
            const voteCount = updatedVotes.length;
            voteRef.update({ votes: updatedVotes, voteCount });

            
          }
        }
      });
    }
  }

  function handleDeleteLink() {
    const linkRef = firebase.db.collection("links").doc(link.id);
    linkRef
      .delete()
      .then(() => {
        console.log(`Document with ID ${link.id} deleted`);
      })
      .catch(err => {
        console.error("Error deleting document:", err);
      });
  }

  const postedByAuthUser = user && user.uid === link.postedBy.id;

  return (
    
      <Card className={classes.root}>
        <CardHeader
        avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
                
            </Avatar>
        }
        action={postedByAuthUser && (
            <IconButton aria-label="delete" onClick={handleDeleteLink}>
            <DeleteIcon/>
            </IconButton>
        )}
        title={link.postedBy.name}
        subheader={distanceInWordsToNow(link.created)}
        />

        <CardContent>
        <Typography variant="h5" color="textSecondary" component="h2">
            {link.title}
        </Typography>
        </CardContent>
        <CardActions disableSpacing>
        {/* {voted ?  */}
          {/* (<Typography variant="body2" color="textSecondary" component="p">
            Liked
          </Typography>) : ( */}
            <IconButton aria-label="add to favorites" onClick={handleVote} >
              <FavoriteIcon />
            </IconButton>
          {/* )} */}
          
        <Typography variant="body2" color="textSecondary" component="p">
        {link.votes.length} likes
        </Typography>
        <IconButton
            className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
        >
            <ExpandMoreIcon />
        </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
            <Typography paragraph>
                {link.description}
            </Typography>
        </CardContent>
        </Collapse>
      </Card>
   
    

  );
}

export default LinkItem;
