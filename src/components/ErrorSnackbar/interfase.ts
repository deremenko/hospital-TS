export interface ErrorSnackbarProps {
  open: boolean;
  handleClose: () => void;
  errorMessage: string;
}