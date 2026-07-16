import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class UCharacter$IdentifierType extends Enum<UCharacter$IdentifierType> {
    static DEFAULT_IGNORABLE: UCharacter$IdentifierType;
    static DEPRECATED: UCharacter$IdentifierType;
    static EXCLUSION: UCharacter$IdentifierType;
    static INCLUSION: UCharacter$IdentifierType;
    static LIMITED_USE: UCharacter$IdentifierType;
    static NOT_CHARACTER: UCharacter$IdentifierType;
    static NOT_NFKC: UCharacter$IdentifierType;
    static NOT_XID: UCharacter$IdentifierType;
    static OBSOLETE: UCharacter$IdentifierType;
    static RECOMMENDED: UCharacter$IdentifierType;
    static TECHNICAL: UCharacter$IdentifierType;
    static UNCOMMON_USE: UCharacter$IdentifierType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): UCharacter$IdentifierType;
    static values(): UCharacter$IdentifierType[];
    private constructor()
    name(): "NOT_CHARACTER" | "DEPRECATED" | "DEFAULT_IGNORABLE" | "NOT_NFKC" | "NOT_XID" | "EXCLUSION" | "OBSOLETE" | "TECHNICAL" | "UNCOMMON_USE" | "LIMITED_USE" | "INCLUSION" | "RECOMMENDED";
}