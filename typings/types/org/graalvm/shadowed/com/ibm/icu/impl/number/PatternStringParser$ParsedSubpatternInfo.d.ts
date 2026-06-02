import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { DecimalQuantity_DualStorageBCD } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/DecimalQuantity_DualStorageBCD.d.ts'
import type { Padder$PadPosition } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/Padder$PadPosition.d.ts'
export class PatternStringParser$ParsedSubpatternInfo extends Object {
    constructor()
    exponentHasPlusSign: boolean;
    exponentZeros: number;
    fractionHashSigns: number;
    fractionNumerals: number;
    fractionTotal: number;
    groupingSizes: number;
    hasCurrencyDecimal: boolean;
    hasCurrencySign: boolean;
    hasDecimal: boolean;
    hasMinusSign: boolean;
    hasPerMilleSign: boolean;
    hasPercentSign: boolean;
    hasPlusSign: boolean;
    integerAtSigns: number;
    integerLeadingHashSigns: number;
    integerNumerals: number;
    integerTotal: number;
    integerTrailingHashSigns: number;
    paddingEndpoints: number;
    paddingLocation: Padder$PadPosition;
    prefixEndpoints: number;
    rounding: DecimalQuantity_DualStorageBCD;
    suffixEndpoints: number;
    widthExceptAffixes: number;
}