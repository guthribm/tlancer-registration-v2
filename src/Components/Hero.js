import heroImg from "../images/hero-img.webp";
import vector from "../images/smallVector.svg";
const Hero = () => {
  return (
    <>
      <style>{`
        #hero-blob {
            left: 6rem;            
            top: 2rem;
        }
      `}</style>
      <section className="container-fluid py-5 mb-5 px-0">
        <div className="row container-fluid px-0 mx-auto">
          <div className="col-md-6 ps-5 my-auto text-center text-md-start">
            <h1 className="display-3 display-md-1 fw-bold lh-lg">
              Learn from certified and experienced tutors
            </h1>
            <p className="h4 my-5 pb-2">
              Learn any course at your own pace here from world class tutors
              Welcome to Tlancer where you can learn thousands of courses at
              your own pace here from the best tutors across the world
            </p>
            <a href="#student" className="btn px-5 btn-lg ">
              Get Started
            </a>
          </div>
          <div className="col-md-6 container-fluid px-0 text-end position-relative">
            <img
              id="hero-blob"
              className="img-fluid position-absolute"
              src={vector}
              alt="green blob"
              width="117"
              height="134"
            />
            <img
              className="img-fluid me-0"
              src={heroImg}
              alt="man pointing upwards"
              width="684"
              height="1027"
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
