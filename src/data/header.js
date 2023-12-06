


import { SlHome } from "react-icons/sl";
import { MdOndemandVideo } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { TbClockRecord } from "react-icons/tb";


import { AiFillGithub } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

export const headerMenu=[
    {
        title:"홈",
        icon:<SlHome/>,
        src:"/"
    },
    {
        title:"내 동영상",
        icon:<MdOndemandVideo/>,
        src:"/myVideo"
    },
    {
        title:"좋아요",
        icon:<BiLike />,
        src:"/like"
    },
    {
        title:"시청기록",
        icon:<TbClockRecord/>,
        src:"/record"
    },
];
export const snsLink = [
    {
        title:"github",
        url:"https://github.com/wlsgur1302",
        icon:<AiFillGithub />
    },
    {
        title:"youtube",
        url: "/",
        icon:<AiFillYoutube />
    },

]
