import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class UCharacter$IndicConjunctBreak extends Enum<UCharacter$IndicConjunctBreak> {
    static CONSONANT: UCharacter$IndicConjunctBreak;
    static EXTEND: UCharacter$IndicConjunctBreak;
    static LINKER: UCharacter$IndicConjunctBreak;
    static NONE: UCharacter$IndicConjunctBreak;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): UCharacter$IndicConjunctBreak;
    static values(): (Object | null)[];
    private constructor()
    name(): "NONE" | "CONSONANT" | "EXTEND" | "LINKER";
}