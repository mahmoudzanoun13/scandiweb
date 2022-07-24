import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #1A2238;
`;

export const CodeStatus = styled.h1`
  font-size: 8rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  color: #FFF;
`;

export const Status = styled.div`
  background: #FF6A3D;
  padding: 0 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border-radius: 0.25rem;
  transform: rotate(12deg);
  position: absolute;
`;

export const Span = styled.span`
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  transform: translateX(0.125rem);
  transform: translateY(0.125rem);
  background: #FF6A3D;
`;

export const Text = styled.span`
  position: relative;
  display: block;
  padding: 0.1rem 2rem;
  background: #1A2238;
`;
