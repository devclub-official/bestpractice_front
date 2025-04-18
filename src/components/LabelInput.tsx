import { ReactNode } from 'react';
import * as Styled from './LabelInput.styles';

const LabelInput = ({ label, children }: { label: string; children: ReactNode }) => {
  return (
    <Styled.Container>
      <Styled.Label>{label}</Styled.Label>
      {children}
    </Styled.Container>
  );
};

export default LabelInput;
