import React, { useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import styled from "styled-components";
import { useGlobalContext } from "../Context";
import { toast } from 'react-toastify';
import axios from "axios"
import { motion } from "framer-motion";
import { fadeIn } from "../varients";

function Contact() {

  const { isdarkMode } = useGlobalContext();

// Initialize form state
const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: "",
});

// Handle form input changes
const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

// Handle form submission
const handleSubmit = async (e) => {
  e.preventDefault();
  // Check for empty fields
  if (
    formData.name === "" ||
    formData.email === "" ||
    formData.message === ""
  ) {
    return toast.error("Please fill all the Details.", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: isdarkMode ? "dark" : "light",
    });
    
  }

   // Prepare form data
  const data = {
    name: formData.name,
    email: formData.email,
    message: formData.message,
  };

  // Send form data to the backend
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/contact`,
      data
    );

    // console.log(res);

    // Show success notification
    if (res.data.success === true) {
      toast.success("Thank You! Your Message has been sent sucessfully!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: isdarkMode ? "dark" : "light",
      });
    }

     // Clear form fields
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  } catch (error) {
    // Handle error here (display an error toast, etc.)
    toast.error("There is a error in form submission", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: isdarkMode ? "dark" : "light",
    });
  }
};

  return (
    <Wrapper>
      <section className="card-inner contacts" id="contacts-card">
        <div className="card-wrap">
          <div className="content contacts">
            <motion.div
             variants={fadeIn("up", 0.2, 0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true }} 
             className="title">
              <span className="first-word">Get </span>
              in Touch
            </motion.div>
            <div className="row">
              <div className="col col-12 border-line-v ">
               
                    <div className="map">
                      <div style={{ width: "100%" }}>
                        <iframe
                          title="map"
                          width="100%"
                          height="300"
                          frameBorder="0"
                          scrolling="no"
                          marginHeight="0"
                          marginWidth="0"
                          loading="lazy"
                          // onLoad={()=>setLoading(false)}
                          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=28.748839,%2077.191691+(kamal%20pur,%20Kamal%20vihar%20burari)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        >
                          <a href="https://www.gps.ie/farm-gps/">
                            GPS Navigation
                          </a>
                        </iframe>
                      </div>
                    </div>
                  
              </div>
            </div>
            <div className="content contacts">
              <div className="title">
                <span className="first-word">Contact </span>
                Form
              </div>
              <div className="row">
                <div className="col col-12 border-line-v">
                  <div className="contact_form">
                    <form id="cform" method="post" noValidate="novalidate">
                      <div className="row">
                        <div className="col col-6">
                          <div className="group-val">
                            <input
                              type="text"
                              name="name"
                              placeholder="Full Name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                            ></input>
                          </div>
                        </div>
                        <div className="col col-6">
                          <div className="group-val">
                            <input
                              type="text"
                              name="email"
                              placeholder="Email Address"
                              value={formData.email}
                              onChange={handleChange}
                              required
                            ></input>
                          </div>
                        </div>
                        <div className="col col-12">
                          <div className="group-val">
                            <textarea
                              name="message"
                              placeholder="Your Message"
                              value={formData.message}
                              onChange={handleChange}
                              required
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div className="align-left">
                        <button className="button" onClick={handleSubmit}>
                          <span className="text">Send Message</span>
                          <span className="icon">
                            <FaTelegramPlane />
                          </span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}

export default Contact;

const Wrapper = styled.section`

  .content {
    position: relative;
    margin: 0 0 40px 0;

    &:last-child {
      margin-bottom: 30px;
    }

    input,
    textarea{
      transition: all 0.3s ease-in;
      border-bottom: 1px solid #666;
    }
    input:focus::placeholder, textarea:focus::placeholder{
      color: white;
    }

    input:focus, textarea:focus{
      border-bottom: 1px solid ${({ theme }) => theme.highlight.primary};
    }
   
    .title {
      color:  rgb(${({ theme }) => theme.title.primary});

      &:after {
        content: "";
        position: absolute;
        height: 1px;
        left: -30px;
        right: 0;
        bottom: 0;
        width: auto;
        background:  ${({ theme }) => theme.border.gradient2};
      }
    }

    .alert-success {
      display: none;
    }

    .contacts .row {
      .col {
        flex: none;

        textarea {
          padding: 15px;
          height: 94px;
        }
      }
        .icon {
          font-size: 1.2rem;
          margin: 0 6px;
        }

        button {
          background-color: transparent;
          cursor: pointer;
          .icon {
              margin-left: 10px;
            }
          &:hover {
            background: ${({ theme }) => theme.highlight.primary};
            border: 1px solid ${({ theme }) => theme.highlight.primary};
            
          }
        }
      
    }
  }
`;
