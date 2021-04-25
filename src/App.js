import "./App.css";
import PrimarySearchAppBar from "./components/AppBar";
import Post from "./Post";
import InstagramEmbed from "react-instagram-embed";

function App() {
  return (
    <div className="app">
      <PrimarySearchAppBar />
      <div className="app__post">
        {/* <div className="post__left">
          <Post />
      
        </div> */}
        <div className="post__right">

        <InstagramEmbed
  clientAccessToken='<appId>|<clientToken>'
  url='https://instagr.am/p/Ytlfl/'
  maxWidth={375}
  hideCaption={false}
  containerTagName='div'
  injectScript
  protocol=''
  onLoading={() => {}}
  onSuccess={() => {}}
  onAfterRender={() => {}}
  onFailure={() => {}}
/>
        </div>
      </div>
      {/* <Header /> */}
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
