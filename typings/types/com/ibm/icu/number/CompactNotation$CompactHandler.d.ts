import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { CompactData } from '../../../../com/ibm/icu/impl/number/CompactData.d.ts'
import type { CompactData$CompactType } from '../../../../com/ibm/icu/impl/number/CompactData$CompactType.d.ts'
import type { DecimalQuantity } from '../../../../com/ibm/icu/impl/number/DecimalQuantity.d.ts'
import type { MicroProps } from '../../../../com/ibm/icu/impl/number/MicroProps.d.ts'
import type { MicroPropsGenerator } from '../../../../com/ibm/icu/impl/number/MicroPropsGenerator.d.ts'
import type { MutablePatternModifier } from '../../../../com/ibm/icu/impl/number/MutablePatternModifier.d.ts'
import type { MutablePatternModifier$ImmutablePatternModifier } from '../../../../com/ibm/icu/impl/number/MutablePatternModifier$ImmutablePatternModifier.d.ts'
import type { CompactNotation } from '../../../../com/ibm/icu/number/CompactNotation.d.ts'
import type { PluralRules } from '../../../../com/ibm/icu/text/PluralRules.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CompactNotation$CompactHandler extends Object implements MicroPropsGenerator {
    private constructor(arg0: CompactNotation, arg1: ULocale, arg2: string, arg3: CompactData$CompactType, arg4: PluralRules, arg5: MutablePatternModifier, arg6: boolean, arg7: MicroPropsGenerator)
    // private data: CompactData;
    // private parent: MicroPropsGenerator;
    // private precomputedMods: JavaMap<string, MutablePatternModifier$ImmutablePatternModifier>;
    // private rules: PluralRules;
    // private unsafePatternModifier: MutablePatternModifier;
    // private precomputeAllModifiers(arg0: MutablePatternModifier): void;
    processQuantity(arg0: DecimalQuantity): MicroProps;
}