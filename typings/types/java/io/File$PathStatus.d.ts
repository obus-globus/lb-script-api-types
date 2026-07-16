import type { Class } from '../../java/lang/Class.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class File$PathStatus extends Enum<File$PathStatus> {
    static CHECKED: File$PathStatus;
    static INVALID: File$PathStatus;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): File$PathStatus;
    static values(): File$PathStatus[];
    private constructor()
    name(): "INVALID" | "CHECKED";
}