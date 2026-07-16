import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class UCharacter$IndicConjunctBreak extends Enum<UCharacter$IndicConjunctBreak> {
    static CONSONANT: UCharacter$IndicConjunctBreak;
    static EXTEND: UCharacter$IndicConjunctBreak;
    static LINKER: UCharacter$IndicConjunctBreak;
    static NONE: UCharacter$IndicConjunctBreak;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): UCharacter$IndicConjunctBreak;
    static values(): UCharacter$IndicConjunctBreak[];
    private constructor()
    name(): "NONE" | "CONSONANT" | "EXTEND" | "LINKER";
}