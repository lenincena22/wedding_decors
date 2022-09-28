import React from "react";
import divider_title from "../../../assets/divider_title.webp";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Form = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jmym124",
        "template_fz9gnbz",
        e.target,
        "j_4GVRlJPwEID7GWL"
      )
      .then(
        (result) => {
          Swal.fire({
            title: "Success",
            type: "Success",
            text: `Thankyou for submiting ✨`,
          });
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="form-content" id="form">
      <div className="form-content__wrapper">
        {/* <img className="form-content__bg-img" src={form_bg} alt="" /> */}
        <div className="form-content__wrapper--right">
          <p className="form-content__caption">Get in touch with us</p>
          <p className="form-content__title">CONTACT FORM</p>
          <img
            className="form-content__divider-img"
            src={divider_title}
            alt=""
          />
          <form action="" onSubmit={sendEmail}>
            <label className="from_main_lable" htmlFor="name">Name*</label>
            <input type="text" id="name" name="name" size="30" />
            <label className=" from_main_lable" htmlFor="email">
              Email*
            </label>
            <input type="email" id="email" name="email" size="30" />
            <label className="from_main_lable" htmlFor="message">Message*</label>
            <textarea
                    name="message"
                    id="message"
                    cols="66"
                    rows="5"
                  ></textarea>
            <button type="submit" className="form-content__btn">
              SEND MESSAGE
            </button>
            {/* <input type="submit" className="form-content__btn" value="SEND MESSAGE" /> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
