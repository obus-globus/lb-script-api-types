import type { NumberRangeFormatter$RangeCollapse } from '../../../../../../com/ibm/icu/number/NumberRangeFormatter$RangeCollapse.d.ts'
import type { NumberRangeFormatter$RangeIdentityFallback } from '../../../../../../com/ibm/icu/number/NumberRangeFormatter$RangeIdentityFallback.d.ts'
import type { UnlocalizedNumberFormatter } from '../../../../../../com/ibm/icu/number/UnlocalizedNumberFormatter.d.ts'
import type { ULocale } from '../../../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class RangeMacroProps extends Object {
    constructor()
    collapse: NumberRangeFormatter$RangeCollapse;
    formatter1: UnlocalizedNumberFormatter;
    formatter2: UnlocalizedNumberFormatter;
    identityFallback: NumberRangeFormatter$RangeIdentityFallback;
    loc: ULocale;
    sameFormatters: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
}