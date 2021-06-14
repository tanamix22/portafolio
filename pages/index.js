import React from "react";
import Layout from "../components/layout";
import Link from "next/link";

const index = () => {
  return (
    <Layout>
      {/* Header Card */}
      <header className="row">
        <div className="col-md-12">
          <div className="card card-body bg-secondary text-light animate__animated animate__fadeIn">
            <div className="row">
              <div className="col-md-4">
                <img
                  src="/foto2.jpg"
                  alt=""
                  width="400px"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-8">
                <h1>Jonnathan Reyes Garcia</h1>
                <h3>FrontEnd Developer</h3>
                <p>
                  Front-end developer who want to explore every tech stack
                  <br />⚡ Develop highly interactive Front end / User
                  Interfaces for your web and mobile applications
                  <br /> ⚡ Server Side Rendering(SSR) with Next.js.
                </p>
                <Link href="/hireme">
                  <a className="btn btn-outline-light">Hire Me</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Layout>
  );
};

export default index;
