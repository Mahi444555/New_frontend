// import React from 'react'
// import { Link } from 'react-router-dom'

// function Footer() {
//   return (
//     <div>
//     <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top ">
//     <div className="col-md-4 d-flex align-items-center">
//       <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
//       </Link>
//       <span className="text-muted ">© 2022 GoFoody, Inc</span>
//     </div>
//   </footer>
//     </div>
//   )
// }

// export default Footer



// .main-footer {
//   color: white;
//   background-color: #dc3545;
//   padding-top: 3em;
//   position: relative;
//   bottom: 0;
//   width: 100%;
// }



import React from "react";
// import "./Footer.css";
// import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="main-footer" style={{"backgroundColor":"#bfc270","paddingTop":"3em","position":'relative','bottom':"0", "width":"100%"}}>
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h5>GoFoody</h5>
            <h1 className="list-unstyled" style={{'fontSize':'25px'}}>
              <li>342-420-6969</li>
              <li>Aurangabad, India</li>
              <li>123 Streeet South North</li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Services</h4>
            <ul className="list-unstyled">
              <li>Online delivery</li>
              <li>Events</li>
              
            </ul>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>CONTACT</h4>
            <ul className="list-unstyled">
              <li><i class="bi bi-instagram" style={{'fontSize':'25px', 'color':'black'}}></i> INSTAGRAM_handle</li>
              <li><i class="bi bi-linkedin" style={{'fontSize':'25px', 'color':'black'}}></i> LINKEDIN_handle</li>
              <li><a href="https://goo.gl/maps/xVVsJVCGbFhLggV96" target={'_blank'}> <i class="bi bi-geo-alt-fill" style={{'fontSize':'25px', 'color':'black'}}> </i> </a>GoFoody</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} | #MJ444555 | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;