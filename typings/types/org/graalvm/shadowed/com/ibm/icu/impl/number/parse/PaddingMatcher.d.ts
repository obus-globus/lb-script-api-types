import type { StringSegment } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/StringSegment.d.ts'
import type { NumberParseMatcher$Flexible } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/parse/NumberParseMatcher$Flexible.d.ts'
import type { ParsedNumber } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/parse/ParsedNumber.d.ts'
import type { SymbolMatcher } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/parse/SymbolMatcher.d.ts'
export class PaddingMatcher extends SymbolMatcher implements NumberParseMatcher$Flexible {
    static getInstance(parampadString: string): PaddingMatcher;
    private constructor(symbolString: string)
    accept(segment: StringSegment, result: ParsedNumber): void;
    isDisabled(result: ParsedNumber): boolean;
    toString(): string;
}