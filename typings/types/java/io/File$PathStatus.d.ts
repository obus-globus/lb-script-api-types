import type { Class } from '../../java/lang/Class.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class File$PathStatus extends Enum<File$PathStatus> {
    static CHECKED: File$PathStatus;
    static INVALID: File$PathStatus;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): File$PathStatus;
    static values(): (Object | null)[];
    private constructor()
    name(): "INVALID" | "CHECKED";
}