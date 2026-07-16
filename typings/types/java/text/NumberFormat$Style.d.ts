import type { Class } from '../../java/lang/Class.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class NumberFormat$Style extends Enum<NumberFormat$Style> {
    static LONG: NumberFormat$Style;
    static SHORT: NumberFormat$Style;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): NumberFormat$Style;
    static values(): NumberFormat$Style[];
    private constructor()
    name(): "SHORT" | "LONG";
}