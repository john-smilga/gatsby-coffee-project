import React from "react";
import Title from "../Globals/Title";
export default function Contact() {
  return (
    <section className="contact py-5">
      <Title title="contact us" />
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form
            action="https://formspree.io/johnsmilga@gmail.com"
            method="POST"
          >
            {/* name */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="name"
              />
            </div>
            {/* name */}
            {/* email */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                placeholder="email"
              />
            </div>
            {/* email */}
            {/* description */}
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                className="form-control"
                rows="5"
              />
            </div>
            {/* email */}
            <button
              type="submit"
              className="btn btn-yellow btn-block text-capitalize"
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
