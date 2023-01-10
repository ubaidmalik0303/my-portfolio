import { Container, Row, Col, Navbar } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <Navbar.Brand href="/">
              <h1>UM</h1>
            </Navbar.Brand>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/ubaid-malik-1a15211bb/">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://www.facebook.com/Ubaid.malik5151/">
                <img src={navIcon2} alt="" />
              </a>
              <a href="https://github.com/ubaidmalik0303">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
