import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import TodayOutlinedIcon from "@material-ui/icons/TodayOutlined";
import BorderColorOutlinedIcon from "@material-ui/icons/BorderColorOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import TrendingUpOutlinedIcon from "@material-ui/icons/TrendingUpOutlined";
import BugReportOutlinedIcon from "@material-ui/icons/BugReportOutlined";

export const SideBarContent = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/home",
  },
  {
    title: "Calendar",
    icon: <TodayOutlinedIcon />,
    link: "/calendar",
  },
  {
    title: "Next",
    icon: <BorderColorOutlinedIcon />,
    link: "/next",
  },
  {
    title: "Email",
    icon: <EmailOutlinedIcon />,
    link: "/email",
  },
  {
    title: "Popular",
    icon: <FavoriteBorderOutlinedIcon />,
    link: "/popular",
  },
  {
    title: "Trending",
    icon: <TrendingUpOutlinedIcon />,
    link: "/trending",
  },
  {
    title: "Reports",
    icon: <BugReportOutlinedIcon />,
    link: "/bug",
  },
];
