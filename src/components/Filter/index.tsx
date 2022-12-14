import { TouchableOpacityProps } from 'react-native';

import * as S from './styles';

interface FilterProps extends TouchableOpacityProps, S.FilterStyleProps {
  title: string;
}

export function Filter({ title, isActive = false, ...rest }: FilterProps) {
  return (
    <S.Container {...rest} isActive={isActive}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
