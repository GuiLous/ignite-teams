import { Keyboard, TouchableWithoutFeedback } from 'react-native';

import { ButtonIcon } from '@components/ButtonIcon';
import { Filter } from '@components/Filter';
import { Header } from '@components/Header';
import { HighLight } from '@components/HighLight';
import { Input } from '@components/Input';

import * as S from './styles';

export function Players() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <S.Container>
        <Header showBackButton />

        <HighLight
          title="Nome da turma"
          subtitle="Adicione a galera e separe os times"
        />

        <S.Form>
          <Input placeholder="Nome da pessoa" autoCorrect={false} />
          <ButtonIcon icon="add" />
        </S.Form>

        <Filter title="Time A" isActive />
      </S.Container>
    </TouchableWithoutFeedback>
  );
}
