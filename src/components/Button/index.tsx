import { TouchableOpacityProps } from 'react-native';

import * as S from './styles';
import { ButtonTypeStyleProps } from './styles';

interface ListEmptyProps extends TouchableOpacityProps {
  title: string;
  type?: ButtonTypeStyleProps;
}

export function Button({ title, type = 'PRIMARY', ...rest }: ListEmptyProps) {
  return (
    <S.Container type={type} {...rest}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
