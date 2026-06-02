import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class FileWalkDirection extends Enum<FileWalkDirection> implements Serializable {
    static BOTTOM_UP: FileWalkDirection;
    static TOP_DOWN: FileWalkDirection;
    static getEntries(): FileWalkDirection[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): FileWalkDirection;
    static values(): (Object | null)[];
    private constructor()
    name(): "TOP_DOWN" | "BOTTOM_UP";
}