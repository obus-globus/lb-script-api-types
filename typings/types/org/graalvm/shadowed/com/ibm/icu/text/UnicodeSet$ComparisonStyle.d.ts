import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class UnicodeSet$ComparisonStyle extends Enum<UnicodeSet$ComparisonStyle> {
    static LEXICOGRAPHIC: UnicodeSet$ComparisonStyle;
    static LONGER_FIRST: UnicodeSet$ComparisonStyle;
    static SHORTER_FIRST: UnicodeSet$ComparisonStyle;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): UnicodeSet$ComparisonStyle;
    static values(): UnicodeSet$ComparisonStyle[];
    private constructor()
    name(): "SHORTER_FIRST" | "LEXICOGRAPHIC" | "LONGER_FIRST";
}