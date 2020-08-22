import React, {useState} from "react";
import {useRouter} from 'next/router';
import FirebaseContext from "../../firebase/context";

import Divider from '@material-ui/core/Divider';
import Button from "@material-ui/core/Button";
import InputBase from '@material-ui/core/InputBase';
import TextField from "@material-ui/core/TextField"

const initialState= {
  description: "",
  title: ""
};

function CreateLink(props) {
  const { firebase, user } = React.useContext(FirebaseContext);
  const [title, setTitle] = useState(initialState.title)
  const [description, setDescription] = useState(initialState.description)
  const router = useRouter()

  function handleCreateLink() {
    if(!user){
      router.push('/signin')
    } else {
      event.preventDefault()
      const newLink = {
        title,
        description,
        postedBy: {
          id: user.uid,
          name: user.displayName
        },
        voteCount: 0,
        votes: [],
        created: Date.now()
      };
      firebase.db.collection("links").add(newLink);
      setTitle("");
      setDescription("");
    }
  }


  

  return (
    <form onSubmit={handleCreateLink} >
    <Button
      variant="contained"
      color="primary"
      type="submit"
      style={{ marginTop: "20px", width: "100px",padding:"1px 1px 1px 1px", }}
      >
      <a>PUBLISH</a>
    </Button>
    <br></br>
    <Divider></Divider>
    <br></br>
    <InputBase
    value={title}
    name="title"
    autoComplete="off"
    type="text"
    onChange={event => setTitle(event.target.value)}
    placeholder="Title"
    fullWidth
    inputProps={{ style: {fontSize: 50},'aria-label': 'naked' }}
    />
    <br></br>
    <br></br>
    <br></br>
    <TextField
        autoComplete="off"
        type="text"
        onChange={event => setDescription(event.target.value)}
        value={description}
        name="description"
        height="60"
        id="filled-textarea"
        placeholder="Write Your Story here....."
        multiline
        fullWidth
        inputProps={{style: {fontSize: 30,height:10000,lineHeight:1}}}
    />
    
  </form>
  );
}

export default CreateLink;
