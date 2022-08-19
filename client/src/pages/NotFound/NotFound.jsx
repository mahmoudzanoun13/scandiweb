import { Component } from "react";
import { Link } from "react-router-dom";
import './NotFound.css';

export class NotFound extends Component {
  render() {
    return (
      <main className="container-nf">
        <h1 className="code-status">404</h1>
        <div className="status">Page Not Found</div>
          <Link
            to="/"
            style={{
              position: "relative",
              display: "inline-block",
              fontSize: "0.875rem",
              lineHeight: "1.25rem",
              fontWeight: "500",
              color: "#FF6A3D",
              textDecoration: 'inherit',
              curser: 'pointer',
              border: '1px solid #FF6A3D',
              marginTop: '1.25rem',
            }}
          >
            <span className="span" />
            <span className="text">Go Home</span>
          </Link>
      </main>
    );
  }
}

export default NotFound;
