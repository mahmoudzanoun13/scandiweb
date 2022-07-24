import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const Wrapper = styled.div`
  width: 80%;
  margin: auto;
`;

export const Headline = styled.h1`
  margin-top: 100px;
  font-size: 32px;
  line-height: 40px;
  font-weight: 700;
  text-transform: uppercase;
  color: #1D1F22;
`;

export const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background: #E5E5E5;
  margin: auto;
  margin-top: 50px;
`;

export const Product = styled.div`
  display: flex;
  justify-content: between;
  width: 100%;
`;

export const Left = styled.div`
  flex: 1;
`;

export const Title = styled.h1`
  font-size: 30px;
  line-height: 27px;
  font-weight: 600;
  color: #1D1F22;
  margin-top: 50px;
`;

export const Category = styled.p`
  font-size: 30px;
  line-height: 27px;
  font-weight: 400;
  color: #1D1F22;
  margin-top: 20px;
`;

export const Price = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 18px;
  color: #1D1F22;
  margin-top: 20px;
`;

export const Colors = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const Color = styled.div`
  width: 32px;
  height: 32px;
  margin-right: 10px;
  background: ${props => props.value ? props.value : null};
  transition: .4s ease-in-out;
  transform: scale(1);
  outline: 1px solid #1D1F22;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const Capacity = styled.div`
  min-width: 32px;
  height: 32px;
  margin-right: 10px;
  margin-top: 10px;
  background: ${props => props.active ? '#2B2B2B' : '#FFF'};
  transition: .4s ease-in-out;
  transform: scale(1);
  outline: 1px solid #1D1F22;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const ControlsWrapper = styled.div`
`;

export const Controls = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.p`
  width: 20px;
  height: 20px;
  background: ${props => props.value ? props.value : null};
  transition: .4s ease-in-out;
  transform: scale(1);
  border: 1px solid #2B2B2B;
  text-align: center;
  line-height: 16px;
  margin: 20px;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const Items = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BottomWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Tax = styled.p`
  font-size: 24px;
  line-height: 28px;
  font-weight: 400;  
  color: #1D1F22;
  padding-right: 10px;
  margin-top: 17px;
`;

export const Quantity = styled.p`
  font-size: 24px;
  line-height: 28px;
  font-weight: 400;  
  color: #1D1F22;
  padding-right: 10px;
  margin-top: 17px;
`;

export const Total = styled.p`
  font-size: 24px;
  line-height: 28px;
  font-weight: 500;  
  color: #1D1F22;
  padding-right: 10px;
  margin-top: 17px;
`;

export const DeleteItem = styled.span`
  position: absolute;
  top: 0px;
  left: 0px;
  color: #1D1F22;
  font-weight: 600;
  transition: .4s ease-in-out;
  transform: scale(1);
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const Order = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  width: 279px;
  height: 43px;
  background: #5ECE7B;
  border: none;
  margin: 20px 0 50px 0;
  transition: .4s ease-in-out;
  transform: scale(1);
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const Label = styled.p`
  font-size: 14px;
  line-height: 120%;
  font-weight: 600;
  text-transform: uppercase;
  color: #FFFFFF;
`;
