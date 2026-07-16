import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class AclEntryFlag extends Enum<AclEntryFlag> {
    static DIRECTORY_INHERIT: AclEntryFlag;
    static FILE_INHERIT: AclEntryFlag;
    static INHERIT_ONLY: AclEntryFlag;
    static NO_PROPAGATE_INHERIT: AclEntryFlag;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): AclEntryFlag;
    static values(): AclEntryFlag[];
    private constructor()
    name(): "FILE_INHERIT" | "DIRECTORY_INHERIT" | "NO_PROPAGATE_INHERIT" | "INHERIT_ONLY";
}