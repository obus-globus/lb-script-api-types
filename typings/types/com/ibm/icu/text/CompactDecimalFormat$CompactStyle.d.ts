import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class CompactDecimalFormat$CompactStyle extends Enum<CompactDecimalFormat$CompactStyle> {
    static LONG: CompactDecimalFormat$CompactStyle;
    static SHORT: CompactDecimalFormat$CompactStyle;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): CompactDecimalFormat$CompactStyle;
    static values(): CompactDecimalFormat$CompactStyle[];
    private constructor()
    name(): "SHORT" | "LONG";
}