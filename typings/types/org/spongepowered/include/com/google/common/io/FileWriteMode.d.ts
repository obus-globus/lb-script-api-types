import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class FileWriteMode extends Enum<FileWriteMode> {
    static APPEND: FileWriteMode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): FileWriteMode;
    static values(): FileWriteMode[];
    private constructor()
    name(): "APPEND";
}