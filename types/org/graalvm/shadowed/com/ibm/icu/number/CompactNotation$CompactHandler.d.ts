import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CompactData } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/CompactData.d.ts'
import type { CompactData$CompactType } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/CompactData$CompactType.d.ts'
import type { DecimalQuantity } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/DecimalQuantity.d.ts'
import type { MicroProps } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/MicroProps.d.ts'
import type { MicroPropsGenerator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/MicroPropsGenerator.d.ts'
import type { MutablePatternModifier } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/MutablePatternModifier.d.ts'
import type { MutablePatternModifier$ImmutablePatternModifier } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/MutablePatternModifier$ImmutablePatternModifier.d.ts'
import type { CompactNotation } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/CompactNotation.d.ts'
import type { PluralRules } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class CompactNotation$CompactHandler extends Object implements MicroPropsGenerator {
    private constructor(notation: CompactNotation, locale: ULocale, nsName: string, compactType: CompactData$CompactType, rules: PluralRules, buildReference: MutablePatternModifier, safe: boolean, parent: MicroPropsGenerator)
    // private data: CompactData;
    // private parent: MicroPropsGenerator;
    // private precomputedMods: { [key: string]: MutablePatternModifier$ImmutablePatternModifier };
    // private rules: PluralRules;
    // private unsafePatternModifier: MutablePatternModifier;
    // private precomputeAllModifiers(buildReference: MutablePatternModifier): void;
    processQuantity(quantity: DecimalQuantity): MicroProps;
}