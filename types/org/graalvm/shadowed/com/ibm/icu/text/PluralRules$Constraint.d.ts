import type { Serializable } from '../../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { PluralRules$IFixedDecimal } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules$IFixedDecimal.d.ts'
import type { PluralRules$SampleType } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules$SampleType.d.ts'
export interface PluralRules$Constraint extends Serializable, Object{
    isFulfilled(n: PluralRules$IFixedDecimal): boolean;
    isLimited(sampleType: PluralRules$SampleType): boolean;
}