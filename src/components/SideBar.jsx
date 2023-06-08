import React from "react";

const SideBar = () => {
  const [open, setOpen] = React.useState(true);
  const board = [
    { icon: "fa-duotone fa-chart-line", name: "Dashboard", link: "/#" },
    { icon: "fa-solid fa-inbox", name: "Inbox", link: "/#" },
  ];
  const Acc = [
    { icon: "fa-regular fa-user", name: "Accounts", link: "/#" },
    { icon: "fa-solid fa-calendar-days", name: "Schedule", link: "/#" },
    { icon: "fa-regular fa-search", name: "Search", link: "/#" },
    {
      icon: "fa-solid fa-chart-simple",
      name: "Analytics",
      link: "/#",
    },
  ];
  const file = [
    { icon: "fa-regular fa-file", name: "Files", link: "/#" },
    { icon: "fa-solid fa-gear", name: "Setting", link: "/#" },
  ];
  return (
    <aside
      className={`bg-slate-900 duration-500 h-full text-white  relative pt-[30px] px-[20px]  ${
        open ? "w-[70px]" : "w-[250px] "
      }`}
    >
      <button
        onClick={() => setOpen((e) => !e)}
        className={`absolute bg-white right-[-11px] ${
          open ? "rotate-rotate1" : "rotate-rotate0"
        } duration-300 top-[33px] w-[25px] h-[25px] text-slate-900 rounded-full border-slate-900 border-2 border-solid flex items-center justify-center`}
      >
        <i className={`fa-solid fa-chevron-${open ? "right" : "left"}`}></i>
      </button>
      <nav
        className={` cursor-pointer   overflow-hidden mb-[30px]  duration-500 h-[30px] ${
          open ? "w-[30px] " : "w-[205px]  "
        } 
         rounded h-[30px]  
        `}
      >
        <i
          className={`fa-solid fa-robot bg-[blue] text-fontSize duration-300 rounded  w-[30px] h-[30px] inline-flex items-center justify-center  font-FontAwesome ${
            open ? "rotate-rotate1" : " rotate-rotate0  "
          }`}
        ></i>
        <span
          className={`${open ? "invisible" : "inline-block  "}
          font-bold text-fontSize
           pl-[10px]  h-[30px] `}
        >
          Designer
        </span>
      </nav>
      <ul className="mb-[50px] ">
        {board.map((item, index) => {
          return (
            <li
              key={index}
              className={` leading-5  my-[10px]   overflow-hidden duration-500    ${
                open ? "w-[30px]  " : "w-[205px]  "
              }  cursor-pointer   rounded    hover:bg-[#275b74]  h-[30px]  px-[4px] 
                  `}
            >
              <i
                className={`${item.icon}   w-[20px] h-[30px] inline-flex items-center justify-center    font-FontAwesome`}
              ></i>
              <span className={` pl-[10px] ${open ? "invisible" : "inline"} `}>
                {item.name}
              </span>
            </li>
          );
        })}
      </ul>
      <ul className="mb-[50px] ">
        {Acc.map((item, index) => {
          return (
            <li
              key={index}
              className={` leading-5   overflow-hidden   my-[10px] cursor-pointer duration-500     ${
                open ? "w-[30px]  " : "w-[205px]   "
              }  rounded    hover:bg-[#275b74] h-[30px] px-[4px]  `}
            >
              <i
                className={`${item.icon}    w-[20px] h-[30px] inline-flex items-center justify-center  font-FontAwesome`}
              ></i>
              <span className={` pl-[10px] ${open ? "invisible" : "inline"} `}>
                {item.name}
              </span>
            </li>
          );
        })}
      </ul>
      <ul className="mb-[50px] ">
        {file.map((item, index) => {
          return (
            <li
              key={index}
              className={`  leading-5  overflow-hidden my-[10px] cursor-pointer duration-500  ${
                open ? "w-[30px]  " : "w-[205px]  "
              }  rounded    hover:bg-[#275b74]  h-[30px] px-[4px]  `}
            >
              <i
                className={`${item.icon}       w-[20px] h-[30px] inline-flex items-center justify-center font-FontAwesome`}
              ></i>
              <span className={` pl-[10px] ${open ? "invisible" : "inline"} `}>
                {item.name}
              </span>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default SideBar;
