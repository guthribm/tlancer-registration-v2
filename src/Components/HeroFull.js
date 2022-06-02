import HeroFullImg from "../images/HeroFullImage.webp";
const HeroFull = (props) => {
  return (
    <>
      <style>
        {`

        
        #home {
          position: absolute;
          top: -50rem;
        } 

        #home-container {
         padding-top: 5rem;
       }  

       .hero-text {
           font-size: 2.25rem;                     
       }
       

       {/* Mobile and SMALLER Breakpoint */}
       @media (max-width: 576px) {
        .hero-text {
           font-size: 1.75rem;
           {/* text-align: left;
           padding-left: 1rem; */}
       } 
       #home-container {
         padding-top: 8rem;
       }  
       }
       
        
        {/* Tablet to Desktop Breakpoint */}
       @media (min-width: 768px) {
        #home-container {
            margin-top: 5rem;
            padding-top: 10rem;
            padding-bottom: 5rem;            
        }
        .hero-text {
           font-size: 3.5rem;                      
       }
       }

       {/* Desktop and GREATER Breakpoint */}
       @media (min-width: 1200px) {
        .hero-text {
           font-size: 4.6rem;                      
       }
       }
       
        `}
      </style>
      <section
        className="px-0 bg-black py-5 bg-opacity-75"
        style={{
          background: `url(${HeroFullImg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundBlendMode: "hue",
          backgroundSize: "cover",
        }}
      >
        <div id="home-target" className="link-target"></div>
        <div id="home-container" className="container-fluid">
          <div className={`row`}>
            <div className={`col text-center text-white`}>
              <h1
                ref={props.heroRef}
                id="hero-text"
                className={`hero-text lh-md-lg px-md-5 slide-title ${
                  props.refIsVisible ? "animateTitle" : ""
                }`}
              >
                Welcome to Tlancer where you can learn thousands of courses at
                your own pace here from the best tutors across the world
              </h1>
            </div>
            <div className="col-md-12 text-center my-5">
              <a href="#student" className="btn px-5 btn-lg ">
                Get Started
              </a>
            </div>
          </div>
          <br />
        </div>
      </section>
    </>
  );
};

export default HeroFull;
