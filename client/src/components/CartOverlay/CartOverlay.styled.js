import styled from "styled-components";

export const Container = styled.div`
  padding: 0px 16px 32px;
  position: absolute;
  width: 325px;
  max-height: 77vh;
  right: 0px;
  top: 51px;
  background: #FFF;
  z-index: 1000;
  overflow-y: auto;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
`;

export const ItemQuantity = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 160%;  
  color: #1D1F22;
`;

export const EmptyCart = styled.div`
  width: 100%;
  height: 210px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Bold = styled.strong`
  font-weight: 800;
`;

export const TotalPrice = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Total = styled.p`
  color: #1D1F22;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
`;

export const Price = styled.p`
  color: #1D1F22;
  font-weight: 500;
  font-size: 16px;
  line-height: 160%;
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftButton = styled.div`
  width: 48%;
  cursor: pointer;
`;

export const ViewBag = styled.button`
  background: #FFF;
  border: 1px solid #000;
  color: #000;
  font-weight: 700;
  letter-spacing: .75px;
  line-height: 40px;
  text-align: center;
  width: 100%;
  transition: .4s ease-in-out;
  transform: scale(1);
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const RightButton = styled.div`
  width: 48%;
`;

export const CheckOut = styled.button`
  background: #52d67a;
  border: 1px solid #52d67a;
  color: #FFF;
  font-weight: 700;
  letter-spacing: .75px;
  line-height: 40px;
  text-align: center;
  width: 100%;
  transition: .4s ease-in-out;
  transform: scale(1);
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
