import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { StandardPlural } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/StandardPlural.d.ts'
import type { DecimalQuantity } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/DecimalQuantity.d.ts'
import type { LongNameMultiplexer$ParentlessMicroPropsGenerator } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/LongNameMultiplexer$ParentlessMicroPropsGenerator.d.ts'
import type { MicroProps } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/MicroProps.d.ts'
import type { MicroPropsGenerator } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/MicroPropsGenerator.d.ts'
import type { Modifier } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/Modifier.d.ts'
import type { Modifier$Signum } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/Modifier$Signum.d.ts'
import type { ModifierStore } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/ModifierStore.d.ts'
import type { LocalizedNumberFormatter } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/LocalizedNumberFormatter.d.ts'
import type { NumberFormatter$UnitWidth } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/NumberFormatter$UnitWidth.d.ts'
import type { ListFormatter } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/ListFormatter.d.ts'
import type { PluralRules } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules.d.ts'
import type { MeasureUnit } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/MeasureUnit.d.ts'
import type { ULocale } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class MixedUnitLongNameHandler extends Object implements LongNameMultiplexer$ParentlessMicroPropsGenerator, MicroPropsGenerator, ModifierStore {
    static forMeasureUnit(paramlocale: ULocale, parammixedUnit: MeasureUnit, paramwidth: NumberFormatter$UnitWidth, paramunitDisplayCase: string, paramrules: PluralRules, paramparent: MicroPropsGenerator): MixedUnitLongNameHandler;
    private constructor(rules: PluralRules, parent: MicroPropsGenerator)
    // private fIntegerFormatter: LocalizedNumberFormatter;
    // private fListFormatter: ListFormatter;
    // private fMixedUnitData: string[][];
    // private parent: MicroPropsGenerator;
    // private rules: PluralRules;
    // private getMixedUnitModifier(quantity: DecimalQuantity, micros: MicroProps): Modifier;
    getModifier(signum: Modifier$Signum, plural: StandardPlural): Modifier;
    processQuantity(quantity: DecimalQuantity): MicroProps;
    processQuantityWithMicros(quantity: DecimalQuantity, micros: MicroProps): MicroProps;
}