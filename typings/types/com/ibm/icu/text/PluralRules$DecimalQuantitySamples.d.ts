import type { DecimalQuantity } from '../../../../com/ibm/icu/impl/number/DecimalQuantity.d.ts'
import type { PluralRules$DecimalQuantitySamplesRange } from '../../../../com/ibm/icu/text/PluralRules$DecimalQuantitySamplesRange.d.ts'
import type { PluralRules$SampleType } from '../../../../com/ibm/icu/text/PluralRules$SampleType.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PluralRules$DecimalQuantitySamples extends Object {
    private constructor(arg0: PluralRules$SampleType, arg1: PluralRules$DecimalQuantitySamplesRange[], arg2: boolean)
    bounded: boolean;
    sampleType: PluralRules$SampleType;
    readonly samples: PluralRules$DecimalQuantitySamplesRange[];
    addDecimalQuantitySamples(arg0: E[]): E[];
    addSamples(arg0: E[]): E[];
    addSamples(arg0: E[], arg1: E[]): void;
    getSamples(): PluralRules$DecimalQuantitySamplesRange[];
    getStartEndSamples(arg0: DecimalQuantity[]): void;
    toString(): string;
}