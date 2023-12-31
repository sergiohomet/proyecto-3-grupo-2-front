import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  return (
    <footer>
      <FooterContainer className="footer-container">
        <div className="flex flex-col md:flex-row justify-center mx-auto">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-3 col-sm-6">
                <ul className="list-unstyled ">
                  <div className="d-flex justify-content-center">
                    <Link to={"/"}><img
                      src="https://res.cloudinary.com/dhvgi2cmq/image/upload/v1697058067/patitas/patitasNav_sbn7yu.png"
                      alt=""
                      className="imgFooter"
                    ></img></Link>
                  </div>
                </ul>
              </div>

              <div className="col-md-3 col-sm-6 mx-auto text-center">
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <h4 className="h4-footer text-tertiary">
                    Veterinaria Patitas
                  </h4>
                  <ul className="list-unstyled">
                    <li>
                      <Link to={"/nosotros"}>Acerca de Nosotros</Link>
                    </li>
                    <li>
                      <Link to={"/contacto"}>Contacto</Link>
                    </li>

                    <li className="d-flex justify-content-center align-items-center">
                      <i className="bi bi-telephone me-2"></i>
                      <p className="m-0 mt-1">0800-Martin</p>
                    </li>
                    <li className="d-flex justify-content-center align-items-center">
                      <i className="bi bi-envelope me-2"></i>
                      <p className="m-0 mt-1">
                        veterinariapatitas4@gmail.com
                      </p>{" "}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <h4 className="h4-footer text-tertiary">Redes sociales</h4>
                <ul className="list-unstyled">
                  <li>
                    <Link to={'/error'}>
                      <i className="bi bi-facebook me-1"></i>
                      <span>Facebook</span>
                    </Link>
                    
                  </li>
                  <li>
                    <Link to={'/error'}>
                      <i className="bi bi-instagram me-1"></i>
                      <span>Instagram</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={'/error'}>
                      <i className="bi bi-twitter me-1"></i>
                      <span>Twitter</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={'/error'}>
                      <i className="bi bi-tiktok me-1"></i>
                      <span>Tik-Tok</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom bg-tertiary w-100 ">
          <p className="pie-footer  text-xs-center">
            Todos los derechos reservados &copy;{new Date().getFullYear()}
          </p>
        </div>
      </FooterContainer>
    </footer>
  );
};

export default Footer;

const FooterContainer = styled.footer`

  .footer-middle {
    background: var(--mainDrark);
    padding-top: 3rem;
    color: var(--maingreen);
  }

  ul li a {
  colo: var(--mainfount);
  }

  ul li a:hover {
    color: var(--maingreen);

  `;