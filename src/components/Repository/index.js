import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Container, Description, Stats, Stat, StatCount, Name} from './style';

export default function Repository({data}) {
  return (
    <Container>
      <Name>{data.title}</Name>
      <Description>{data.description}</Description>
      <Stats>
        <Stat>
          <Icon name="star" size={16} color="#333" />
          <StatCount>{data.stars}</StatCount>
        </Stat>
        <Stat>
          <Icon name="code-fork" size={16} color="#333" />
          <StatCount>{data.stars}</StatCount>
        </Stat>
      </Stats>
    </Container>
  );
}
