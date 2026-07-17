import type { JavaMap } from '../../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { StandardPlural } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/StandardPlural.d.ts'
import type { DecimalQuantity } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/DecimalQuantity.d.ts'
import type { LongNameMultiplexer$ParentlessMicroPropsGenerator } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/LongNameMultiplexer$ParentlessMicroPropsGenerator.d.ts'
import type { MicroProps } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/MicroProps.d.ts'
import type { MicroPropsGenerator } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/MicroPropsGenerator.d.ts'
import type { Modifier } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/Modifier.d.ts'
import type { Modifier$Signum } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/Modifier$Signum.d.ts'
import type { ModifierStore } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/ModifierStore.d.ts'
import type { SimpleModifier } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/SimpleModifier.d.ts'
import type { NumberFormatter$UnitWidth } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/NumberFormatter$UnitWidth.d.ts'
import type { NumberFormat$Field } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/NumberFormat$Field.d.ts'
import type { PluralRules } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules.d.ts'
import type { Currency } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Currency.d.ts'
import type { MeasureUnit } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/MeasureUnit.d.ts'
import type { ULocale } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class LongNameHandler extends Object implements LongNameMultiplexer$ParentlessMicroPropsGenerator, MicroPropsGenerator, ModifierStore {
    static forCurrencyLongNames(paramlocale: ULocale, paramcurrency: Currency, paramrules: PluralRules, paramparent: MicroPropsGenerator): LongNameHandler;
    static forMeasureUnit(paramlocale: ULocale, paramunit: MeasureUnit, paramwidth: NumberFormatter$UnitWidth, paramunitDisplayCase: string, paramrules: PluralRules, paramparent: MicroPropsGenerator): LongNameHandler;
    static getUnitDisplayName(paramlocale: ULocale, paramunit: MeasureUnit, paramwidth: NumberFormatter$UnitWidth): string;
    private constructor(modifiers: JavaMap<StandardPlural, SimpleModifier>, rules: PluralRules, parent: MicroPropsGenerator)
    // private gender: string;
    // private modifiers: JavaMap<StandardPlural, SimpleModifier>;
    // private parent: MicroPropsGenerator;
    // private rules: PluralRules;
    getModifier(signum: Modifier$Signum, plural: StandardPlural): Modifier;
    // private multiSimpleFormatsToModifiers(leadFormats: string[], trailFormat: string, field: NumberFormat$Field): void;
    processQuantity(quantity: DecimalQuantity): MicroProps;
    processQuantityWithMicros(quantity: DecimalQuantity, micros: MicroProps): MicroProps;
    // private simpleFormatsToModifiers(simpleFormats: string[], field: NumberFormat$Field): void;
}