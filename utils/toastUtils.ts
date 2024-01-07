import { Slide, toast, Theme } from "react-toastify";

interface ToastSuccess {
  theme: Theme;
  position: any;
  autoClose: number; //3 seconds
  hideProgressBar: boolean;
  closeOnClick: boolean;
  pauseOnHover: boolean;
  draggable: boolean;
  transition: any;
}

export const toastSuccess: ToastSuccess = {
  theme: "dark",
  position: toast.POSITION.TOP_RIGHT,
  autoClose: 2000, //3 seconds
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  transition: Slide,
};
