import React from "react";
import divider_title from "../../../assets/divider_title.webp";
import emailjs from "emailjs-com";

const Form = () => {

  const sendEmail =  (e) => {
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
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="form-content" id="form">
      <div className="form-content__wrapper">
        {/* <img className="form-content__bg-img" src={form_bg} alt="" /> */}
        <div className="form-content__wrapper--right">
          <p className="form-content__caption">Give Us a Feedback</p>
          <p className="form-content__title">CONTACT FORM</p>
          <img
            className="form-content__divider-img"
            src={divider_title}
            alt=""
          />
          <form action="" onSubmit={sendEmail}>
            <table className="form__table">
              <tr>
                <td>
                  <label htmlFor="name">Name*</label>
                </td>
                <td>
                  <label htmlFor="email">Email*</label>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" id="name" name="name" size="30" />
                </td>
                <td>
                  <input type="email" id="email" name="email" size="30" />
                </td>
              </tr>
              <tr>
                <td>
                  <br />
                  <label htmlFor="message">Message*</label>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <textarea
                    name="message"
                    id="message"
                    cols="66"
                    rows="5"
                  ></textarea>
                </td>
              </tr>
            </table>
            <button type="submit" className="form-content__btn">SEND MESSAGE</button>
            {/* <input type="submit" className="form-content__btn" value="SEND MESSAGE" /> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
