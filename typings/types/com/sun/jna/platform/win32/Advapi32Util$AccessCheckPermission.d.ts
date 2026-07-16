import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class Advapi32Util$AccessCheckPermission extends Enum<Advapi32Util$AccessCheckPermission> {
    static EXECUTE: Advapi32Util$AccessCheckPermission;
    static READ: Advapi32Util$AccessCheckPermission;
    static WRITE: Advapi32Util$AccessCheckPermission;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Advapi32Util$AccessCheckPermission;
    static values(): Advapi32Util$AccessCheckPermission[];
    private constructor(arg2: number)
    readonly code: number;
    getCode(): number;
    name(): "READ" | "WRITE" | "EXECUTE";
}