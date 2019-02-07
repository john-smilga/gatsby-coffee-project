import React from "react";
import Title from "../Globals/Title";
import { Link } from "gatsby";
export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel amet
              labore tempore delectus voluptate inventore? Iste tempore
              molestias eaque rem quis blanditiis, facilis excepturi, magnam,
              itaque earum sed fuga quia? At autem corporis ipsam libero
              laboriosam! Unde autem nesciunt beatae, facere illum rerum
              corporis nihil, sint, commodi in debitis quia.
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
