const NavbarMain = () => {
  return (
    <>
      <style type="text/css">
        {`        
            

            nav {
              font-family: 'Ubuntu', sans-serif;
            }


            li {
              align-items: left;
            }

            .link-target {
              background: blue;
              position: relative;
              bottom: 7rem;
            }
                 

            {/* ######## START LOGO ########*/}
            .logo {
               color: var(--main-green);              
               text-decoration: none;
               cursor:pointer;
               outline: none;               
            }
            .logo:hover, .logo:focus {
                color: var(--main-green-hover);
            }
            {/* ######## END LOGO ########*/}




            {/* ######## START HAMBURGER MENU ########*/}
            .navbar-toggler-icon {
              background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgb(14, 205, 136)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
            }

            .navbar-toggler {                 
             color: var(--main-green);  
             border: 2px solid transparent;            
            }

            .navbar-toggler:focus {
              border-color: var(--main-green-hover); 
              outline: none;
              box-shadow: var(--main-green-hover)             
            }
            
            {/* ######## END HAMBURGER MENU ######## */}


            .nav-item {              
              margin: 0;
              margin-bottom: .75rem;
              align-items: start;        
            }
            
            {/* ######## START NAVLINKS ########*/}
            .nav-link {
                font-family: 'Ubuntu', sans-serif; 
                font-weight: 400;
                color: #000;               
                transition: .3s ease-out;
                cursor: pointer;
                
            }
            .nav-link-hover:hover, .nav-link:focus {
              color: var(--main-green-hover);  
            }          
            .nav-link-hover::after {
              content: "";
              width: 0px;
              height: 3px;
              display: block;
              background: var(--main-green-hover); 
              transition: .3s ease-out;             
            }    
            .nav-link-hover:hover::after {
              width: 100%;
            }
            {/* ######## END NAVLINKS ########*/}



            .navbar-custom {
              border-bottom: 3px solid var(--main-green);
              box-shadow: 0px 0px 30px rgba(0,0,0,0.3);  
              background: rgba(255,255,255,1);                 
              z-index: 100!important;
            }   
                     
            
            {/* ######## START MEDIA QUERIES ########*/}
            
           
            @media (min-width: 1024px) {
              .nav-link {
                font-size: 1.5rem;
              }  
            }
          
            @media (max-width: 768px) {                            
              .mobile {
                width: 100%!important;
              }
              .navbar-collapse {
                padding: 1rem;
              }             
              
            }          
           
            {/* ######## END MEDIA QUERIES ########*/}


            {/* _______ HOVER EFFECTS TEST SECTION ______ */}


            {/* __ START HOVER ONE __ */}
            .style-btn-one {
              position: relative;	
              padding-left:.75rem!important;
              padding-right:.75rem!important;
              color: black;
              transition: all 300ms cubic-bezier(0.77, 0, 0.175, 1);	
              cursor: pointer;
              user-select: none;
            }

            .style-btn-one:before, .style-btn-one:after {
              content: '';
              position: absolute;	
              transition: inherit;
              z-index: -1;
            }

            .style-btn-one:hover {
              color: white;
              transition-delay: .3s;
              transform: translateY(-3px);
              box-shadow: 0px 3px 8px rgba(0,0,0,0.3);
              text-shadow: 0px 0px 4px rgba(0,0,0,0.6);
            }

            .style-btn-one:hover:before {
              transition-delay: 0s;
            }

            .style-btn-one:hover:after {
              background: var(--main-green);
              transition-delay: .3s;
            }

            .style-btn-one:before {
              top: 0;
              left: 50%;
              height: 100%;
              width: 0;
              border: 1px solid var(--main-green);
              border-left: 0;
              border-right: 0;
            }

            .style-btn-one:after {
              bottom: 0;
              left: 0;
              height: 0;
              width: 100%;
              background: white;
            }

            .style-btn-one:hover:before {
              left: 0;
	            width: 100%;    
            }

            .style-btn-one:hover:after {
              top: 0;
              height: 100%;
            }
            


            {/* __ END HOVER ONE __ */}

            
            {/* __ START HOVER TWO __ */}
            
            {/* __ END HOVER TWO __ */}
            
            
            .student-hover:hover, .student-hover:focus {
              color: var(--main-green);
              transition: .5s;
              transform: perspective(25rem);
            }          
            .student-hover::after {
              content: "";
              width: 0px;
              height: 3px;
              display: block;
              transform: translateY(2rem) translateX(-3rem); 
              transition: .2s ease-out;
              background: transparent;                         
            }    
            .student-hover:hover::after {
              width: 100%;              
              height: 3px;              
              transform: rotate(180deg);              
              background: var(--main-green-hover)
            }

            `}
      </style>
      <div className="nav navbar navbar-custom fixed-top navbar-expand-md">
        <div className="container-fluid gx-0 align-items-lg-end px-2 py-1 px-md-4 pt-md-3 pb-md-2">
          <a href="/" className="navbar-brand d-flex me-0 logo fw-bold fs-1">
            Tlancer
          </a>

          <button
            id="hamburger-btn"
            aria-controls="responsive-navbar-nav"
            className="navbar-toggler collapsed p-1 my-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#responsive-navbar-nav"
            data-bs-auto-close="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="navbar-collapse collapse w-100"
            id="responsive-navbar-nav"
          >
            <ul className="nav navbar-nav w-100 justify-content-end">
              <li className="nav-item mb-md-0">
                <a
                  className="px-1 nav-link style-btn-one mx-0 mx-lg-1 mx-xl-2"
                  href="#home-target"
                >
                  Home
                </a>
              </li>
              <li className="nav-item mb-md-0">
                <a
                  className="px-1 nav-link nav-link-hover mx-0 mx-lg-1 mx-xl-2"
                  href="#student-target"
                >
                  Student
                </a>
              </li>

              <li className="nav-item mb-md-0">
                <a
                  className="px-1 nav-link nav-link-hover mx-0 mx-lg-1 mx-xl-2"
                  href="#tutor-target"
                >
                  Tutor
                </a>
              </li>

              <li className="nav-item mb-md-0">
                <a
                  className="px-1 nav-link nav-link-hover mx-0 mx-lg-1 mx-xl-2 text-nowrap"
                  href="#about-target"
                >
                  About Us
                </a>
              </li>

              <li className="nav-item mb-md-0">
                <a
                  className="px-1 nav-link nav-link-hover mx-0 mx-lg-1 mx-xl-2 text-nowrap"
                  href="#mission-target"
                >
                  Our Mission
                </a>
              </li>

              <li className="nav-item mb-md-0">
                <a
                  className="px-1 nav-link nav-link-hover mx-0 mx-lg-1 mx-xl-2 text-nowrap"
                  href="#testimonials-target"
                >
                  Testimonials
                </a>
              </li>

              <li className="nav-item mb-md-0">
                <a
                  className="px-1 nav-link nav-link-hover mx-0 mx-lg-1 mx-xl-2 fs-xl-1 text-nowrap"
                  href="#contact-target"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarMain;
