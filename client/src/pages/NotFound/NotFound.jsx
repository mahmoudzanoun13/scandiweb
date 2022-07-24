import { Component } from "react";
import { Link } from "react-router-dom";
import { Container, CodeStatus, Status, Span, Text } from './NotFound.styles.js';

export class NotFound extends Component {
  render() {
    return (
      <Container>
        <CodeStatus>404</CodeStatus>
        <Status>Page Not Found</Status>
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
            <Span />
            <Text>Go Home</Text>
          </Link>
      </Container>
    );
  }
}

export default NotFound;
