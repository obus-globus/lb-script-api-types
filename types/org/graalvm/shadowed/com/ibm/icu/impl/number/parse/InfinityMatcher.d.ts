import type { StringSegment } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/StringSegment.d.ts'
import type { ParsedNumber } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/parse/ParsedNumber.d.ts'
import type { SymbolMatcher } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/parse/SymbolMatcher.d.ts'
import type { DecimalFormatSymbols } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DecimalFormatSymbols.d.ts'
export class InfinityMatcher extends SymbolMatcher {
    static getInstance(paramsymbols: DecimalFormatSymbols): InfinityMatcher;
    private constructor()
    private constructor(symbolString: string)
    accept(segment: StringSegment, result: ParsedNumber): void;
    isDisabled(result: ParsedNumber): boolean;
    toString(): string;
}