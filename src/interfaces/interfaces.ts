import { Contact } from "../api provider/api_provider";

interface DialogData {
    handleCancelAdd: Function;
    handleCancelUpdate: Function;
    isUpdate?: boolean;
    contact?: Contact;
}

export interface ContactDataState {
    name: string,
    email: string,
    mobile: string,
    landline: string,
    website: string,
    address: string,
    nameWarning: string,
    mobileWarning: string,
    emailWarning: string
}

export default DialogData;