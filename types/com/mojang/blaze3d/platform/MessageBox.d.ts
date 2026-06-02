import type { Object } from '../../../../java/lang/Object.d.ts'
export class MessageBox extends Object {
    static BUTTON_CANCEL_OR_NO: number;
    static BUTTON_NO: number;
    static BUTTON_OK_OR_YES: number;
    static ICON_ERROR: string;
    static ICON_INFO: string;
    static ICON_QUESTION: string;
    static ICON_WARNING: string;
    static TYPE_OK: string;
    static TYPE_OK_CANCEL: string;
    static TYPE_YES_NO: string;
    static TYPE_YES_NO_CANCEL: string;
    static error(parammessage: string): void;
    static errorWithContinue(parammessage: string): boolean;
    constructor()
}