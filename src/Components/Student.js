import { useState } from "react";
import Modal from "./Modal";
import studentImg from "../images/student-img.webp";

const Student = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function studentHandler() {
    document.getElementById("student-signup-btn").style.display = "none";
    document.getElementById("student-form").style.display = "flex";
  }

  function disableStudentForm() {
    const inputs = document.querySelectorAll(".s-input");
    inputs.forEach((e) => {
      e.disabled = true;
    });
  }

  const formHandler = async (e) => {
    e.preventDefault();
    const firstName = document.getElementById("first-name-student");
    const surName = document.getElementById("last-name-student");
    const email = document.getElementById("email-student");
    const phone = document.getElementById("phone-student");
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
        role: "Student",
      }),
    };
    try {
      setModalIsOpen(true);
      setIsLoading(true);
      const formResponse = await fetch(
        "https://formsubmit.co/ajax/guthribm@gmail.com",
        requestSettings
      );
      if (!formResponse.ok) {
        throw new Error("Error during form submission");
      } else {
        const data = await formResponse.json();
        setIsLoading(false);
        console.log("***fetch ran " + data);
      }
    } catch (e) {
      console.log("response error: " + e);
    }
  };

  return (
    <>
      <style type="text/css">{`
            #student-form {
              position: relative;                     
              display: none;
            }
            #student-signup-btn {
                letter-spacing: .8px;
                border: none;
                outline: none;
            }
            `}</style>

      <Modal
        isLoading={isLoading}
        modalIsOpen={modalIsOpen}
        setModalIsOpen={() => {
          setModalIsOpen();
        }}
        disableForm={() => {
          disableStudentForm();
        }}
      />
      <section id="student" className="px-0 p-md-5 bg-white">
        <div id="student-target" className="link-target"></div>

        <div className="container-fluid">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="123"
            height="133"
            viewBox="0 0 123 133"
            fill="none"
            id="student-green-deco"
            className="d-none d-lg-block position-absolute"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.6841 26.6923C30.1218 -3.79913 71.2314 -6.52834 101.724 11.9104C127.121 27.2673 127.159 61.838 111.803 87.233C93.8942 116.85 62.0057 144.487 32.3872 126.577C-1.70247 105.963 -8.92843 60.7802 11.6841 26.6923Z"
              fill="url(#paint0_linear_2422_7587)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_2422_7587"
                x1="7.66859"
                y1="33.3329"
                x2="107.788"
                y2="93.8736"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#0ECD88" />
                <stop offset="1" stopColor="#23C68B" />
              </linearGradient>
            </defs>
          </svg>

          <div className="container d-flex flex-column-reverse flex-lg-row-reverse mx-auto text-center text-lg-start">
            <div className="col-lg-6 px-0 ps-lg-3 my-auto">
              <h2 className={`fw-bold h1`}>Register and join other students</h2>
              <p className="body-text fs-4 text-dark my-3">
                Join thousands of other students on Tlancer to teach millions
                across the globe. We provide the tools and skills to teach what
                you love.
              </p>
              <div className="container-fluid px-0 d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-lg-start mt-lg-5">
                <div className="text-nowrap px-4 course fw-bold text-center py-2 ms-md-0 me-md-4 my-2">
                  AI-powered matching
                </div>
                <div className="text-nowrap px-4 course fw-bold text-center py-2 ms-md-0 me-md-4 my-2">
                  100% free matching
                </div>
              </div>
              <div className="container-fluid px-0 d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-lg-start">
                <div className="text-nowrap px-4 course fw-bold text-center py-2 ms-md-0 me-md-4 my-2">
                  NFT Certtificatons
                </div>
                <div className="text-nowrap px-4 course fw-bold text-center py-2 ms-md-0 me-md-4 my-2">
                  Offline interactions
                </div>
              </div>
              <button
                onClick={studentHandler}
                id="student-signup-btn"
                className="mt-5 px-4 btn btn-lg text-nowrap"
                aria-label="Toggle tutor sign-up form"
              >
                Sign Up Today
              </button>
              <form
                id="student-form"
                className="flex-column w-50"
                onSubmit={formHandler}
                encType="text/plain"
                target="_blank"
              >
                {/* Honeypot */}
                <input type="text" name="_honey" style={{ display: "none" }} />
                <input
                  type="hidden"
                  name="_subject"
                  value="New Student submission! ***TEST***"
                />
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
                  id="first-name-student"
                  className="my-3 fs-4 p-1 ps-2 rounded s-input"
                  type="text"
                  placeholder="First Name"
                  name="name"
                  required
                />
                <input
                  id="last-name-student"
                  className="my-3 fs-4 p-1 ps-2 rounded s-input"
                  type="text"
                  placeholder="Surname"
                  name="surname"
                  required
                />
                <input
                  id="email-student"
                  className="my-3 fs-4 p-1 ps-2 rounded s-input"
                  type={"email"}
                  placeholder="Email Address"
                  name="email"
                  required
                />
                <input
                  id="phone-student"
                  className="my-3 fs-4 p-1 ps-2 rounded s-input"
                  type={"phone"}
                  placeholder="Phone Number"
                  name="phone"
                  required
                />

                <button
                  type="submit"
                  className="tutor-btn mt-3 px-2 btn btn-lg text-nowrap w-100 s-input"
                >
                  Submit
                </button>
                {/* <button type="reset" className="tutor-btn mt-3 px-2 btn btn-lg">
                  Reset
                </button> */}
              </form>
            </div>
            <div className="col-lg-6 text-start mt-5 mt-lg-0">
              <img
                className="img-fluid small-img"
                alt="woman holding folders holding pencil"
                width="1090"
                height="1096"
                src={studentImg}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Student;
