import * as React from 'react';
import { default as MuiButton } from '@material-ui/core/Button';

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

const Button: React.FunctionComponent<ButtonProps> = ({
  variant = 'contained',
  color,
  disabled = false,
  href,
  onClick,
  children,
}): React.ReactElement => {
  return (
    <div>
      <MuiButton variant={variant} color={color} disabled={disabled} href={href} onClick={onClick}>
        {children}
      </MuiButton>
    </div>
  );
};

export default Button;