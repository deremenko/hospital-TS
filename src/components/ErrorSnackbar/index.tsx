import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { ErrorSnackbarProps } from './interfase'

const ErrorSnackbar: React.FC<ErrorSnackbarProps> =  ({ open, handleClose, errorMessage }) => {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <MuiAlert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
        {errorMessage}
      </MuiAlert>
    </Snackbar>
  );
};

export default ErrorSnackbar;
