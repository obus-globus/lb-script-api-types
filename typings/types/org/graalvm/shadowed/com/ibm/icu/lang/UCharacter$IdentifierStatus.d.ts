import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class UCharacter$IdentifierStatus extends Enum<UCharacter$IdentifierStatus> {
    static ALLOWED: UCharacter$IdentifierStatus;
    static RESTRICTED: UCharacter$IdentifierStatus;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): UCharacter$IdentifierStatus;
    static values(): UCharacter$IdentifierStatus[];
    private constructor()
    name(): "RESTRICTED" | "ALLOWED";
}