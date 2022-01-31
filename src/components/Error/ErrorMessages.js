import { toast } from 'react-toastify';

const options = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export const onSuccess = message => {
  console.log('message', message);
  toast.success(message, options);
};

export const onWarning = message => {
  console.log('message2', message);

  toast.warn(message, options);
};

export const onError = message => {
  console.log('message3', message);

  toast.error(message, options);
};

const ErrorMessage = {
  onSuccess,
  onWarning,
  onError,
};

export default ErrorMessage;
