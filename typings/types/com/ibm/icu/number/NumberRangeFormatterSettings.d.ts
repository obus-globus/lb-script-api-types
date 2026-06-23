import type { RangeMacroProps } from '../../../../com/ibm/icu/impl/number/range/RangeMacroProps.d.ts'
import type { NumberRangeFormatter$RangeCollapse } from '../../../../com/ibm/icu/number/NumberRangeFormatter$RangeCollapse.d.ts'
import type { NumberRangeFormatter$RangeIdentityFallback } from '../../../../com/ibm/icu/number/NumberRangeFormatter$RangeIdentityFallback.d.ts'
import type { UnlocalizedNumberFormatter } from '../../../../com/ibm/icu/number/UnlocalizedNumberFormatter.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class NumberRangeFormatterSettings<T extends NumberRangeFormatterSettings<any>> extends Object {
    constructor(arg0: NumberRangeFormatterSettings<any>, arg1: number, arg2: Object)
    // private key: number;
    // private parent: NumberRangeFormatterSettings<any>;
    // private resolvedMacros: RangeMacroProps;
    // private value: Object;
    collapse(arg0: NumberRangeFormatter$RangeCollapse): T;
    create(arg0: number, arg1: Object): T;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    identityFallback(arg0: NumberRangeFormatter$RangeIdentityFallback): T;
    numberFormatterBoth(arg0: UnlocalizedNumberFormatter): T;
    numberFormatterFirst(arg0: UnlocalizedNumberFormatter): T;
    numberFormatterSecond(arg0: UnlocalizedNumberFormatter): T;
    resolve(): RangeMacroProps;
}