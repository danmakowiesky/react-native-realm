import React, {useState} from 'react';
import {Keyboard} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';
import getRealm from '~/services/realm';
import Repository from '~/components/Repository';
import {Container, Title, Form, Input, Submit, List} from './styles';

export default function Main() {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);

  async function saveRepository(repository) {
    const data = {
      id: repository.id,
      name: repository.name,
      fullName: repository.full_name,
      description: repository.description,
      stars: repository.stargazers_count,
      forks: repository.forks_count,
    };

    const realm = await getRealm();

    realm.write(() => {
      realm.create('Repository', data);
    });
  }

  async function handleAddRepository() {
    try {
      const response = await api.get(`/repos/${input}`);

      await saveRepository(response.data);

      setInput('');
      setError(false);
      Keyboard.dismiss();
    } catch (err) {
      setError(true);
    }
  }
  return (
    <Container>
      <Title>Repositorios</Title>
      <Form>
        <Input
          value={input}
          error={error}
          onChangeText={text => setInput(text)}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Procurar Repositório"
        />
        <Submit onPress={handleAddRepository}>
          <Icon name="add" size={22} color="#FFF" />
        </Submit>
      </Form>

      <List
        keyboardShouldPersistTaps="handled"
        data={[
          {
            id: 1,
            name: 'teste',
            description: 'qwert',
            stars: 1234,
            forks: 1234,
          },
        ]}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => <Repository data={item} />}
      />
    </Container>
  );
}
