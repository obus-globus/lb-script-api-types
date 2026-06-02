import type { StandardPlural } from '../../../../../com/ibm/icu/impl/StandardPlural.d.ts'
import type { DecimalQuantity } from '../../../../../com/ibm/icu/impl/number/DecimalQuantity.d.ts'
import type { LongNameMultiplexer$ParentlessMicroPropsGenerator } from '../../../../../com/ibm/icu/impl/number/LongNameMultiplexer$ParentlessMicroPropsGenerator.d.ts'
import type { MicroProps } from '../../../../../com/ibm/icu/impl/number/MicroProps.d.ts'
import type { MicroPropsGenerator } from '../../../../../com/ibm/icu/impl/number/MicroPropsGenerator.d.ts'
import type { Modifier } from '../../../../../com/ibm/icu/impl/number/Modifier.d.ts'
import type { Modifier$Signum } from '../../../../../com/ibm/icu/impl/number/Modifier$Signum.d.ts'
import type { ModifierStore } from '../../../../../com/ibm/icu/impl/number/ModifierStore.d.ts'
import type { LocalizedNumberFormatter } from '../../../../../com/ibm/icu/number/LocalizedNumberFormatter.d.ts'
import type { NumberFormatter$UnitWidth } from '../../../../../com/ibm/icu/number/NumberFormatter$UnitWidth.d.ts'
import type { ListFormatter } from '../../../../../com/ibm/icu/text/ListFormatter.d.ts'
import type { PluralRules } from '../../../../../com/ibm/icu/text/PluralRules.d.ts'
import type { MeasureUnit } from '../../../../../com/ibm/icu/util/MeasureUnit.d.ts'
import type { ULocale } from '../../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class MixedUnitLongNameHandler extends Object implements LongNameMultiplexer$ParentlessMicroPropsGenerator, MicroPropsGenerator, ModifierStore {
    static forMeasureUnit(paramarg0: ULocale, paramarg1: MeasureUnit, paramarg2: NumberFormatter$UnitWidth, paramarg3: string, paramarg4: PluralRules, paramarg5: MicroPropsGenerator): MixedUnitLongNameHandler;
    private constructor(arg0: PluralRules, arg1: MicroPropsGenerator)
    // private fIntegerFormatter: LocalizedNumberFormatter;
    // private fListFormatter: ListFormatter;
    // private fMixedUnitData: string[][];
    // private parent: MicroPropsGenerator;
    // private rules: PluralRules;
    // private getMixedUnitModifier(arg0: DecimalQuantity, arg1: MicroProps): Modifier;
    getModifier(arg0: Modifier$Signum, arg1: StandardPlural): Modifier;
    processQuantity(arg0: DecimalQuantity): MicroProps;
    processQuantityWithMicros(arg0: DecimalQuantity, arg1: MicroProps): MicroProps;
}