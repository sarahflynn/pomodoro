import * as React from 'react';
import { default as MuiButton } from '@material-ui/core/Button';
import styled from 'react-emotion';

interface ButtonProps {
  variant?:
    | 'contained'
    | 'text'
    | 'flat'
    | 'outlined'
    | 'raised'
    | 'fab'
    | 'extendedFab';
  color?: 'default' | 'inherit' | 'primary' | 'secondary';
  disabled?: boolean;
  href?: string;
  onClick: () => void;
  children: string;
}

const ButtonContainer = styled('div')(`
  margin-top: 24px;
  display: flex;
  justify-content: center;
`);

const Button: React.FunctionComponent<ButtonProps> = ({
  variant = 'contained',
  color,
  disabled = false,
  href,
  onClick,
  children,
}): React.ReactElement => {
  return (
    <ButtonContainer>
      <MuiButton variant={variant} color={color} disabled={disabled} href={href} onClick={onClick}>
        {children}
      </MuiButton>
    </ButtonContainer>
  );
};

export default Button;