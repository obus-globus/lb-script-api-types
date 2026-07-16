import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class PosixFilePermission extends Enum<PosixFilePermission> {
    static GROUP_EXECUTE: PosixFilePermission;
    static GROUP_READ: PosixFilePermission;
    static GROUP_WRITE: PosixFilePermission;
    static OTHERS_EXECUTE: PosixFilePermission;
    static OTHERS_READ: PosixFilePermission;
    static OTHERS_WRITE: PosixFilePermission;
    static OWNER_EXECUTE: PosixFilePermission;
    static OWNER_READ: PosixFilePermission;
    static OWNER_WRITE: PosixFilePermission;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): PosixFilePermission;
    static values(): PosixFilePermission[];
    private constructor()
    name(): "OWNER_READ" | "OWNER_WRITE" | "OWNER_EXECUTE" | "GROUP_READ" | "GROUP_WRITE" | "GROUP_EXECUTE" | "OTHERS_READ" | "OTHERS_WRITE" | "OTHERS_EXECUTE";
}