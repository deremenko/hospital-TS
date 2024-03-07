export interface CustomInputProps {
  idLabel: string;
  label: string;
  value: string;
  error: string | null;
  placeholder: string;
  handleInputChange: (value: string, name: string) => void;
  name: string;
  className?: string;
  type: string;
}