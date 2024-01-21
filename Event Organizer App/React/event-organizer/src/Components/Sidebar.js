import React from 'react';

   const Sidebar = () => {
     return (
       <aside className="side-bar">
         <nav>
          <ul>
            <SideBarMenu href = "/date_voting/:date_votingID" text = {"Date Voting"}/>
            <SideBarMenu href = "/participation_list/:participation_listId" text = {"Participation List"}/>
            <SideBarMenu href = "/finance_report/:finance_reportID" text = {"Finance Report"}/>
            <SideBarMenu href = "/location/:locationId" text = {"Location"}/>
            <SideBarMenu href = "/transport/:transportId" text = {"Transport"}/>
            <SideBarMenu href = "/catering/:cateringID" text = {"Meals & Drinks"}/>
            <SideBarMenu href = "/activities/:activitiesId" text = {"Activities"}/>
            <SideBarMenu href = "/entertainment/:entertainmentId" text = {"DJ & Entertainment"}/>          
          </ul>
        </nav>
       </aside>
     );
   };

function SideBarMenu(props){
  return(
    <li className='side-barItem'>
      <a href={props.href}>{props.text}</a>
    </li>    
  );
}

export default Sidebar;