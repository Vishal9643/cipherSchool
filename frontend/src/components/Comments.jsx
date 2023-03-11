import React from "react";
import styled from "styled-components";
import Comment from "./Comment";

const Container = styled.div``;
const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Avatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
`;
const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.text};
  background-color: transparent;
  outline: none;
  padding: 5px;
  color: ${({ theme }) => theme.text};
  width: 100%;
`;

const Comments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-youtube-social-media-round-icon-png-image_6315993.png" />
        <Input placeholder="Add a comment..." />
      </NewComment>
      <Comment></Comment>
    </Container>
  );
};

export default Comments;
