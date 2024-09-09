import { ButtonHTMLAttributes, ReactNode } from 'react';

export const ButtonStyles = {
  green: `bg-jungle-100 active:bg-jungle-200`,
  blue: `bg-ocean-100 active:bg-ocean-200`,
};

export type ButtonVariant = 'green' | 'blue';

export type CustomButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: ReactNode;
  variant?: ButtonVariant;
};
