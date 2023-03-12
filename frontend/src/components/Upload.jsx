import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000000a7;
`;
const Wrapper = styled.div``;
const Close = styled.div``;
const Title = styled.h2;

const Upload = ({ setOpen }) => {
  return (
    <Container>
      <Wrapper>
        <Close>X</Close>
        <Title>Upload a New Video</Title>
      </Wrapper>
    </Container>
  );
};

export default Upload;