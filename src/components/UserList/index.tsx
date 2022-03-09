import React from 'react';

import { Container, User, Role, Avatar } from './styles';

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Vestibular" />

      <Role>Offline - 9</Role>
      <UserRow nickname="Matozo" />
      <UserRow nickname="Ceguinha" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Lucas Lima" isBot />
      <UserRow nickname="Pro" />
      <UserRow nickname="Gra" />
      <UserRow nickname="Ma" />
      <UserRow nickname="Dor" isBot />
      <UserRow nickname="FullStack" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
    </Container>
  );
};

export default UserList;
