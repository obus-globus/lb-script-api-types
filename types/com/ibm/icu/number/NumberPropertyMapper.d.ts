import type { DecimalFormatProperties } from '../../../../com/ibm/icu/impl/number/DecimalFormatProperties.d.ts'
import type { MacroProps } from '../../../../com/ibm/icu/impl/number/MacroProps.d.ts'
import type { UnlocalizedNumberFormatter } from '../../../../com/ibm/icu/number/UnlocalizedNumberFormatter.d.ts'
import type { DecimalFormatSymbols } from '../../../../com/ibm/icu/text/DecimalFormatSymbols.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class NumberPropertyMapper extends Object {
    static create(paramarg0: DecimalFormatProperties, paramarg1: DecimalFormatSymbols): UnlocalizedNumberFormatter;
    static create(paramarg0: DecimalFormatProperties, paramarg1: DecimalFormatSymbols, paramarg2: DecimalFormatProperties): UnlocalizedNumberFormatter;
    static create(paramarg0: string, paramarg1: DecimalFormatSymbols): UnlocalizedNumberFormatter;
    static oldToNew(paramarg0: DecimalFormatProperties, paramarg1: DecimalFormatSymbols, paramarg2: DecimalFormatProperties): MacroProps;
    constructor()
}