import React from "react";
import styled from "styled-components";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ShareIcon from "@mui/icons-material/Share";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import Comments from "../components/Comments";
import Card from "../components/Card";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const Content = styled.div`
  flex: 5;
`;

const VideoWrapper = styled.div``;

const Title = styled.h2`
  font-size: 14px;
  font-wight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  font-size: 10px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Hr = styled.hr`
  border: 0.5px solid ${({ theme }) => theme.soft};
  margin: 15px 0px;
`;

const Recommendation = styled.div`
  flex: 2;
  margin-left: 10px;
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.h3`
  font-weight: 500;
`;
const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;
const Description = styled.p`
  font-size: 14px;
`;

const Subscribe = styled.button`
  background-color: red;
  text-weight: 500;
  color: white;
  border: none;
  border-radius: 5px;
  height: 36px;
  width: 150px;
  cursor: pointer;
`;

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="900px"
            height="600px"
            src="https://www.youtube.com/embed/q8-rX-PNqog"
            title="Proud Moment for India as Australian PM sends Message to China from INS Vikrant Aircraft Carrier"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </VideoWrapper>
        <Title>
          Proud Moment for India as Australian PM sends Message to China from
          INS Vikrant Aircraft Carrier
        </Title>
        <Details>
          <Info>974,764 views • 14 hours ago </Info>
          <Buttons>
            <Button>
              <ThumbUpIcon />
              123
            </Button>
            <Button>
              <ThumbDownIcon />
              Dislike
            </Button>
            <Button>
              <SubscriptionsIcon />
              Subscribe
            </Button>
            <Button>
              <ShareIcon />
              Share
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <ChannelImage src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-youtube-social-media-round-icon-png-image_6315993.png" />
            <ChannelDetail>
              <ChannelName>Test Channel</ChannelName>
              <ChannelCounter>654K Subscriber</ChannelCounter>
              <Description>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
        <Hr />
        <Comments />
      </Content>
      <Recommendation>
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
      </Recommendation>
    </Container>
  );
};

export default Video;
