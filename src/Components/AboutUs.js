import aboutImage from "../images/blueSuitMan.webp";
const About = () => {
  return (
    <>
      <style>{`
            
            #about p {
                font-weight: 400;
                font-family: 'Inter', san-serif;
            }
            
            @media (min-width: 768px){
              #about-img {
                width: 40%;
            }
            }
            @media (min-width: 1200px){
              #about-img {
                width: 30%;
            }
            }            
            {/* .large-txt {
                font-weight: 700;
            } */}
        `}</style>
      <section id="about" className="container-fluid px-0 p-md-5 bg-white">
        <div id="about-target" className="link-target"></div>
        <div className="container d-flex flex-column flex-md-row py-5">
          <div className="col col-md-6 m-auto px-5 order-2 order-md-1">
            <h2 className="fw-bold display-4 h1">About Us</h2>
            <p className="fs-4 fw-light pb-lg-1 pt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris,
              nullam vivamus massa orci eros, adipiscing ut velit. Quis
              scelerisque sit duis ut eget ornare. Id sed porttitor est odio
              quis in egestas. Dignissim nec id amet blandit semper.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="col col-md-6 text-center order-1 order-md-2 mb-5 mx-auto">
            <img
              className="img-fluid"
              src={aboutImage}
              alt="man in blue suit"
              width="862"
              height="777"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
