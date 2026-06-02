import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { AdoptingModifierStore } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/AdoptingModifierStore.d.ts'
import type { DecimalQuantity } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/DecimalQuantity.d.ts'
import type { MicroProps } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/MicroProps.d.ts'
import type { MicroPropsGenerator } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/MicroPropsGenerator.d.ts'
import type { PluralRules } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules.d.ts'
export class MutablePatternModifier$ImmutablePatternModifier extends Object implements MicroPropsGenerator {
    constructor(pm: AdoptingModifierStore, rules: PluralRules)
    // private parent: MicroPropsGenerator;
    // private pm: AdoptingModifierStore;
    // private rules: PluralRules;
    addToChain(parent: MicroPropsGenerator): MutablePatternModifier$ImmutablePatternModifier;
    applyToMicros(micros: MicroProps, quantity: DecimalQuantity): void;
    processQuantity(quantity: DecimalQuantity): MicroProps;
}