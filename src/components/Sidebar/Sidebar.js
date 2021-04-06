import "../Sidebar/Sidebar.css";
import "../Sidebar/SidebarRow/sidebarRow";
import SidebarRow from "../Sidebar/SidebarRow/sidebarRow";

// Material-ui icons
import AddBoxIcon from "@material-ui/icons/AddBox";
import FlagIcon from "@material-ui/icons/Flag";
import GroupIcon from "@material-ui/icons/Group";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
//Redux
import { useSelector } from "react-redux";
const Sidebar = () => {
  const userN = useSelector((state) => state.isLogged);
  const user = userN.user;

  return (
    <div className="sidebar">
      <SidebarRow
        Icon=""
        title={user ? user.displayName : ""}
        src={user ? user.photoURL : ""}
      />
      <SidebarRow
        Icon={AddBoxIcon}
        title="Covid-19 information center"
        src=""
      />
      <SidebarRow Icon={FlagIcon} title="Pages" src="" />
      <SidebarRow Icon={GroupIcon} title="Firends" src="" />
      <SidebarRow Icon={ChatIcon} title="Messenger" src="" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" src="" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" src="" />
      <SidebarRow Icon={ExpandMoreIcon} title="MarketPlace" src="" />
    </div>
  );
};

export default Sidebar;
