import React from "react";
import divider_title from "../../../assets/divider_title.webp";

const Form = () => {
  return (
    <div className="form-content" id="form">
      <div className="form-content__wrapper">
        {/* <img className="form-content__bg-img" src={form_bg} alt="" /> */}
        <div className="form-content__wrapper--right">
          <p className="form-content__caption">Give Us a Feedback</p>
          <p className="form-content__title">CONTACT FORM</p>
          <img className="form-content__divider-img" src={divider_title} alt="" />
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
                  <input type="email" id="email" name="email" size="30"/>
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
                    name="messagae"
                    id="message"
                    cols="66"
                    rows="5"
                  ></textarea>
                </td>
              </tr>
            </table>
          <button className="form-content__btn">SEND MESSAGE</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
