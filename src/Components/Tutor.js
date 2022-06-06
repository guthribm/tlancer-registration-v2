import { useState } from "react";
import Modal from "./Modal";
import tutorImg from "../images/instructor.webp";

const Tutor = (props) => {
  const [tModalIsOpen, setTModalIsOpen] = useState(false);
  const [tutorIsLoading, setTutorIsLoading] = useState(false);

  function tutorHandler() {
    console.log("tutor button clicked");
    document.getElementById("tutor-signup-btn").style.display = "none";
    document.getElementById("tutor-form").style.display = "flex";
  }

  function disableTutorForm() {
    const inputs = document.querySelectorAll(".t-input");
    inputs.forEach((e) => {
      e.disabled = true;
    });
  }

  const tutorFormHandler = async (e) => {
    e.preventDefault();
    console.log("form handler tutor ran");
    const firstName = document.getElementById("first-name-tutor");
    const surName = document.getElementById("last-name-tutor");
    const email = document.getElementById("email-tutor");
    const phone = document.getElementById("phone-tutor");
    const requestSettings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: `${firstName.value}`,
        surname: `${surName.value}`,
        email: `${email.value}`,
        phone: `${phone.value}`,
        role: "Tutor",
      }),
    };
    try {
      setTModalIsOpen(true);
      setTutorIsLoading(true);
      const formResponse = await fetch(
        "https://formsubmit.co/ajax/guthribm@gmail.com",
        requestSettings
      );
      if (!formResponse.ok) {
        throw new Error("Error during form submission");
      } else {
        const data = await formResponse.json();
        setTutorIsLoading(false);
        console.log("***fetch ran tutor " + data);
      }
    } catch (e) {
      console.log("response error: " + e);
    }
  };
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
           
          
            .tutor-btn {
                background: var(--main-green);
                letter-spacing: .8px;
                border: none;
            }          
            
            
            `}</style>
      <Modal
        isLoading={tutorIsLoading}
        modalIsOpen={tModalIsOpen}
        setModalIsOpen={() => {
          setTModalIsOpen();
        }}
        disableForm={() => {
          disableTutorForm();
        }}
      />
      <section id="tutor" className="px-0 p-md-5 bg-white">
        <div id="tutor-target" className="link-target"></div>
        <div className="container-fluid">
          <div className="container d-flex flex-column flex-lg-row mx-auto text-center text-lg-start">
            <div className="col-lg-6 px-0 order-2 order-lg-1 ps-lg-3 my-auto">
              <h2 className={`fw-bold h1`}>Become a Tutor Today</h2>
              <p className="body-text fs-4 text-dark my-3">
                Join thousands of other instructors on Tlancer to teach millions
                across the globe. We provide the tools and skills to teach what
                you love.
              </p>
              <div className="container-fluid px-0 d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-lg-start">
                <div className="text-nowrap px-4 course fw-bold text-center py-2 ms-md-0 me-md-4 my-2text-nowrap px-4 course fw-bold text-center py-2 ms-md-0 me-md-4 my-2">
                  Group-conversations
                </div>
                <div className="text-nowrap px-4 course fw-bold text-center py-2 ms-md-0 me-md-4 my-2">
                  Tlancer-powered messenger
                </div>
              </div>
              <div className="container-fluid px-0 d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-lg-start">
                <div className="text-nowrap px-4 course fw-bold text-center py-2 ms-md-0 me-md-4 my-2">
                  Financial management tools
                </div>
                <div className="text-nowrap px-4 course fw-bold text-center py-2 ms-md-0 me-md-4 my-2">
                  Task management tools
                </div>
              </div>
              <button
                onClick={tutorHandler}
                id="tutor-signup-btn"
                className="mt-5 px-4 btn btn-lg text-nowrap"
                aria-label="Toggle tutor sign-up form"
              >
                Sign Up Today
              </button>
              <form
                id="tutor-form"
                className="flex-column w-50"
                onSubmit={tutorFormHandler}
                encType="text/plain"
                target="_blank"
              >
                <input
                  type="hidden"
                  name="_next"
                  value="https://guthribm.github.io/tlancer-registration-v2/"
                />
                <input
                  type="hidden"
                  name="_cc"
                  value="marlon.brando.calrissian@gmail.com,guthribm@gmail.com"
                />
                <input
                  type="hidden"
                  name="_subject"
                  value="New TUTOR submission! ***TEST***"
                />
                <input
                  id="first-name-tutor"
                  className="my-3 fs-4 p-1 ps-2 rounded t-input"
                  type={"text"}
                  placeholder="First Name"
                  name="first-name"
                  required
                />
                <input
                  id="last-name-tutor"
                  className="my-3 fs-4 p-1 ps-2 rounded t-input"
                  type={"text"}
                  placeholder="Surname"
                  name="sur-name"
                  required
                />
                <input
                  id="email-tutor"
                  className="my-3 fs-4 p-1 ps-2 rounded t-input"
                  type={"email"}
                  placeholder="Email Address"
                  name="e-mail"
                  required
                />
                <input
                  id="phone-tutor"
                  className="my-3 fs-4 p-1 ps-2 rounded t-input"
                  type={"phone"}
                  placeholder="Phone Number"
                  name="phone-number"
                  required
                />
                <button
                  type="submit"
                  className="tutor-btn mt-3 px-2 btn btn-lg text-nowrap w-100 t-input"
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
            <div className="col-lg-6 text-start mt-5 mt-lg-0 order-1 order-lg-2">
              <img
                className="img-fluid small-img"
                alt="woman holding folders"
                width="1099"
                height="1103"
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
