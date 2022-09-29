import { useState } from "react";
import { Link } from "react-router-dom";
import { FormControl, TextField } from "@mui/material";
import { ToastContainer } from "react-toastify";
import { createError, createLabel } from "../../helpers.js";
import "./Contacts.scss";

import marks from "./assets/marks.svg"
import sandIcon from "./assets/sendIcon.svg"
import eclipceInner from "./assets/eclipceinner.svg"
import eclipceOuter from "./assets/eclipceouter.svg"

export const Contacts = () => {
  const [checked, setChecked] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const submitHandler = () => {
    if (checked) {
      setIsActive(true);
    } else {
      createError("Согласитесь с политикой конфиденциальности..");
    }
  };

  return (
    <div className="contactsContainer">
      <div className="divWrapper">
        <section className="marksIcon">
          <img alt="" src={marks} />
        </section>

        <section className="section2">
          <div>
            <span className="mainText"> Главная - </span>
            <strong className="contactsText">Контакты</strong>
          </div>
          <div className="weAre">Мы рядом</div>
          <div className="textWeAre">
            Заполните форму ниже и мы свяжемся с вами. Не любите <br /> формы?
            Напишите нам на почту <Link to="#">info@site.com</Link>
          </div>
          <FormControl className="formsContainer">
            <div className="formContainer">
              <div className="upInputContainer">
                <div className="leftInput">
                  <TextField
                    id="outlined-basic"
                    label={createLabel("Ваше имя")}
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderTop: "none",
                        borderRight: "none",
                        borderLeft: "none",
                        borderRadius: "0",
                      },
                    }}
                    className="inputLeft"
                  />
                </div>

                <div className="rightInput">
                  <TextField
                    id="outlined-basic"
                    label={createLabel("Ваш E-Mail")}
                    variant="outlined"
                    width="278px"
                    sx={{
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderTop: "none",
                        borderRight: "none",
                        borderLeft: "none",
                        borderRadius: "0",
                      },
                    }}
                    className="inputRight"
                  />
                </div>
              </div>

              <div className="downInputContainer">
                <TextField
                  id="outlined-basic"
                  label={createLabel("Комментарий")}
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderTop: "none",
                      borderRight: "none",
                      borderLeft: "none",
                      borderRadius: "0",
                    },
                  }}
                  className="inputBottom"
                />
              </div>
              <div className="chboxContainer">
                <div
                  className="chboxouter"
                  onClick={() => setChecked(!checked)}
                >
                  <img alt="" src={eclipceOuter} />
                  {checked && (
                    <img
                      className="chbpoxInner"
                      alt=""
                      src={eclipceInner}
                    />
                  )}
                </div>
                <span className="textCheckbox">
                  Согласен с <Link to={"#"}>Политикой конфиденциальности</Link>
                </span>
              </div>
            </div>
          </FormControl>
        </section>

        <section className="section3">
          <div
            onClick={submitHandler}
            className={
              !isActive ? "submitIconContainer" : "submitIconContainerClick"
            }
          >
            <div className="submitIcon">
              <img className="submitImage" alt="" src={sandIcon} />
            </div>
            {!isActive ? (
              <>
                <div className="textIcon">Отправить</div>
              </>
            ) : (
              <>
                <div className="textIcon">Ваше сообщение отправлено!</div>
              </>
            )}
          </div>
        </section>
        <ToastContainer />
      </div>
    </div>
  );
};
