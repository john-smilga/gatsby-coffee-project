import React from "react";
import Title from "../Globals/Title";
export default function Contact() {
  return (
    <section className="contact py-5">
      <Title title="contact us" />
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form name="contact" method="POST" data-netlify="true">
            <p>
              <label>
                Email: <input type="text" name="name" />
              </label>
            </p>
            <p>
              <label>
                Message: <textarea name="message" />
              </label>
            </p>
            <div data-netlify-recaptcha="true" />
            <p>
              <button type="”submit”">Send</button>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
