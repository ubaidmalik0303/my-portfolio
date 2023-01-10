import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div style={{ cursor: "pointer" }} className="proj-imgbx" onClick={() => (window.location.href = url)}>
        <img src={imgUrl} style={{ height: 300, objectFit: "cover" }} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
