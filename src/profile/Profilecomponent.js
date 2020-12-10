 import React from 'react';
 import PropTypes from "prop-types";

function  Component (props){
const {fullName, bio, profession, handleName}= props;
const style1 ={fontStyle:'bold' , fontFamily: 'Helvetica neue, roboto'}
const style2 = {fontFamily :'Arial, sans-serif' };
const style3 ={backgroundColor: '#343a40', color:'#17a2b8', width : '150px'}
return (
    <div >
  
      <h1 style={style1}>FullName:{fullName}</h1>
      <p style={style2}>{bio}</p>
      <ul>
        <li>Know how to integrate a model. </li>
        <li>Mastering HTML, CSS, JavaScript and Node.JS languages. </li>
        <li>Know how to develop an application with the React. </li>
        <li>Mastering jQuery, Bootstrap, React and Git.</li>
      </ul>
      <img src="./dev.png" alt="bio" style={{width:300 , height:200}}></img>
      <h1 style={style1}>Profession : {profession}</h1>
      {props.children}
      <button variant="primary" size="lg" style={style3} onClick={() => handleName(fullName)}>Click Here</button>

    </div>
);

}
Component.defaultProps = {
    fullName: "FullName",
    bio:"This is the bio default value",
    profession:"Profession" 
  };
Component.propTypes = {
    fullName: PropTypes.string.isRequired,
    bio: PropTypes.string,
    handleName: PropTypes.func.isRequired
  };
export default Component;