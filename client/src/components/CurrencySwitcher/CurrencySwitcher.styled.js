import styled from "styled-components";

export const Section = styled.section`
  background-color: hsla(0,0%,100%,0);
  height: 198px;
  width: 0;
  position: absolute;
  top: 51.5px;
  right: 100px;
  z-index: 20;
`;

export const Select = styled.div`
  background-color: #fff;
  border: 1px solid #eee;
  box-shadow: 0 0 19px 5px hsla(214,7%,80%,.261);
  height: auto;
  margin-left: auto;
  margin-right: 50px;
  width: 120px;
`;

export const Option = styled.p`
  cursor: pointer;
  padding: 10px 25px;
  text-align: center;
  transition: .3s;
  &:hover {
    background: #F1F1F1;
  }
`;
