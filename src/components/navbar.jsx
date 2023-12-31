// Navbar.js

// import React from 'react';
// import profile from '../images/profile.jpg'
// import '../components/Navbar.css'; // Import your CSS file

// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <div className="trial-info">
//         <div className="trial-text">Free Trial | 2 days left</div>
//         </div>
//         <div className="extend-trial">Extend this trial</div>
      
//       <img className="profile-image" src={profile} alt="Profile" />
//     </div>
//   );
// };

// export default Navbar;
 // Navbar.js

import React from 'react';
import profile from '../images/profile.jpg';
import '../components/Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="trial-info">
        <div className="trial-text">Free Trial | 2 days left</div>
        {/* <div className="trial-days">2 days left</div> */}
        </div>
        {/* <div className="extend-trial">Extend this trial</div> */}
        <img className="profile-image" src={profile} alt="Profile" />
      
    </div>
  );
};

export default Navbar;
