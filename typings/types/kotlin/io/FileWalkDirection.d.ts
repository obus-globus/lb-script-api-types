import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class FileWalkDirection extends Enum<FileWalkDirection> implements Serializable {
    static BOTTOM_UP: FileWalkDirection;
    static TOP_DOWN: FileWalkDirection;
    static getEntries(): FileWalkDirection[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): FileWalkDirection;
    static values(): FileWalkDirection[];
    private constructor()
    name(): "TOP_DOWN" | "BOTTOM_UP";
}