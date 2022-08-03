import React from "react";
// import form_bg from "../../../assets/contact_form-bg.jpg";

const Form = () => {
  return (
    <div className="form-content" id="form">
      <div className="form-content__wrapper">
        {/* <img className="form-content__bg-img" src={form_bg} alt="" /> */}
        <div className="form-content__wrapper--right">
          <p className="form-content__caption">Give Us a Feedback</p>
          <p className="form-content__title">CONTACT FORM</p>
          {/* <form action="">
            <label htmlFor="name">Name*</label><br />
            <input type="text" id='name' name='name' />
            <label htmlFor="email">Email*</label><br />
            <input type="email" id='email' name='email' />
            <label htmlFor="message">Message*</label><br />
            <textarea name="messagae" id="message" cols="30" rows="10"></textarea>
          </form> */}
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
                  <input type="text" id="name" name="name" />
                </td>
                <td>
                  <input type="email" id="email" name="email" />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="message">Message*</label>
                </td>
              </tr>
              <tr>
                <td>
                  <textarea
                    name="messagae"
                    id="message"
                    cols="30"
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
