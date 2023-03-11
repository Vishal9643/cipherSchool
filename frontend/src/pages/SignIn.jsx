import React from "react";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 50px);
  color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1 px solid ${({ theme }) => theme.soft};
  padding: 20px 50px;
  gap: 10px;
`;

const Title = styled.h2`
  font-size: 24px;
`;

const Subtitle = styled.h3`
  font-size: 20px;
  font-weight: 400;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  background-color: transparent;
  outline: none;
  padding: 5px;
  color: ${({ theme }) => theme.text};
  width: 100%;
`;

const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
`;

const More = styled.div`
  display: flex;
  font-size: 12px;
  margin-top: 10px;
  color: ${({ theme }) => theme.textSoft};
`;

const Links = styled.div`
  display: flex;
  margin-left: 40px;
`;

const Link = styled.span`
  margin-left: 30px;
`;

const SignIn = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SignIn</Title>
        <Subtitle>to continue to cipher school</Subtitle>
        <Input placeholder="username" />
        <Input type="password" placeholder="password" />
        <Button>Sign in</Button>
        <Subtitle>OR</Subtitle>
        <Title>SignUp</Title>
        <Input placeholder="username" />
        <Input type="email" placeholder="email" />
        <Input type="password" placeholder="password" />
        <Button>Sign up</Button>
      </Wrapper>
      <More>
        English
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </More>
    </Container>
  );
};

export default SignIn;
