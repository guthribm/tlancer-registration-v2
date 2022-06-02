import studentImg from "../images/student-img.webp";

const Student = (props) => {
  function studentHandler() {
    document.getElementById("student-signup-btn").style.display = "none";
    document.getElementById("student-form").style.display = "flex";
  }
  return (
    <>
      <style type="text/css">{`
            

            ::placeholder {
              color: black;
            }
            
            #student-form {
              position: relative;                     
              display: none;
            }
            
            .tutor-text {
                line-height: 2.0 !important;
                font-weight: 500;
            }
            #student {
                background: #F3F4F6;
                width: 100%;
            }
            #student-signup-btn {
                letter-spacing: .8px;
                border: none;
                outline: none;
            }
            #submit {
              width: 100%!important;
            }
                       
            .tutor-btn {
                background: var(--main-green);
                width: 100%!important;
            }
            form input {
              border: 2px solid var(--main-green);              
            }
           
            `}</style>

      <section id="student" className="px-0 my-5">
        <div id="student-target" className="link-target"></div>
        <div className="container py-md-5">
          <div className="row my-5 py-5 mx-auto gx-5">
            <div className="col-md-6 text-end mb-5 mt-md-0">
              <img
                className="img-fluid"
                width="681"
                height="454"
                alt="student on computer"
                src={studentImg}
              />
            </div>

            <div className="col text-center text-md-start ps-md-3">
              <h2 className={`fw-bold h1`}>Register and join other students</h2>
              <p className="body-text fs-4 text-dark my-3">
                Join thousands of other students on Tlancer to teach millions
                across the globe. We provide the tools and skills to teach what
                you love.
              </p>
              <button
                onClick={studentHandler}
                id="student-signup-btn"
                className="btn btn-lg px-5 mt-4"
                aria-label="Toggle student sign-up form"
              >
                Sign Up Today
              </button>

              <form
                ref={props.studentFormRef}
                id="student-form"
                className={`flex-column w-50 slide-title ${
                  props.studentFormRefIsVisible ? "animateTitle" : ""
                }`}
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
                  className="tutor-btn mt-3 px-2 btn btn-lg text-nowrap"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Student;
