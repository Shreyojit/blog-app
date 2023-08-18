import React from 'react'
import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <div className="sidebarTitle">ABOUT ME</div>
            <img
          src="https://img.freepik.com/free-photo/beautiful-girl-stands-near-walll-with-leaves_8353-5377.jpg?w=740&t=st=1683661761~exp=1683662361~hmac=3f16f2fbd6121b8164cd2404129d78c15e47f3b5863953d5a9c11da0eb68839f"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>

     </div>
     <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Sports</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Cinema</li>


        </ul>
     </div>

    <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
        <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>

    </div>



    </div>
  )
}
