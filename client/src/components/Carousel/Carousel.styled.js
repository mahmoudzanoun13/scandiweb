import styled from "styled-components";

export const Container = styled.div`
  width: 200px;
  height: 200px;
  overflow: hidden;
  margin-left: 20px;
  position: relative;
`;

export const Images = styled.div`
  width: 100%;
  height: 100%;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const SlideLeft = styled.div`
  width: 24px;
  height: 24px;
  background: #1D1F22;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  bottom: 0px;
  right: 30px;
`;

export const SlideRight = styled.div`
  width: 24px;
  height: 24px;
  background: #1D1F22;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  bottom: 0px;
  right: 0px;
`;

export const Arrow = styled.img`
`;
