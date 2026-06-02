import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { RangeMacroProps } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/range/RangeMacroProps.d.ts'
import type { NumberRangeFormatter$RangeCollapse } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/NumberRangeFormatter$RangeCollapse.d.ts'
import type { NumberRangeFormatter$RangeIdentityFallback } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/NumberRangeFormatter$RangeIdentityFallback.d.ts'
import type { UnlocalizedNumberFormatter } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/UnlocalizedNumberFormatter.d.ts'
export abstract class NumberRangeFormatterSettings<T extends NumberRangeFormatterSettings<Object>> extends Object {
    constructor(parent: NumberRangeFormatterSettings<Object>, key: number, value: Object)
    // private key: number;
    // private parent: NumberRangeFormatterSettings<Object>;
    // private resolvedMacros: RangeMacroProps;
    // private value: Object;
    collapse(collapse: NumberRangeFormatter$RangeCollapse): T;
    create(key: number, value: Object): T;
    equals(other: Object | null): boolean;
    hashCode(): number;
    identityFallback(identityFallback: NumberRangeFormatter$RangeIdentityFallback): T;
    numberFormatterBoth(formatter: UnlocalizedNumberFormatter): T;
    numberFormatterFirst(formatterFirst: UnlocalizedNumberFormatter): T;
    numberFormatterSecond(formatterSecond: UnlocalizedNumberFormatter): T;
    resolve(): RangeMacroProps;
}