import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "300px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
  background-color: #999;
  border-radius: 20px;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div``;
const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.h3`
  font-size: 14px;
  font-weight: 300;
  color: ${({ theme }) => theme.textSoft};
  margin: 8px 0px;
`;
const Info = styled.div`
  font-size: 14px;
  font-weight: 300;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = ({ type }) => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image
          type={type}
          src="https://img.freepik.com/premium-vector/black-yellow-grunge-modern-youtube-thumbnail-background_562076-122.jpg"
        />
        <Details type={type}>
          <ChannelImage
            type={type}
            src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-youtube-social-media-round-icon-png-image_6315993.png"
          />
          <Texts>
            <Title>Test Video</Title>
            <ChannelName>Test Channel</ChannelName>
            <Info>
              974,764 views <br />• 14 hours ago{" "}
            </Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
