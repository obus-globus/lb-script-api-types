import type { CompactData$CompactType } from '../../../../com/ibm/icu/impl/number/CompactData$CompactType.d.ts'
import type { MicroPropsGenerator } from '../../../../com/ibm/icu/impl/number/MicroPropsGenerator.d.ts'
import type { MutablePatternModifier } from '../../../../com/ibm/icu/impl/number/MutablePatternModifier.d.ts'
import type { Notation } from '../../../../com/ibm/icu/number/Notation.d.ts'
import type { ScientificNotation } from '../../../../com/ibm/icu/number/ScientificNotation.d.ts'
import type { SimpleNotation } from '../../../../com/ibm/icu/number/SimpleNotation.d.ts'
import type { CompactDecimalFormat$CompactStyle } from '../../../../com/ibm/icu/text/CompactDecimalFormat$CompactStyle.d.ts'
import type { PluralRules } from '../../../../com/ibm/icu/text/PluralRules.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
export class CompactNotation extends Notation {
    static compactLong(): CompactNotation;
    static compactShort(): CompactNotation;
    static engineering(): ScientificNotation;
    static forCustomData(paramarg0: { [key: string]: { [key: string]: string } }): CompactNotation;
    static scientific(): ScientificNotation;
    static simple(): SimpleNotation;
    constructor(arg0: CompactDecimalFormat$CompactStyle)
    constructor(arg0: { [key: string]: { [key: string]: string } })
    // private compactCustomData: { [key: string]: { [key: string]: string } };
    // private compactStyle: CompactDecimalFormat$CompactStyle;
    withLocaleData(arg0: ULocale, arg1: string, arg2: CompactData$CompactType, arg3: PluralRules, arg4: MutablePatternModifier, arg5: boolean, arg6: MicroPropsGenerator): MicroPropsGenerator;
}