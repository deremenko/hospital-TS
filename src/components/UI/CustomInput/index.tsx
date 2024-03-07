import { ChangeEvent } from 'react';
import { CustomInputProps } from './interfase';
import { StyledInput, StyledInputLine, StyledError } from './styles';

const CustomInput: React.FC<CustomInputProps> = ({
  idLabel,
  label,
  value,
  error,
  placeholder,
  handleInputChange,
  name,
  className = '',
  type,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleInputChange(event.target.value, event.target.name);
  };

  return (
    <>
      <StyledInput className={`custom-input-container ${className}`}>
        <label htmlFor={idLabel}>{label}</label>
        <StyledInputLine
          id={idLabel}
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={handleChange}
          name={name}
        />
        {error && <StyledError>{error}</StyledError>}
      </StyledInput>
    </>
  );
};

export default CustomInput;
