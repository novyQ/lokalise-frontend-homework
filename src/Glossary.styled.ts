import styled from "styled-components";

export const Wrapper = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  padding: 16px;
  color: #808080;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const SearchWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const ClearIcon = styled.i`
  position: absolute;
  right: 0;
  top: 4px;
  padding: 0 8px;
  font-size: 1.2em;
  cursor: pointer;
`;

export const StyledInput = styled.input`
  width: 385px;
  height: 30px;
  border: 1px solid #aac4ed;
  box-sizing: border-box;
  border-radius: 4px;
  margin-left: 4px;
  margin-bottom: 8px;
`;
