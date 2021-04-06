import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar.js";
import Feed from "./components/Feed/Feed.js";

// CSS files
import "./App.css";
import Widgets from "./components/Widgets/Widgets";
import Login from "./components/Login/Login";
//REDUX UseSelector - get user from redux store
import { useSelector } from "react-redux";

function App() {
  //Dispatch()
  const userN = useSelector((state) => state.isLogged);

  return (
    <div className="App">
      {!userN.user ? (
        <Login />
      ) : (
        <>
          <Header
            avatarImg={userN.user.photoURL}
            profileName={userN.user.displayName}
          />

          <div className="app-body">
            <Sidebar />
            {/* feed */}
            <Feed />
            {/* widgets (iframe)*/}
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
