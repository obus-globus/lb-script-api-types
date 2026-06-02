import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DecimalFormatProperties } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/DecimalFormatProperties.d.ts'
import type { MacroProps } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/MacroProps.d.ts'
import type { UnlocalizedNumberFormatter } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/UnlocalizedNumberFormatter.d.ts'
import type { DecimalFormatSymbols } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DecimalFormatSymbols.d.ts'
export class NumberPropertyMapper extends Object {
    static create(parampattern: string, paramsymbols: DecimalFormatSymbols): UnlocalizedNumberFormatter;
    static create(paramproperties: DecimalFormatProperties, paramsymbols: DecimalFormatSymbols): UnlocalizedNumberFormatter;
    static create(paramproperties: DecimalFormatProperties, paramsymbols: DecimalFormatSymbols, paramexportedProperties: DecimalFormatProperties): UnlocalizedNumberFormatter;
    static oldToNew(paramproperties: DecimalFormatProperties, paramsymbols: DecimalFormatSymbols, paramexportedProperties: DecimalFormatProperties): MacroProps;
    constructor()
}