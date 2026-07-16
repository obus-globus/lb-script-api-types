import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class FileChangeType extends Enum<FileChangeType> {
    static Changed: FileChangeType;
    static Created: FileChangeType;
    static Deleted: FileChangeType;
    static get(paramintValue: number): FileChangeType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): FileChangeType;
    static values(): FileChangeType[];
    private constructor(intValue: number)
    readonly intValue: number;
    getIntValue(): number;
    name(): "Created" | "Changed" | "Deleted";
}