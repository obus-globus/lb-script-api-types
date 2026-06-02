import type { DecimalQuantity } from '../../../../../com/ibm/icu/impl/number/DecimalQuantity.d.ts'
import type { LongNameMultiplexer$ParentlessMicroPropsGenerator } from '../../../../../com/ibm/icu/impl/number/LongNameMultiplexer$ParentlessMicroPropsGenerator.d.ts'
import type { MicroProps } from '../../../../../com/ibm/icu/impl/number/MicroProps.d.ts'
import type { MicroPropsGenerator } from '../../../../../com/ibm/icu/impl/number/MicroPropsGenerator.d.ts'
import type { NumberFormatter$UnitWidth } from '../../../../../com/ibm/icu/number/NumberFormatter$UnitWidth.d.ts'
import type { PluralRules } from '../../../../../com/ibm/icu/text/PluralRules.d.ts'
import type { MeasureUnit } from '../../../../../com/ibm/icu/util/MeasureUnit.d.ts'
import type { ULocale } from '../../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LongNameMultiplexer extends Object implements MicroPropsGenerator {
    static forMeasureUnits(paramarg0: ULocale, paramarg1: MeasureUnit[], paramarg2: NumberFormatter$UnitWidth, paramarg3: string, paramarg4: PluralRules, paramarg5: MicroPropsGenerator): LongNameMultiplexer;
    constructor(arg0: MicroPropsGenerator)
    // private fHandlers: LongNameMultiplexer$ParentlessMicroPropsGenerator[];
    // private fMeasureUnits: MeasureUnit[];
    // private fParent: MicroPropsGenerator;
    processQuantity(arg0: DecimalQuantity): MicroProps;
}