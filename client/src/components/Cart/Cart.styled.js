import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin-bottom: 10px;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0px;
  margin-top: 20px;
`;

export const Left = styled.div`
  flex: 1;
  text-align: left;
`;

export const Title = styled.p`
  color: #1D1F22;
  font-weight: 300;
  font-size: 16px;
  line-height: 160%;
`;

export const Price = styled.p`
  color: #1D1F22;
  font-weight: 500;
  font-size: 16px;
  line-height: 160%;
`;

export const SectionTitle = styled.p`
  color: #1D1F22;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  margin-top: 5px;
`;

export const Colors = styled.div`
  display: flex;
  margin-top: 5px;
`;

export const Color = styled.div`
  width: 15px;
  height: 15px;
  margin-right: 10px;
  background: ${props => props.value ? props.value : null};
  outline: 1px solid #1D1F22;
  &:hover {
    cursor: default;
  }
`;

export const Capacity = styled.div`
  min-width: 15px;
  height: 15px;
  margin-right: 10px;
  outline: 1px solid #1D1F22;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  &:hover {
    cursor: default;
  }
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

export const Right = styled.div`
  flex: 1;
  margin-left: 10px;
`;

export const Wrapper = styled.div`
  width: 145px;
  height: 145px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
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
