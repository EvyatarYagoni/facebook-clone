import { Avatar } from "@material-ui/core";
import "../SidebarRow/SidebarRow.css";

const SidebarRow = ({ title, Icon, src }) => {
  return (
    <div className="sidebarrow">
      <div className="icon-or-image">
        {src && <Avatar src={src} />}
        {Icon && <Icon />}
      </div>
      <p>{title}</p>
    </div>
  );
};

export default SidebarRow;
