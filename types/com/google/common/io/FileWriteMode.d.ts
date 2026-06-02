import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class FileWriteMode extends Enum<FileWriteMode> {
    static APPEND: FileWriteMode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): FileWriteMode;
    static values(): (Object | null)[];
    private constructor()
    name(): "APPEND";
}