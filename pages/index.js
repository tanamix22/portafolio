import React from "react";
import Layout from "../components/layout";
import Link from "next/link";
import { skills, experiences } from "../profile";

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

      <section className="row">
        <div className="col-md-4 py-2">
          <div className="card bg-light animate__animated animate__fadeInLeft">
            <div className="card-body">
              <h1>Skills</h1>

              {/* Skill Progress  */}
              {skills.map(({ skill, percentage }, i) => (
                <div className="py-3" key={i}>
                  <h5>{skill}</h5>
                  <div className="progress ">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${percentage}%` }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-md-8 py-2">
          {/* Experience */}
          <div className="card bg-light animate__animated animate__fadeInRight">
            <div className="card-body">
              <h1>Experience</h1>

              <ul>
                {/* List Item Experience */}
                {experiences.map(({ title, from, to }, index) => (
                  <li key={index}>
                    <h3>{title}</h3>
                    <h5>
                      {from} {to ? `- ${to}` : "- current"}
                    </h5>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Sint excepturi ea explicabo. Illum suscipit illo, porro
                      quisquam voluptatem officiis fugiat vel animi aliquam
                      inventore rem. Quo laudantium temporibus cupiditate. Aut?
                    </p>
                  </li>
                ))}
              </ul>
              <Link href="/hireme">
                <a className="btn btn-light">Know More</a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default index;
