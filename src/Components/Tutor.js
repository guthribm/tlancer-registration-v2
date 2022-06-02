import tutorImg from "../images/instructor.webp";

const Tutor = (props) => {
  function tutorHandler() {
    document.getElementById("tutor-signup-btn").style.display = "none";
    document.getElementById("tutor-form").style.display = "flex";
  }
  return (
    <>
      <style type="text/css">{`
             
            #tutor-form {
              position: relative;                     
              display: none;
              transition: .3s;
            }
            #tutor-signup-btn {
                letter-spacing: .8px;
                border: none;
                outline: none;
            }
            
            #tutor {
                background: #F3F4F6;
                width: 100%;
            }
            .tutor-btn {
                background: var(--main-green);
                letter-spacing: .8px;
                border: none;
            }

            
            
            `}</style>
      <section id="tutor" className="px-0 my-5">
        <div id="tutor-target" className="link-target"></div>
        <div className="container pt-md-5 pb-md-1">
          <div className="row py-5 my-5 gx-5 mx-auto">
            <div className="col-md-6 order-2 order-md-1 ps-md-3 text-center text-md-start">
              <h2 className={`fw-bold h1`}>Become a Tutor Today</h2>
              <p className="body-text fs-4 text-dark my-3">
                Join thousands of other instructors on Tlancer to teach millions
                across the globe. We provide the tools and skills to teach what
                you love.
              </p>
              <button
                onClick={tutorHandler}
                id="tutor-signup-btn"
                className="mt-4 px-4 btn btn-lg text-nowrap"
                aria-label="Toggle tutor sign-up form"
              >
                Start Teaching Today
              </button>
              <form
                id="tutor-form"
                className="flex-column w-50"
                // action="mailto:guthribm@gmail.com"
                // method="post"
                encType="text/plain"
              >
                <input
                  className="my-3 fs-4 p-1 ps-2 rounded"
                  type={"text"}
                  placeholder="First Name"
                />
                <input
                  className="my-3 fs-4 p-1 ps-2 rounded"
                  type={"text"}
                  placeholder="Surname"
                />
                <input
                  className="my-3 fs-4 p-1 ps-2 rounded"
                  type={"email"}
                  placeholder="Email Address"
                />
                <input
                  className="my-3 fs-4 p-1 ps-2 rounded"
                  type={"phone"}
                  placeholder="Phone Number"
                />
                <button
                  type="submit"
                  className="tutor-btn mt-3 px-2 btn btn-lg text-nowrap w-100"
                >
                  Submit
                </button>
                {/* <button
                  type="reset"
                  className="tutor-btn mt-2 px-3 btn btn-primary"
                >
                  Reset
                </button> */}
              </form>
            </div>
            <div className="col-md-6 text-start mb-5 mt-md-0 order-1 order-md-2">
              <img
                className="img-fluid"
                alt="man reading a bedtime story to another man"
                width="561"
                height="561"
                src={tutorImg}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tutor;
