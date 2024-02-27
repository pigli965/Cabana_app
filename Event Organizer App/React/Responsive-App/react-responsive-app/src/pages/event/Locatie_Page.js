import React from 'react'
import './Locatie_Page.css';

export const LocatiePage = () => {
  return (
    <div class="wrapper">
      <div class="input">
      <form>
        <label for="fname">First name:</label><br></br>
        <input type="text" id="fname" name="fname" value="John" readonly/><br></br>
        <label for="lname">Last name:</label><br></br>
        <input type="text" id="lname" name="lname" value="Doe"/>
      </form>
      </div>
      <div class="output"> </div>
    </div>
  )
}
