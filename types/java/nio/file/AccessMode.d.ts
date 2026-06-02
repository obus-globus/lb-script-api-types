import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class AccessMode extends Enum<AccessMode> {
    static EXECUTE: AccessMode;
    static READ: AccessMode;
    static WRITE: AccessMode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): AccessMode;
    static values(): (Object | null)[];
    private constructor()
    name(): "READ" | "WRITE" | "EXECUTE";
}