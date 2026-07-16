import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class AccessMode extends Enum<AccessMode> {
    static EXECUTE: AccessMode;
    static READ: AccessMode;
    static WRITE: AccessMode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): AccessMode;
    static values(): AccessMode[];
    private constructor()
    name(): "READ" | "WRITE" | "EXECUTE";
}