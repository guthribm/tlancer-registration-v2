const Testimonies = () => {
  return (
    <>
      <style>{`
    .red-quote {
        font-size: 2rem;
        color: #B00000;
    }

    #card1 {
      box-shadow: 0px 0px 50px 15px rgba(253, 78, 93,0.4);
      transition: .4s all ease-in-out;
    }
    #card1:hover {
      transform: scale(1.08);
      box-shadow: 0px 0px 2px 2px rgba(253, 78, 93,1);
    }

    #card2 {
      box-shadow: 0px 0px 50px 15px rgba(14, 205, 136, 0.4);
      transition: .4s all ease-in-out;
    }
    #card2:hover {
      transform: scale(1.08);
      box-shadow: 0px 0px 2px 2px rgba(14, 205, 136, 1);
    }

    #card3 {
      box-shadow: 0px 0px 50px 15px rgba(49, 126, 246, 0.4);
      transition: .4s all ease-in-out;
    }
    #card3:hover {
      transform: scale(1.08);
      box-shadow: 0px 0px 2px 2px rgba(49, 126, 246, 1);
    }

    #card4 {
      box-shadow: 0px 0px 50px 15px rgba(255, 215, 0, 0.4);
      transition: .4s all ease-in-out;
    }
    #card4:hover {
      transform: scale(1.08);
      box-shadow: 0px 0px 2px 2px rgba(255, 215, 0, 1);
    }


    
    .blue-quote {
        position: relative;
        top: 1rem;
        right: 1.75rem;
        color: #2EC5CE;
        opacity: .5;
    }
   
    .card-title.h5 {
      width: 60%;
    }

    @media (min-width: 768px) {
      .red-quote {
        font-size: 3rem;
      }
    }

    @media (min-width: 1024px) {
      .red-quote {
        font-size: 4rem;
    }

    
    
    }

    `}</style>
      <section id="testimonials" className="container-fluid bg-white p-md-5">
        <div id="testimonials-target" className="link-target"></div>
        <div className="container p-md-5 bg-white">
          {/* ______ Heading Row */}
          <div className="row mb-5">
            <div className="col text-center col-md-10 mx-auto mb-1 d-flex align-items-center justify-content-evenly">
              <i className="fa-solid fa-quote-left red-quote"></i>
              <h2 className="h1 my-auto fw-bold">
                Testimonies from Our Customers
              </h2>
              <i className="fa-solid fa-quote-right red-quote"></i>
            </div>
          </div>
          {/* ______ Top Quote Row*/}
          <div className="row justify-content-evenly">
            {/* ______ Card 1*/}
            <div className="col col-md-4 my-5">
              <div id="card1" className="border-0 py-5 ps-5 pe-4 card ">
                <i className="fa-solid fa-quote-left blue-quote mt-5"></i>
                <div className="card-text">
                  <p className="lh-lg text-black fw-bold text-opacity-75 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit amet luctus venenatis, lectus magna
                    fringilla urna, porttitor rhoncus dolor purus non enim
                    praesent elem
                  </p>
                </div>
                <div className="fw-bold card-title h5">Huey</div>
                <div className="text-secondary card-subtitle h6 mb-5">
                  Back-end developer at Fintech
                </div>
              </div>
            </div>
            {/* ______ Card 2*/}
            <div className="col col-lg-5 my-5">
              <div
                id="card2"
                className="border-0 pt-5 pb-4 ps-5 pe-4 my-3 card "
              >
                <i className="fa-solid fa-quote-left blue-quote"></i>
                <div className="card-text">
                  <p className="lh-lg text-black fw-bold text-opacity-75 mb-4">
                    LLorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit amet luctus venenatis, lectus magna
                    fringilla urna, porttitor rhoncus dolor purus non enim
                    praesent elem
                  </p>
                </div>
                <div className="fw-bold card-title h5">Josh</div>
                <div className="text-secondary card-subtitle h6">
                  UI Designer
                </div>
              </div>
            </div>
          </div>

          {/* ______ Bottom Quote Row*/}
          <div className="row justify-content-evenly">
            {/* ______ Card 3*/}
            <div className="col col-lg-5 my-5 order-2 order-md-1">
              <div
                id="card3"
                className="border-0 pt-5 pb-4 ps-5 pe-4 my-3 card "
              >
                <i className="fa-solid fa-quote-left blue-quote"></i>
                <div className="card-text">
                  <p className="lh-lg text-black fw-bold text-opacity-75 mb-4">
                    LLorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit amet luctus venenatis, lectus magna
                    fringilla urna, porttitor rhoncus dolor purus non enim
                    praesent elem
                  </p>
                </div>
                <div className="fw-bold card-title h5">Josh</div>
                <div className="text-secondary card-subtitle h6">
                  UI Designer
                </div>
              </div>
            </div>
            {/* ______ Card 4*/}
            <div className="col col-md-4 order-1 order-md-2 my-5">
              <div id="card4" className="border-0 py-5 ps-5 pe-4 card ">
                <i className="fa-solid fa-quote-left blue-quote mt-5"></i>
                <div className="card-text">
                  <p className="lh-lg text-black fw-bold text-opacity-75 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit amet luctus venenatis, lectus magna
                    fringilla urna, porttitor rhoncus dolor purus non enim
                    praesent elem
                  </p>
                </div>
                <div className="fw-bold card-title h5">Huey</div>
                <div className="text-secondary card-subtitle h6 mb-5">
                  Back-end developer at Fintech
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonies;
