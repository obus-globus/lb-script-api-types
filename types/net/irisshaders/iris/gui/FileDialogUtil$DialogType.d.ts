import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class FileDialogUtil$DialogType extends Enum<FileDialogUtil$DialogType> {
    static OPEN: FileDialogUtil$DialogType;
    static SAVE: FileDialogUtil$DialogType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): FileDialogUtil$DialogType;
    static values(): (Object | null)[];
    private constructor()
    name(): "SAVE" | "OPEN";
}