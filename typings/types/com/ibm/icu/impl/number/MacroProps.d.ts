import type { AffixPatternProvider } from '../../../../../com/ibm/icu/impl/number/AffixPatternProvider.d.ts'
import type { Padder } from '../../../../../com/ibm/icu/impl/number/Padder.d.ts'
import type { IntegerWidth } from '../../../../../com/ibm/icu/number/IntegerWidth.d.ts'
import type { Notation } from '../../../../../com/ibm/icu/number/Notation.d.ts'
import type { NumberFormatter$DecimalSeparatorDisplay } from '../../../../../com/ibm/icu/number/NumberFormatter$DecimalSeparatorDisplay.d.ts'
import type { NumberFormatter$SignDisplay } from '../../../../../com/ibm/icu/number/NumberFormatter$SignDisplay.d.ts'
import type { NumberFormatter$UnitWidth } from '../../../../../com/ibm/icu/number/NumberFormatter$UnitWidth.d.ts'
import type { Precision } from '../../../../../com/ibm/icu/number/Precision.d.ts'
import type { Scale } from '../../../../../com/ibm/icu/number/Scale.d.ts'
import type { PluralRules } from '../../../../../com/ibm/icu/text/PluralRules.d.ts'
import type { MeasureUnit } from '../../../../../com/ibm/icu/util/MeasureUnit.d.ts'
import type { ULocale } from '../../../../../com/ibm/icu/util/ULocale.d.ts'
import type { RoundingMode } from '../../../../../java/math/RoundingMode.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class MacroProps extends Object implements Cloneable {
    constructor()
    affixProvider: AffixPatternProvider;
    approximately: boolean;
    decimal: NumberFormatter$DecimalSeparatorDisplay;
    grouping: Object;
    integerWidth: IntegerWidth;
    loc: ULocale;
    notation: Notation;
    padder: Padder;
    perUnit: MeasureUnit;
    precision: Precision;
    roundingMode: RoundingMode;
    rules: PluralRules;
    scale: Scale;
    sign: NumberFormatter$SignDisplay;
    symbols: Object;
    threshold: number;
    unit: MeasureUnit;
    unitDisplayCase: string;
    unitWidth: NumberFormatter$UnitWidth;
    usage: string;
    clone(): MacroProps;
    equals(arg0: Object | null): boolean;
    fallback(arg0: MacroProps): void;
    hashCode(): number;
}