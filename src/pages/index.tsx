/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"
></link>;
export default function Home() {
  return (
    <>
      <div className="container-fluid bg-dark text-light">
        <div className="row fixed-top " style={{ borderBottom: "1px solid red" }}>
          <nav className="navbar navbar-expand-lg bg-dark navbar-danger  p-2 p-md-4">
            <div className="container-fluid">
              <img src="panaverse-logo.png" height="70" alt="" />
              <h6 className="navbar-brand">
                <b className="" style={{ color: "rgb(169, 22, 39)" }}>Panaverse Dao</b>
              </h6>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarTogglerDemo02"
              >
                <ul className="navbar-nav text-white me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active text-white" aria-current="page" href="#">
                      <b>Home</b>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="#">
                      Courses
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="#">
                      About
                    </a>
                  </li>
                </ul>
                <button className="btn text-white" style={{ backgroundImage: "linear-gradient(#45399d,#0a0a19 )" }} ><a href="https://portal.piaic.org/signup" style={{ textDecoration: "none" }} className="text-white">Enroll Today</a></button>
              </div>
            </div>
          </nav>
        </div>
        <div className="row  px-0 mt-5 pt-5" >
          <div
            className="col-md-8 py-md-5 py-0 my-0 my-md-5 "
            style={{ alignItems: "center", textAlign: "center" }}
          >
            <h5 className="d-md-none d-none p-1 p-md-3" style={{ fontWeight: "700" }}>Panaverse Dao</h5>
            <h1 style={{ fontWeight: "900" }} className="fs-1">
              The Future of Internet
            </h1>
            <h5>Become a Certified Developer and Earn While You Learn</h5>
            <div className="row  justify-content-center">
              <div className="col-md-3 m-2 m-md-0">
                {/* <button className="btn btn-primary">Enroll Today</button> */}
                <button className="btn " style={{ backgroundImage: "linear-gradient(#45399d,#0a0a19 )" }} ><a href="https://portal.piaic.org/signup" style={{ textDecoration: "none" }} className="text-white">Enroll Today</a></button>

              </div>
              <div className="col-md-3 m-2 m-md-0">
                <button className="btn text-white" style={{ backgroundImage: "linear-gradient(#45399d,#0a0a19 )" }}>View Courses</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-0 p-md-5">
            <img src="image-1.jpg" className="rounded-pill  img-fluid" alt="" />
          </div>
        </div>
        <div className="row p-1  p-md-5 text-white" style={{ backgroundImage: "linear-gradient(#45399d,#0a0a19 )" }}>
          <div className="col-md-12">
            <h1 className="text-center py-5  py-md-5" style={{ fontWeight: "900" }}>
              The Program in a Nutshell: Earn While You Learn
            </h1>
            <h4>
              In this brand-new type of curriculum, students will learn how to
              make money and boost exports in the classroom and will begin doing
              so within six months of the programs beginning. It resembles a
              cross between a corporate venture and an educational project.
            </h4>
            <h1>Program Attributes</h1>
            <ul>
              <li>Earn while you learn</li>
              <li>On Site and Online classes both</li>
              <li>Hands-on learning experience</li>
              <li>VOD Lectures</li>
              <li>Includes full stack web development</li>
              <li>For beginners and professionals both</li>
              <li> Includes full stack web development</li>
            </ul>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-12">
            <h1 className="text-center p-4 py-5" style={{ fontWeight: "900" }}>
              Top programs
            </h1>
          </div>
        </div>
        <div className="row  p-1 p-md-4  justify-content-center ">
          <div className="col-md-3 my-2 my-md-0 ps-3 ps-md-0 mx-0 mx-md-4">
            <div className="card" style={{ width: "21rem", backgroundImage: "linear-gradient(#45399d,#0a0a19 )" }}>
              <div className="card-body">
                <h5 className="card-title py-3">
                  Web 3.0 (Blockchain) and Metaverse Specialization
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                  sint error cupiditate odio, laudantium aperiam nisi
                  praesentium obcaecati consequuntur maxime labore placeat
                  recusandae, nemo dolorum sunt sapiente voluptatibus quisquam!
                  Nemo odio deleniti sint sapiente ratione quas labore eveniet
                  fugiat magnam?
                </p>
                <button className="btn text-white" style={{ backgroundImage: "linear-gradient(#45399d,#0a0a19 )" }}><a href="https://portal.piaic.org/signup" style={{ textDecoration: "none" }} className="text-white">Enroll Today</a></button>
              </div>
            </div>
          </div>
          <div className="col-md-3 my-2 my-md-0 ps-3 ps-md-0 mx-0 mx-md-4">
            <div className="card" style={{ width: "21rem", backgroundImage: "linear-gradient(#45399d,#0a0a19 )" }}>
              <div className="card-body">
                <h5 className="card-title py-3">
                  Web 3.0 (Blockchain) and Metaverse Specialization
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                  sint error cupiditate odio, laudantium aperiam nisi
                  praesentium obcaecati consequuntur maxime labore placeat
                  recusandae, nemo dolorum sunt sapiente voluptatibus quisquam!
                  Nemo odio deleniti sint sapiente ratione quas labore eveniet
                  fugiat magnam?
                </p>
                <button className="btn text-white" style={{ backgroundImage: "linear-gradient(#45399d,#0a0a19 )" }}><a href="https://portal.piaic.org/signup" style={{ textDecoration: "none" }} className="text-white">Enroll Today</a></button>
              </div>
            </div>
          </div>
          <div className="col-md-3 my-2 my-md-0 ps-3 ps-md-0 mx-0 mx-md-4">
            <div className="card" style={{ width: "21rem", backgroundImage: "linear-gradient(#45399d,#0a0a19 )" }}>
              <div className="card-body">
                <h5 className="card-title py-3">
                  Web 3.0 (Blockchain) and Metaverse Specialization
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                  sint error cupiditate odio, laudantium aperiam nisi
                  praesentium obcaecati consequuntur maxime labore placeat
                  recusandae, nemo dolorum sunt sapiente voluptatibus quisquam!
                  Nemo odio deleniti sint sapiente ratione quas labore eveniet
                  fugiat magnam?
                </p>
                <button className="btn text-white" style={{ backgroundImage: "linear-gradient(#45399d,#0a0a19 )" }}><a href="https://portal.piaic.org/signup" style={{ textDecoration: "none" }} className="text-white">Enroll Today</a></button>
              </div>
            </div>
          </div>

        </div>
        <div className="row ">
          <div className="col-md-10 p-3 text-end">
            <button className="btn text-white" style={{ backgroundImage: "linear-gradient(#45399d,#0a0a19 )" }}>View Corses</button>
          </div>
        </div>
        <div className="row justify-content-center  ">
          <div className="col-md-3">
            <div className="row d-flex flex-row">
              <div className="col-md-12 d-flex flex-row">
                <img src="panaverse-logo.png" height="70" alt="" />
                <h6 className="navbar-brand py-0 py-md-4">
                  <b style={{ color: "rgb(169, 22, 39)" }}>Panaverse Dao</b>
                </h6>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <h4>Advancing Tecgnology for a better Internet</h4>
                <h5>Become a Certified Developer and Earn While You Learn</h5>
                <button className="btn text-white" style={{ backgroundImage: "linear-gradient(#45399d,#0a0a19 )" }}><a href="https://portal.piaic.org/signup" style={{ textDecoration: "none" }} className="text-white">Enroll Today</a></button>
              </div>
            </div>
            <div className="row p-3">
              <div className="col-md-12">
                <img src="capture-4.svg" className="px-2" alt="" height="40" />
                <img src="capture-5.svg" className="px-2" alt="" height="40" />
                <img src="capture-6.svg" className="px-2" alt="" height="40" />
                <img src="capture-7.svg" className="px-2" alt="" height="40" />
                <img src="capture-8.svg" className="px-2" alt="" height="40" />
              </div>
            </div>
          </div>
          <div className="col-md-3  text-center">
            <div className="row ">
              <div className="col-md-12 pb-5">
                <h4>Strategic Parteners</h4>
              </div>
            </div>
            <div className="row ">
              <div className="col-md-12 py-md-0 py-3">
                <img src="capture-9.svg" height="100" alt="" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 py-md-0 py-3">
                <img src="capture-10.jpg" alt="" height="100" />
              </div>
            </div>
            <div className="row ">
              <div className="col-md-12 py-md-0 py-3">
                <img
                  height="50"
                  style={{ width: "8rem" }}
                  src="capture-11.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="row">
              <div className="col-md-12">
                <h5>Newsletter</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <input
                  className=" rounded p-2 bg-white w-75 mx-2"
                  placeholder="Enter"
                  type="text"
                />
                <img src="capture-14.svg" height="30" alt="" />
              </div>
            </div>

            <div className="row p-2">
              <div className="col-md-12 ">
                <a href="#" className="" style={{ textDecoration: "none", color: "white", fontWeight: "600" }} >Home</a><br />
                <a href="https://portal.piaic.org/signup" className="" style={{ textDecoration: "none", color: "white", fontWeight: "600" }} >Enroll Today</a><br />
                <a href="#" className="" style={{ textDecoration: "none", color: "white", fontWeight: "600" }} >How It Works</a><br />
                <a href="#" className="" style={{ textDecoration: "none", color: "white", fontWeight: "600" }} >Artificial Intelligence</a><br />
                <a href="#" className="" style={{ textDecoration: "none", color: "white", fontWeight: "600" }} >Cloud native And Mobile Web Computing</a><br />
                <a href="#" className="" style={{ textDecoration: "none", color: "white", fontWeight: "600" }} >Metaverse</a><br />
                <a href="#" className="" style={{ textDecoration: "none", color: "white", fontWeight: "600" }} >Internet of Things</a><br />
                <a href="#" className="" style={{ textDecoration: "none", color: "white", fontWeight: "600" }} >About The President</a><br />
                <a href="#" className="" style={{ textDecoration: "none", color: "white", fontWeight: "600" }} >Women Inclusion in Texhnology (WIT)</a><br />
                <a href="#"></a>
              </div>
            </div>
          </div>
        </div>
        <div className="row " style={{ borderTop: "1px solid red" }}>
          <div className="col-md-12 d-flex flex-row">
            <h6 className="w-50 text-start">Panaverse Decentralized Autonomous Organization</h6>
            <h6 className="w-50 text-end pb-4"><img src="capture-15.svg" height="40" alt="" /><a href="#" style={{ textDecoration: "none", color: "white", fontWeight: "600" }}><span className="" style={{ textDecoration: "underline" }}>Mustajab Ahmed </span> 2023</a></h6>

          </div>
        </div>
      </div>

      <script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
        integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
        integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossOrigin="anonymous"
      ></script>
    </>
  );
}
