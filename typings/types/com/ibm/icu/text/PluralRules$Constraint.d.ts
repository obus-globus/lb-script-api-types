import type { PluralRules$IFixedDecimal } from '../../../../com/ibm/icu/text/PluralRules$IFixedDecimal.d.ts'
import type { PluralRules$SampleType } from '../../../../com/ibm/icu/text/PluralRules$SampleType.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface PluralRules$Constraint extends Serializable, Object{
    isFulfilled(arg0: PluralRules$IFixedDecimal): boolean;
    isLimited(arg0: PluralRules$SampleType): boolean;
}