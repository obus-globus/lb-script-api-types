import type { StringSegment } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/StringSegment.d.ts'
import type { ParsedNumber } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/parse/ParsedNumber.d.ts'
import type { SymbolMatcher } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/parse/SymbolMatcher.d.ts'
import type { DecimalFormatSymbols } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DecimalFormatSymbols.d.ts'
export class ApproximatelySignMatcher extends SymbolMatcher {
    static getInstance(paramsymbols: DecimalFormatSymbols, paramallowTrailing: boolean): ApproximatelySignMatcher;
    private constructor(allowTrailing: boolean)
    private constructor(symbolString: string, allowTrailing: boolean)
    // private allowTrailing: boolean;
    accept(segment: StringSegment, result: ParsedNumber): void;
    isDisabled(result: ParsedNumber): boolean;
    toString(): string;
}