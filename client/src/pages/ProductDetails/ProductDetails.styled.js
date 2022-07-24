import styled from 'styled-components';

export const Container = styled.div`
`;

export const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(3, auto);
  @media (max-width: 768px) {
    grid-template-columns: auto;
  }
`;

export const GroupImages = styled.div`
  width: 89px;
  margin: 0 10px;
  @media (max-width: 1274px) {
    display: grid;
    grid-template-columns: repeat(3, auto);
    width: 289px;
    grid-row: 2 / 3;
    margin: 0px;
  }
`;

export const ImageWrapper = styled.div`
  padding: 10px;
  transition: .4s ease-in-out;
  transform: scale(1);
  display: grid;
  gap: 30px 0;
  &:hover {
    background: #FFF;
    cursor: pointer;
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    transform: scale(1.1);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: ${props => props.specifyHeight ? '521px' : 'auto'};
  object-fit: contain;
  @media (max-width: 768px) {
    height: ${props => props.specifyHeight ? '200px' : 'auto'};
  }
`;

export const ActiveImage = styled.div`
  width: 620px;
  padding: 10px;
  height: 511px;
  margin: 0 10px;
  @media (max-width: 1274px) {
    width: 270px;
    height: auto;
    margin: 0px;
  }
`;

export const Content = styled.div`
  width: 292px;
  height: 595px;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 30px;
  line-height: 27px;
  color: #1D1F22;
`;

export const Category = styled.p`
  font-weight: 400;
  font-size: 30px;
  line-height: 27px;
  color: #1D1F22;
  margin-top: 20px;
`;

export const SectionTitle = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  color: #1D1F22;
  margin-top: 20px;
`;

export const Colors = styled.div`
  display: flex;
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
  background: #FFF;
  color: #2B2B2B;
  transition: .4s ease-in-out;
  transform: scale(1);
  outline: 1px solid #1D1F22;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const Price = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 18px;
  color: #1D1F22;
  margin-top: 20px;
`;

export const AddToCart = styled.div`
  width: 292px;
  height: 52px;  
  background: #5ECE7B;
  padding: 16px 32px;
  color: #FFF;
  display: grid;
  place-items: center;
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
  margin: 20px 0;
  transition: .4s ease-in-out;
  transform: scale(1);
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  @media (max-width: 1274px) {
    width: 192px;
  }
`;
