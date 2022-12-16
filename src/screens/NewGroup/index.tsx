import { useState } from 'react';

import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { HighLight } from '@components/HighLight';
import { Input } from '@components/Input';
import { useNavigation } from '@react-navigation/native';

import * as S from './styles';

export function NewGroup() {
  const [group, setGroup] = useState('');

  const { navigate } = useNavigation();

  function handleNew() {
    navigate('players', { group });
  }

  return (
    <S.Container>
      <Header showBackButton />

      <S.Content>
        <S.Icon />

        <HighLight
          title="Nova Turma"
          subtitle="Crie a turma para adicionar as pessoas"
        />

        <Input placeholder="Nome da turma" onChangeText={setGroup} />

        <Button
          title="Criar nova turma"
          style={{ marginTop: 20 }}
          onPress={handleNew}
        />
      </S.Content>
    </S.Container>
  );
}
