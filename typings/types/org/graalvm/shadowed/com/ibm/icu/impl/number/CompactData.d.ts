import type { JavaMap } from '../../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { CompactData$CompactType } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/CompactData$CompactType.d.ts'
import type { DecimalQuantity } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/DecimalQuantity.d.ts'
import type { MultiplierProducer } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/MultiplierProducer.d.ts'
import type { CompactDecimalFormat$CompactStyle } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CompactDecimalFormat$CompactStyle.d.ts'
import type { PluralRules } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules.d.ts'
import type { ULocale } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class CompactData extends Object implements MultiplierProducer {
    constructor()
    // private isEmpty: boolean;
    // private largestMagnitude: number;
    // private multipliers: number[];
    // private patterns: string[];
    getMultiplier(magnitude: number): number;
    getPattern(magnitude: number, rules: PluralRules, dq: DecimalQuantity): string;
    getUniquePatterns(output: string[]): void;
    populate(powersToPluralsToPatterns: JavaMap<string, JavaMap<string, string>>): void;
    populate(locale: ULocale, nsName: string, compactStyle: CompactDecimalFormat$CompactStyle, compactType: CompactData$CompactType): void;
}