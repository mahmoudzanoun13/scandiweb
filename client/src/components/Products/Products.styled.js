import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  place-items: center;
  gap: 130px;
  width: 80%;
  margin: auto;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: 1131px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const EmptyCart = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #52d67a;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 20px;
  bottom: 85px;
  opacity: 0;
  transition: .4s ease-in-out;
  transform: scale(1);
  &:hover {
    transform: scale(1.1);
  }
`;

export const OutOfStock = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%);
  font-size: 20px;
  font-weight: 400;
  line-height: 160%;
  color: #8D8F9A;
`;

export const Cart = styled.img`
  width: 24px;
  height: 24px;
  filter: brightness(0) invert(1);
`;

export const ProductCardWrapper = styled.div`
  width: 315px;
  height: 365px;
  padding: 10px;
  position: relative;
  transition: .4s ease-in-out;
  &:hover {
    background: #FFF;
    cursor: pointer;
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  }
  &:hover ${EmptyCart} {
    opacity: 1;
  }
`;

export const ProductCard = styled.div`
`;

export const Wrapper = styled.div`
  height: 250px;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const Content = styled.div`
  width: 100%;
`;

export const ContentTitle = styled.p`
  font-size: 18px;
  font-weight: 300;
  line-height: 29px;
  color: #1D1F22;
`;

export const ContentPrice = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 29px;
  color: #1D1F22;
  margin-bottom: 10px;
`;
