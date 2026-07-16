import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class NumberFormatter$RoundingPriority extends Enum<NumberFormatter$RoundingPriority> {
    static RELAXED: NumberFormatter$RoundingPriority;
    static STRICT: NumberFormatter$RoundingPriority;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): NumberFormatter$RoundingPriority;
    static values(): NumberFormatter$RoundingPriority[];
    private constructor()
    name(): "RELAXED" | "STRICT";
}