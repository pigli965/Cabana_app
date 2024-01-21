import React from 'react';

   const Sidebar = () => {
     return (
       <aside className="sidebar w-64">
         <nav className="sidebar-navigation bg-black-t-50">
        <ul>
          <li>
            <a href="/date_voting/:date_votingID" className='p-3'>Date Voting</a>
          </li>
          <li>
            <a href="/participation_list/:participation_listId" className='p-3'>Participation List</a>
          </li>         
          <li>
            <a href="/finance_report/:finance_reportID" className='p-3'>Finance Report</a>
          </li>
          <li>
            <a href="/location/:locationId" className='p-3'>Location</a>
          </li>
          <li>
            <a href="/transport/:transportId" className='p-3'>Transport</a>
          </li>         
          <li>
            <a href="/catering/:cateringID" className='p-3'>Meals & Drinks</a>
          </li>
          <li>
            <a href="/activities/:activitiesId" className='p-3'>Activities</a>
          </li>
          <li>
            <a href="/entertainment/:entertainmentId" className='p-3'>DJ & Entertainment</a>
          </li>      
        </ul>
      </nav>
       </aside>
     );
   };

   export default Sidebar;