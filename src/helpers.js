import { toast } from "react-toastify";

export const createLabel = (label) => {
    return (
        <span className="inputTextLabel">
            {label} <span className="text-danger">*</span>
        </span>
    );
};

export const createError = (textError) => {
    return (
        toast.error(textError, {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    )
}
