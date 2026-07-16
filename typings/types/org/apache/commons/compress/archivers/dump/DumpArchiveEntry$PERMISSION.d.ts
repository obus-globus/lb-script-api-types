import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class DumpArchiveEntry$PERMISSION extends Enum<DumpArchiveEntry$PERMISSION> {
    static GROUP_EXEC: DumpArchiveEntry$PERMISSION;
    static GROUP_READ: DumpArchiveEntry$PERMISSION;
    static GROUP_WRITE: DumpArchiveEntry$PERMISSION;
    static SETGUI: DumpArchiveEntry$PERMISSION;
    static SETUID: DumpArchiveEntry$PERMISSION;
    static STICKY: DumpArchiveEntry$PERMISSION;
    static USER_EXEC: DumpArchiveEntry$PERMISSION;
    static USER_READ: DumpArchiveEntry$PERMISSION;
    static USER_WRITE: DumpArchiveEntry$PERMISSION;
    static WORLD_EXEC: DumpArchiveEntry$PERMISSION;
    static WORLD_READ: DumpArchiveEntry$PERMISSION;
    static WORLD_WRITE: DumpArchiveEntry$PERMISSION;
    static find(paramarg0: number): DumpArchiveEntry$PERMISSION[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): DumpArchiveEntry$PERMISSION;
    static values(): DumpArchiveEntry$PERMISSION[];
    private constructor(arg2: number)
    // private code: number;
    name(): "SETUID" | "SETGUI" | "STICKY" | "USER_READ" | "USER_WRITE" | "USER_EXEC" | "GROUP_READ" | "GROUP_WRITE" | "GROUP_EXEC" | "WORLD_READ" | "WORLD_WRITE" | "WORLD_EXEC";
}