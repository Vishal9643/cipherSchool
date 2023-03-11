import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 20px 0px;
`;

const Avatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Name = styled.span`
font-size: 14px
font-weight:500;
color: ${({ theme }) => theme.text}`;

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.soft};
  margin-left: 5px;
`;

const Text = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
`;

const Comment = () => {
  return (
    <Container>
      <Avatar src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-youtube-social-media-round-icon-png-image_6315993.png" />
      <Details>
        <Name>Vishal</Name>
        <Date>1 Day ago</Date>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
      </Details>
    </Container>
  );
};

export default Comment;
