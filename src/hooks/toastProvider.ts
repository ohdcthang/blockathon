import { toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastProvider = (type: string, content: string, idLoading?: string) => {
    let notify;
    const toastConfig = {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom
    };
    switch (type) {
        case "success":
            //@ts-ignore
            notify = () => toast.success(content, { ...toastConfig });
            return notify();
        case "warning":
            //@ts-ignore
            notify = () => toast.warning(content, { ...toastConfig });
            return notify();
        case "error":
            //@ts-ignore
            notify = () => toast.error(content, { ...toastConfig });
            return notify();
        case "custom":
            //@ts-ignore
            notify = () => toast(content, { ...toastConfig });
            return notify();
        case "loading":
            //@ts-ignore
            const id = toast.loading(content, { ...toastConfig });
            return id;
        case "update success":
            //@ts-ignore
            return toast.update(idLoading, {
                render: `${content}`,
                type: "success",
                isLoading: false,
                ...toastConfig,
            });
        case "update reject":
            //@ts-ignore
            return toast.update(idLoading, {
                render: `${content}`,
                type: "error",
                isLoading: false,
                ...toastConfig,
            });
        default:
            return null;
    }
};

export default ToastProvider;