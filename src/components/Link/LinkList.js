import React from "react";
import FirebaseContext from "../../firebase/context";
import LinkItem from "./LinkItem";



function LinkList(props) {
  const { firebase, user } = React.useContext(FirebaseContext);
  const [links, setLinks] = React.useState([]);
  
  React.useEffect(() => {
     getLinks();
  }, []);

  function getLinks() {
    firebase.db
      .collection("links")
      .orderBy("created", "desc")
      .onSnapshot(handleSnapshot);
  }

  function handleSnapshot(snapshot) {
    console.log(user)
    const links = snapshot.docs.map(doc => {
      return { id: doc.id, ...doc.data() };
    });
    setLinks(links);
  }


  return (
    <div>
      {links.map((link) => (
        <LinkItem
          key={link.id}
          link={link}
        />
      ))}
    </div>
  );
}

export default LinkList;
