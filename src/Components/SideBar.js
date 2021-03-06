import "../App.css";

import { SideBarContent } from "./SideBarContent";

function SideBar() {
  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        {SideBarContent.map((value, key) => {
          return (
            <li
              key={key}
              className="row"
              onClick={() => {
                window.location.pathname = value.link;
              }}
            >
              <div id="icon">{value.icon}</div>

              <div id="title">{value.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SideBar;
