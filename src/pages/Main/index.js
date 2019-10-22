import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, Title, Form, Input, Submit} from './styles';

export default function Main() {
  return (
    <Container>
      <Title>Repositorios</Title>
      <Form>
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Procurar Repositório"
        />
        <Submit onPress={() => {}}>
          <Icon name="add" size={22} color="#FFF" />
        </Submit>
      </Form>
    </Container>
  );
}
