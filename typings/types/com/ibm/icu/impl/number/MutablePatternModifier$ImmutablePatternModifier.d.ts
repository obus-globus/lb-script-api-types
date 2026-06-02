import type { AdoptingModifierStore } from '../../../../../com/ibm/icu/impl/number/AdoptingModifierStore.d.ts'
import type { DecimalQuantity } from '../../../../../com/ibm/icu/impl/number/DecimalQuantity.d.ts'
import type { MicroProps } from '../../../../../com/ibm/icu/impl/number/MicroProps.d.ts'
import type { MicroPropsGenerator } from '../../../../../com/ibm/icu/impl/number/MicroPropsGenerator.d.ts'
import type { PluralRules } from '../../../../../com/ibm/icu/text/PluralRules.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class MutablePatternModifier$ImmutablePatternModifier extends Object implements MicroPropsGenerator {
    constructor(arg0: AdoptingModifierStore, arg1: PluralRules)
    // private parent: MicroPropsGenerator;
    // private pm: AdoptingModifierStore;
    // private rules: PluralRules;
    addToChain(arg0: MicroPropsGenerator): MutablePatternModifier$ImmutablePatternModifier;
    applyToMicros(arg0: MicroProps, arg1: DecimalQuantity): void;
    processQuantity(arg0: DecimalQuantity): MicroProps;
}