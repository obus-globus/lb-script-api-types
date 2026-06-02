import type { StringSegment } from '../../../../../../com/ibm/icu/impl/StringSegment.d.ts'
import type { NumberParseMatcher$Flexible } from '../../../../../../com/ibm/icu/impl/number/parse/NumberParseMatcher$Flexible.d.ts'
import type { ParsedNumber } from '../../../../../../com/ibm/icu/impl/number/parse/ParsedNumber.d.ts'
import type { SymbolMatcher } from '../../../../../../com/ibm/icu/impl/number/parse/SymbolMatcher.d.ts'
export class IgnorablesMatcher extends SymbolMatcher implements NumberParseMatcher$Flexible {
    static getInstance(paramarg0: number): IgnorablesMatcher;
    private constructor(arg0: string[])
    accept(arg0: StringSegment, arg1: ParsedNumber): void;
    isDisabled(arg0: ParsedNumber): boolean;
    toString(): string;
}