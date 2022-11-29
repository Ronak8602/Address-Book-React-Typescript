import { Contact } from "../api provider/api_provider";

interface DialogData {
    handleCancelAdd: Function;
    handleCancelUpdate: Function;
    isUpdate?: boolean;
    contact?: Contact;
}

export default DialogData;