import type { StandardPlural } from '../../../../../com/ibm/icu/impl/StandardPlural.d.ts'
import type { DecimalQuantity } from '../../../../../com/ibm/icu/impl/number/DecimalQuantity.d.ts'
import type { LongNameMultiplexer$ParentlessMicroPropsGenerator } from '../../../../../com/ibm/icu/impl/number/LongNameMultiplexer$ParentlessMicroPropsGenerator.d.ts'
import type { MicroProps } from '../../../../../com/ibm/icu/impl/number/MicroProps.d.ts'
import type { MicroPropsGenerator } from '../../../../../com/ibm/icu/impl/number/MicroPropsGenerator.d.ts'
import type { Modifier } from '../../../../../com/ibm/icu/impl/number/Modifier.d.ts'
import type { Modifier$Signum } from '../../../../../com/ibm/icu/impl/number/Modifier$Signum.d.ts'
import type { ModifierStore } from '../../../../../com/ibm/icu/impl/number/ModifierStore.d.ts'
import type { SimpleModifier } from '../../../../../com/ibm/icu/impl/number/SimpleModifier.d.ts'
import type { NumberFormatter$UnitWidth } from '../../../../../com/ibm/icu/number/NumberFormatter$UnitWidth.d.ts'
import type { NumberFormat$Field } from '../../../../../com/ibm/icu/text/NumberFormat$Field.d.ts'
import type { PluralRules } from '../../../../../com/ibm/icu/text/PluralRules.d.ts'
import type { Currency } from '../../../../../com/ibm/icu/util/Currency.d.ts'
import type { MeasureUnit } from '../../../../../com/ibm/icu/util/MeasureUnit.d.ts'
import type { ULocale } from '../../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LongNameHandler extends Object implements LongNameMultiplexer$ParentlessMicroPropsGenerator, MicroPropsGenerator, ModifierStore {
    static forCurrencyLongNames(paramarg0: ULocale, paramarg1: Currency, paramarg2: PluralRules, paramarg3: MicroPropsGenerator): LongNameHandler;
    static forMeasureUnit(paramarg0: ULocale, paramarg1: MeasureUnit, paramarg2: NumberFormatter$UnitWidth, paramarg3: string, paramarg4: PluralRules, paramarg5: MicroPropsGenerator): LongNameHandler;
    static getUnitDisplayName(paramarg0: ULocale, paramarg1: MeasureUnit, paramarg2: NumberFormatter$UnitWidth): string;
    private constructor(arg0: Map<StandardPlural, SimpleModifier>, arg1: PluralRules, arg2: MicroPropsGenerator)
    // private gender: string;
    // private modifiers: Map<StandardPlural, SimpleModifier>;
    // private parent: MicroPropsGenerator;
    // private rules: PluralRules;
    getModifier(arg0: Modifier$Signum, arg1: StandardPlural): Modifier;
    // private multiSimpleFormatsToModifiers(arg0: string[], arg1: string, arg2: NumberFormat$Field): void;
    processQuantity(arg0: DecimalQuantity): MicroProps;
    processQuantityWithMicros(arg0: DecimalQuantity, arg1: MicroProps): MicroProps;
    // private simpleFormatsToModifiers(arg0: string[], arg1: NumberFormat$Field): void;
}