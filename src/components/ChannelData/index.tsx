import React, { useRef, useEffect } from 'react';
import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        <ChannelMessage
          author="Vestibular"
          date="08/03/2022"
          content="Fez com React e Typescript?"
        />
        <ChannelMessage
          author="Lucas Lima"
          date="08/03/2022"
          content="Sim po"
        />
        <ChannelMessage
          author="Matozo"
          date="08/03/2022"
          content={
            <>
              <Mention>@Lucas Lima</Mention> , manja muito
            </>
          }
          hasMention
          isBot
        />

        {Array.from(Array(15).keys()).map(n => (
          <ChannelMessage
            key={n}
            author="Lucas Lima"
            date="08/03/2022"
            content="Teste de Script"
          />
        ))}
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre " />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
