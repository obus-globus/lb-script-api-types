import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class CefDialogHandler$FileDialogMode extends Enum<CefDialogHandler$FileDialogMode> {
    static FILE_DIALOG_OPEN: CefDialogHandler$FileDialogMode;
    static FILE_DIALOG_OPEN_FOLDER: CefDialogHandler$FileDialogMode;
    static FILE_DIALOG_OPEN_MULTIPLE: CefDialogHandler$FileDialogMode;
    static FILE_DIALOG_SAVE: CefDialogHandler$FileDialogMode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): CefDialogHandler$FileDialogMode;
    static values(): CefDialogHandler$FileDialogMode[];
    private constructor()
    name(): "FILE_DIALOG_OPEN" | "FILE_DIALOG_OPEN_MULTIPLE" | "FILE_DIALOG_OPEN_FOLDER" | "FILE_DIALOG_SAVE";
}