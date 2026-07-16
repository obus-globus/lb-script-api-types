import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class AclEntryType extends Enum<AclEntryType> {
    static ALARM: AclEntryType;
    static ALLOW: AclEntryType;
    static AUDIT: AclEntryType;
    static DENY: AclEntryType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): AclEntryType;
    static values(): AclEntryType[];
    private constructor()
    name(): "ALLOW" | "DENY" | "AUDIT" | "ALARM";
}