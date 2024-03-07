export interface CustomButtonProps {
  textButton: string;
  type: "button" | "submit" | "reset";
  icon?: string;
  nameIcon?: string;
  actionButton: () => void;
  className?: string;
}