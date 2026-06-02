import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { StaticUnicodeSets$Key } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/StaticUnicodeSets$Key.d.ts'
import type { StringSegment } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/StringSegment.d.ts'
import type { NumberParseMatcher } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/parse/NumberParseMatcher.d.ts'
import type { ParsedNumber } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/parse/ParsedNumber.d.ts'
export abstract class SymbolMatcher extends Object implements NumberParseMatcher {
    constructor(symbolString: string, symbolUniSet: string[])
    constructor(key: StaticUnicodeSets$Key)
    // private string: string;
    // private uniSet: string[];
    accept(segment: StringSegment, result: ParsedNumber): void;
    getSet(): string[];
    isDisabled(result: ParsedNumber): boolean;
    match(segment: StringSegment, result: ParsedNumber): boolean;
    postProcess(result: ParsedNumber): void;
    smokeTest(segment: StringSegment): boolean;
}