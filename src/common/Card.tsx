import React from "react";
import { CardType } from "../types";
import { formatDate } from "../helpers/formatDate";
import {
  Box,
  Title,
  Description,
  LabelContainer,
  Label,
  Footer,
} from "./Card.styled";

const Card = (props: CardType) => {
  return (
    <Box>
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
      <LabelContainer>
        {props.translatable && (
          <Label backgroundColor="#BBBBBB">Non-translatable</Label>
        )}
        {props.caseSensitive && (
          <Label backgroundColor="#78A4F6">Case-sensative</Label>
        )}
        {props.forbidden && <Label backgroundColor="#E36A77">Forbidden</Label>}
      </LabelContainer>
      <Footer>{`${formatDate(props.createdAt)} ${
        props.createdBy.fullName
      }`}</Footer>
    </Box>
  );
};

export default Card;
