import type { CompactData$CompactType } from '../../../../../com/ibm/icu/impl/number/CompactData$CompactType.d.ts'
import type { DecimalQuantity } from '../../../../../com/ibm/icu/impl/number/DecimalQuantity.d.ts'
import type { MultiplierProducer } from '../../../../../com/ibm/icu/impl/number/MultiplierProducer.d.ts'
import type { CompactDecimalFormat$CompactStyle } from '../../../../../com/ibm/icu/text/CompactDecimalFormat$CompactStyle.d.ts'
import type { PluralRules } from '../../../../../com/ibm/icu/text/PluralRules.d.ts'
import type { ULocale } from '../../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CompactData extends Object implements MultiplierProducer {
    constructor()
    // private isEmpty: boolean;
    // private largestMagnitude: number;
    // private multipliers: number[];
    // private patterns: string[];
    getMultiplier(arg0: number): number;
    getPattern(arg0: number, arg1: PluralRules, arg2: DecimalQuantity): string;
    getUniquePatterns(arg0: string[]): void;
    populate(arg0: ULocale, arg1: string, arg2: CompactDecimalFormat$CompactStyle, arg3: CompactData$CompactType): void;
    populate(arg0: { [key: string]: { [key: string]: string } }): void;
}