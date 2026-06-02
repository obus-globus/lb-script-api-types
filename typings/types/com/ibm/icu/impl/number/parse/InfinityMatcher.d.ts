import type { StringSegment } from '../../../../../../com/ibm/icu/impl/StringSegment.d.ts'
import type { ParsedNumber } from '../../../../../../com/ibm/icu/impl/number/parse/ParsedNumber.d.ts'
import type { SymbolMatcher } from '../../../../../../com/ibm/icu/impl/number/parse/SymbolMatcher.d.ts'
import type { DecimalFormatSymbols } from '../../../../../../com/ibm/icu/text/DecimalFormatSymbols.d.ts'
export class InfinityMatcher extends SymbolMatcher {
    static getInstance(paramarg0: DecimalFormatSymbols): InfinityMatcher;
    private constructor()
    private constructor(arg0: string)
    accept(arg0: StringSegment, arg1: ParsedNumber): void;
    isDisabled(arg0: ParsedNumber): boolean;
    toString(): string;
}