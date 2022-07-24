import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 80px;
  background: #FFF;
  position: fixed;
  top: 0px;
  z-index: 3;
  padding-top: 20px;
`;

export const Header = styled.header`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: ${props => props.flex ? 'flex' : 'block'};
  justify-content: flex-end;
  align-items: center;
  position: relative;
`;

export const Brand = styled.img`
  display: none;
  flex: 1;
  @media (min-width: 768px) {
    display: block;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  order: -1;
  flex: 1;
`;

export const List = styled.ul`
  color: ${props => props.active ? '#52d67a' : '#1D1F22'};
  padding-inline-start: 0;
`;

export const Item = styled.li`
  list-style-type: none;
  cursor: pointer;
  position: relative;
  margin-right: 10px;
  @media (min-width: 768px) {
    margin-right: 30px;
  }
`;

export const Controls = styled.div`
  flex: 1;
  text-align: end;
`;

export const Currency = styled.h3`
  margin-left: 20px;
  cursor: default;
  font-weight: 500;
`;

export const Icon = styled.img`
  width: auto;
  height: auto;
  margin-left: 20px;
  cursor: pointer;
`;

export const CardCounter = styled.div`
  width: 15px;
  height: 15px;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  background: #1D1F22;
  color: #FFF;
  border-radius: 50%;
  padding: 10px;
  position: absolute;
  top: -10px;
  right: -14px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OverLay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 80px;
  left: 0px;
  background: rgba(57,55,72,.22);
  display: ${props => props.value};
`;

export const OverLaySwitcher = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 80px;
  left: 0px;
  display: ${props => props.value};
  z-index: 10;
`;
