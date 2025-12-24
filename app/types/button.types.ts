export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
  type?: 'button' | 'submit';
}
