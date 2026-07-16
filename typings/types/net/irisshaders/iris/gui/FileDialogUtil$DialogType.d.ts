import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class FileDialogUtil$DialogType extends Enum<FileDialogUtil$DialogType> {
    static OPEN: FileDialogUtil$DialogType;
    static SAVE: FileDialogUtil$DialogType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): FileDialogUtil$DialogType;
    static values(): FileDialogUtil$DialogType[];
    private constructor()
    name(): "SAVE" | "OPEN";
}