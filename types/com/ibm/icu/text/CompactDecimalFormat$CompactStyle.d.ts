import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class CompactDecimalFormat$CompactStyle extends Enum<CompactDecimalFormat$CompactStyle> {
    static LONG: CompactDecimalFormat$CompactStyle;
    static SHORT: CompactDecimalFormat$CompactStyle;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CompactDecimalFormat$CompactStyle;
    static values(): (Object | null)[];
    private constructor()
    name(): "SHORT" | "LONG";
}