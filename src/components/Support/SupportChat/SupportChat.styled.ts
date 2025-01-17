import styled from 'styled-components';

import { IconButton } from '@/components/styled';

export const Container = styled.div`
  background-image: url('/chat_background.jpg');
  display: flex;
  flex-direction: column;
  flex-grow: 10;
  height: calc(100dvh - 170px);
  padding-bottom: 80px;
  position: relative;
`;

export const Conversation = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 10;
  gap: 80px;
  overflow-y: scroll;
  padding: 80px calc(20% - 6px) 80px 20%;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--clr-c);
  }

  @media screen and (width <= 1024px) {
    padding: 40px 74px 40px 80px;
  }

  @media screen and (width <= 480px) {
    padding: 40px 34px 40px 40px;
  }
`;

export const SendButton = styled(IconButton)`
  background-color: var(--clr-c);
  height: 60px;
  position: absolute;
  right: -90px;
  top: 30px;

  @media screen and (width <= 1024px) {
    right: -30px;
    top: -30px;
  }
`;
