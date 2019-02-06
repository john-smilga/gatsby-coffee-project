import React from "react";
import Title from "../Globals/Title";
export default function Contact() {
  return (
    <section className="contact py-5">
      <Title title="contact us" />
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form action="" method="post" data-netlify="true">
            <input type="text" name="name" />
            <button type="submit">submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}
