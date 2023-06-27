import React from 'react'

const Form = () => {
  return (
  
      <div className="container">
        <div className="register">
          <h1>E-Commerce Registration Form</h1>

          <form id="register" >
            <label htmlFor="fname">First Name : </label>
            <br />
            <input type="text" name="name" placeholder="Enter your first name" /><br />
            <br />
            <label htmlFor="lname">Last Name :</label>
            <br /><input type="text" name="name" placeholder="Enter your last name" /><br />
            <br />
            <label htmlFor="date">Birth Date :</label>
            <br /><input type="date" name="myDate" /><br />
            <br />
            <label htmlFor="gender">Gender : </label><br />
            &nbsp;&nbsp;&nbsp;
            <input type="radio" name="myGender" className="male" />Male
            &nbsp;&nbsp;&nbsp;
            <input type="radio" name="myGender" className="female" />Female
            &nbsp;&nbsp;&nbsp;
            <input type="radio" name="myGender" className="other" />Other<br />
            <br />
            <label htmlFor="email">Email :</label>
            <br /><input type="email" name="myEmail" placeholder="Enter your valid Email" /><br />
            <br />
            <label htmlFor="number">Phone Number : </label>
            <br /> <input type="text" name="myNumber" placeholder="Enter a valid phone number" /><br />
            <br />
            <label htmlFor="address">Address :</label>
            <br /><input type="text" name="myAddress" placeholder="Enter a valid address" /><br />
            <br />
            <label htmlFor="qualification">Qualification : </label>
            <br /><textarea name="myText" cols="30" row="10"></textarea><br/>
              <br/>
                <input id="submit" type="submit" value="Submit Now"/>
                </form>
                
              </div>
            </div>
          )
}

          export default Form;
