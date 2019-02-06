import React from "react";
import Layout from "../components/layout";
export default function contact() {
  return (
    <Layout>
      <form
        key="contact-form"
        name="contact"
        method="POST"
        action="/contact/"
        data-netlify-honeypot="full-name"
        data-netlify="true"
      >
        <div style={{ display: "none" }}>
          <label htmlFor="full-name">
            Don’t fill out this field if you’re a human.
          </label>
          <input type="text" id="full-name" name="full-name" />
        </div>
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
        <button type="submit">submit</button>
      </form>
    </Layout>
  );
}
