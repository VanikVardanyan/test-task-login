import { Link } from "react-router-dom";
import "./Footer.scss";

import eclipceFooter from "./assets/eclipcefooter.svg";
import telegram from "./assets/telegram.svg";
import watsapp from "./assets/watsapp.svg";

export const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="sectionsWrapper">
        <div className="sectionsContainerFooter">
          <section className="section1Footer">
            <p className="logoFooter">LOGO</p>
          </section>

          <section className="section2Footer">
            <div className="titleFooter">
              Услуги
              <img className="imgFooter" alt="" src={eclipceFooter} />
            </div>
            <p className="textsFooter">Support and development</p>
            <p className="textsFooter">UI/UX and product design</p>
            <p className="textsFooter">Progressive Web Applications (PWA)</p>
          </section>

          <section className="section3Footer">
            <div className="titleFooter">
              Компания
              <img className="imgFooter" alt="" src={eclipceFooter} />
            </div>
            <p className="textsFooter">О компании</p>
            <p className="textsFooter">Проекты</p>
            <p className="textsFooter">Контакты</p>
          </section>

          <section className="section4Footer">
            <div className="titleFooter">
              Контакты
              <img className="imgFooter" alt="" src={eclipceFooter} />
            </div>
            <p className="textsFooter">Скачать презентацию</p>
            <p className="number">+7 (499) 999-99-99</p>
            <p className="textsFooter">info@site.com</p>
          </section>

          <section className="section5Footer">
            <Link to={"#"}>
              <div className="watsappFooter">
                <img alt="" src={watsapp} />
              </div>
            </Link>
            <Link to={"#"}>
              <div className="telegramFooter">
                <img alt="" src={telegram} />
              </div>
            </Link>
          </section>
        </div>

        <div className="bottomContainerFooter">
          <div className="companyContainer">
            <p className="companyText">© Company 2022. All rights reserved.</p>
          </div>
          <div className="politicContainer">
            <p className="politicText">Политика конфиденциальночти</p>
          </div>
        </div>
      </div>
    </div>
  );
};
