import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class UCharacter$IdentifierStatus extends Enum<UCharacter$IdentifierStatus> {
    static ALLOWED: UCharacter$IdentifierStatus;
    static RESTRICTED: UCharacter$IdentifierStatus;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): UCharacter$IdentifierStatus;
    static values(): UCharacter$IdentifierStatus[];
    private constructor()
    name(): "RESTRICTED" | "ALLOWED";
}