import React,{useState} from "react";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const Post = () => {

    const [comment, setComment] = useState("");


    const postComment = (e) => {
        e.preventDefault();
  
            console.log(comment)
        // db.collection("posts").doc(postId).collection("comments").add({
        //   text: comment,
        //   username: user.displayName,
        // });
        setComment("");
      };

  return (
    <div className="post">
      <Card>
        <div className="post__header">
          <Avatar
            className="post__avatar"
            alt="ZakirBangash"
            src="/static/images/avatar/1.jpg"
          />
          <h3>Zakir Bangash</h3>
        </div>

        <img className="post__img"
          src="https://scontent.fisb3-1.fna.fbcdn.net/v/t1.6435-9/168492177_3863249487098006_2679843276263133641_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=e3f864&_nc_eui2=AeFnVRvREllR6O5PK0RAE4E6njxKU4ArbCeePEpTgCtsJxHVOoLDVIax3oNTE1P3zL39uLo0LS7-Fsc7X-NuSkMk&_nc_ohc=HTup7VYIWhIAX9H7Gqn&_nc_ht=scontent.fisb3-1.fna&oh=4cd6f85704f07110c05fbc2fef966864&oe=608E03AD"
          alt="post"
        />
          <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>

        </CardActions>
        <h4 className="post__text">
          ZakirBangash <span className="post__caption">During annual day at Hist College</span>
        </h4>
      
        
        <CardContent>
        <small className="post__comments">view all comments 118</small>

        <div className="post__comments">
            <p>
              <b>ZakirBangash</b> Congrats to all Hist staf
            </p>
        </div>
        <div className="post__comments">
            <p>
              <b>ZakirBangash</b> Congrats to all Hist staf
            </p>
        </div>
        <div className="post__comments">
            <p>
              <b>ZakirBangash</b> Congrats to all Hist staf
            </p>
        </div>
        </CardContent>

        <form className="post__commentBox">
            <input
              className="post__input"
              type="text"
              placeholder="Add a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button
              disabled={!comment}
              className="post__button"
              type="submit"
              onClick={postComment}
            >
              Post
            </button>
          </form>
      </Card>
    </div>
  );
};

export default Post;
