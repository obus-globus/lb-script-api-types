import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DecimalQuantity } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/DecimalQuantity.d.ts'
import type { PluralRules$DecimalQuantitySamplesRange } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules$DecimalQuantitySamplesRange.d.ts'
import type { PluralRules$SampleType } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules$SampleType.d.ts'
export class PluralRules$DecimalQuantitySamples extends Object {
    private constructor(sampleType: PluralRules$SampleType, samples: PluralRules$DecimalQuantitySamplesRange[], bounded: boolean)
    bounded: boolean;
    sampleType: PluralRules$SampleType;
    readonly samples: PluralRules$DecimalQuantitySamplesRange[];
    addDecimalQuantitySamples(result: E[]): E[];
    addSamples(result: E[]): E[];
    addSamples(doubleResult: E[], dqResult: E[]): void;
    getSamples(): PluralRules$DecimalQuantitySamplesRange[];
    getStartEndSamples(target: DecimalQuantity[]): void;
    toString(): string;
}