import "../Header/Header.js";
import "../Header/Header.css";

// Material-ui icons
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import StorefrontIcon from "@material-ui/icons/Storefront";
import Avatar from "@material-ui/core/Avatar";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";

const Header = ({ avatarImg, profileName }) => {
  return (
    <div className="header">
      {/* header left  */}
      <div className="header__left">
        <div className="option">
          {/* <IconButton>
            <FacebookIcon fontSize="large" />
          </IconButton> */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
            alt="facebook"
            className="facebook-image"
          />
        </div>
        <div className="header-search">
          <div className="search-icon">
            <SearchIcon />
          </div>
          <input type="text" placeholder="search on facebook"></input>
        </div>
      </div>
      {/* header middle  */}
      <div className="header__middle">
        <div className="option active">
          <IconButton>
            <HomeIcon fontSize="large" />
          </IconButton>
        </div>
        <div className="option">
          <IconButton>
            <FlagIcon fontSize="large" />
          </IconButton>
        </div>
        <div className="option">
          <IconButton>
            <SupervisedUserCircleIcon fontSize="large" />
          </IconButton>
        </div>
        <div className="option">
          <IconButton>
            <SubscriptionsIcon fontSize="large" />
          </IconButton>
        </div>
        <div className="option">
          <IconButton>
            <StorefrontIcon fontSize="large" />
          </IconButton>
        </div>
      </div>

      {/* header right  */}
      <div className="header__right">
        <div className="avatar option">
          <IconButton>
            <Avatar src={avatarImg} />
          </IconButton>
          <p className="avatar-name">{profileName}</p>
        </div>
        <div className="option">
          <IconButton>
            <AddCircleIcon fontSize="large" />
          </IconButton>
        </div>
        <div className="option">
          <IconButton>
            <NotificationsActiveIcon fontSize="large" />
          </IconButton>
        </div>
        <div className="option">
          <IconButton>
            <ExpandMoreIcon fontSize="large" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
