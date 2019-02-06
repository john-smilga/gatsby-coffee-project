import React from "react";
import Layout from "../components/layout";
export default function contact() {
  return (
    <Layout>
      <form
        name="contact"
        action="/?no-cache=1"
        method="POST"
        data-netlify="true"
      >
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
