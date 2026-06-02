import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CompactData$CompactType } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/CompactData$CompactType.d.ts'
import type { MicroPropsGenerator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/MicroPropsGenerator.d.ts'
import type { MutablePatternModifier } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/MutablePatternModifier.d.ts'
import type { Notation } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/Notation.d.ts'
import type { ScientificNotation } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/ScientificNotation.d.ts'
import type { SimpleNotation } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/SimpleNotation.d.ts'
import type { CompactDecimalFormat$CompactStyle } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CompactDecimalFormat$CompactStyle.d.ts'
import type { PluralRules } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralRules.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class CompactNotation extends Notation {
    static compactLong(): CompactNotation;
    static compactShort(): CompactNotation;
    static engineering(): ScientificNotation;
    static forCustomData(paramcompactCustomData: { [key: string]: Object | null }): CompactNotation;
    static scientific(): ScientificNotation;
    static simple(): SimpleNotation;
    constructor(compactCustomData: { [key: string]: { [key: string]: string } })
    constructor(compactStyle: CompactDecimalFormat$CompactStyle)
    // private compactCustomData: { [key: string]: { [key: string]: string } };
    // private compactStyle: CompactDecimalFormat$CompactStyle;
    withLocaleData(locale: ULocale, nsName: string, compactType: CompactData$CompactType, rules: PluralRules, buildReference: MutablePatternModifier, safe: boolean, parent: MicroPropsGenerator): MicroPropsGenerator;
}