import styled from "styled-components";

export const Box = styled.div`
  display: grid;
  padding: 16px;
  background: #f9f9f9;
  width: 433px;
  height: 185px;
  margin: 4px;
  border-radius: 4px;
`;

export const Title = styled.div`
  font-size: 21px;
  line-height: 29px;
  color: #5489dc;
  font-weight: 500;
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 20px;
  height: 60px;
`;

export const LabelContainer = styled.div`
  display: flex;
`;

interface LabelProps {
  backgroundColor: string;
}

export const Label = styled.div<LabelProps>`
  background-color: ${(props) => props.backgroundColor};
  font-size: 11px;
  line-height: 15px;
  color: white;
  width: fit-content;
  margin-right: 4px;
  padding: 2px 8px;
  height: fit-content;
  border-radius: 20px;
`;

export const Footer = styled.div`
  font-size: 12px;
  line-height: 17px;
`;
