import { ButtonStyles, CustomButtonProps } from './CustomButtonProps';

export default function CustomButton({
  children,
  className,
  icon,
  variant = 'green',
  ...props
}: CustomButtonProps) {
  return (
    <button
      className={`flex items-center justify-center gap-2 rounded-md p-2 transition ${ButtonStyles[variant]} ${className}`}
      {...props}
    >
      {icon && icon}
      {children}
    </button>
  );
}
