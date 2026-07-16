import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class CefJSDialogHandler$JSDialogType extends Enum<CefJSDialogHandler$JSDialogType> {
    static JSDIALOGTYPE_ALERT: CefJSDialogHandler$JSDialogType;
    static JSDIALOGTYPE_CONFIRM: CefJSDialogHandler$JSDialogType;
    static JSDIALOGTYPE_PROMPT: CefJSDialogHandler$JSDialogType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): CefJSDialogHandler$JSDialogType;
    static values(): CefJSDialogHandler$JSDialogType[];
    private constructor()
    name(): "JSDIALOGTYPE_ALERT" | "JSDIALOGTYPE_CONFIRM" | "JSDIALOGTYPE_PROMPT";
}