import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { DecimalQuantity } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/DecimalQuantity.d.ts'
import type { LongNameMultiplexer$ParentlessMicroPropsGenerator } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/LongNameMultiplexer$ParentlessMicroPropsGenerator.d.ts'
import type { MicroProps } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/MicroProps.d.ts'
import type { MicroPropsGenerator } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/MicroPropsGenerator.d.ts'
import type { NumberFormatter$UnitWidth } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/NumberFormatter$UnitWidth.d.ts'
import type { PluralRules } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules.d.ts'
import type { MeasureUnit } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/MeasureUnit.d.ts'
import type { ULocale } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class LongNameMultiplexer extends Object implements MicroPropsGenerator {
    static forMeasureUnits(paramlocale: ULocale, paramunits: MeasureUnit[], paramwidth: NumberFormatter$UnitWidth, paramunitDisplayCase: string, paramrules: PluralRules, paramparent: MicroPropsGenerator): LongNameMultiplexer;
    constructor(fParent: MicroPropsGenerator)
    // private fHandlers: LongNameMultiplexer$ParentlessMicroPropsGenerator[];
    // private fMeasureUnits: MeasureUnit[];
    // private fParent: MicroPropsGenerator;
    processQuantity(quantity: DecimalQuantity): MicroProps;
}