import React, { useEffect, useState } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import { getData } from "./services";
import Card from "./common/Card";
import {
  Wrapper,
  CardWrapper,
  StyledInput,
  SearchWrapper,
  ClearIcon,
} from "./Glossary.styled";
import { CardType } from "./types";

const Glossary = () => {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchParams, setSearchParams] = useState("");

  useEffect(() => {
    getData(searchParams).then((items) => {
      setData(items);
    });
  }, [searchParams]);

  const navigate = useNavigate();

  const onChange = async (event: { target: { name: any; value: any } }) => {
    const { name, value } = event?.target;
    setSearchValue(value);
    const searchBody = `?${createSearchParams({
      [name]: value,
    })}`;

    await navigate({
      pathname: "/",
      search: searchBody,
    });

    setSearchParams(searchBody);
  };

  // console.log("data", data);

  const onClearClick = () => {
    setSearchValue("");
  };

  return (
    <Wrapper>
      <SearchWrapper>
        <StyledInput
          name="search"
          placeholder="Search..."
          value={searchValue}
          onChange={onChange}
        />
        <ClearIcon onClick={onClearClick}>&times;</ClearIcon>
      </SearchWrapper>
      {data?.length > 0 && (
        <CardWrapper>
          {data.map((item: CardType) => (
            <Card {...item} key={item.id} />
          ))}
        </CardWrapper>
      )}
    </Wrapper>
  );
};

export default Glossary;
