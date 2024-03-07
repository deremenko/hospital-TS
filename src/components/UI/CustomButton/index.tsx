import { CustomButtonProps } from './interfase';
import { StyledButton, StyledTextButton } from './styles';

const CustomButton: React.FC<CustomButtonProps> = ({ 
  textButton, 
  type, 
  icon, 
  nameIcon, 
  actionButton, 
  className 
}) => {
  return (
    <StyledButton 
      type={type} 
      onClick={actionButton} 
      className={`custom-button-body ${className || ''}`}
    >
      {icon && <img src={icon} alt={nameIcon} />}
      <StyledTextButton>{textButton}</StyledTextButton>
    </StyledButton>
  );
}

export default CustomButton;
