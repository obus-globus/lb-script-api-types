import type { StaticUnicodeSets$Key } from '../../../../../../com/ibm/icu/impl/StaticUnicodeSets$Key.d.ts'
import type { StringSegment } from '../../../../../../com/ibm/icu/impl/StringSegment.d.ts'
import type { NumberParseMatcher } from '../../../../../../com/ibm/icu/impl/number/parse/NumberParseMatcher.d.ts'
import type { ParsedNumber } from '../../../../../../com/ibm/icu/impl/number/parse/ParsedNumber.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class SymbolMatcher extends Object implements NumberParseMatcher {
    constructor(arg0: StaticUnicodeSets$Key)
    constructor(arg0: string, arg1: string[])
    // private string: string;
    // private uniSet: string[];
    accept(arg0: StringSegment, arg1: ParsedNumber): void;
    getSet(): string[];
    isDisabled(arg0: ParsedNumber): boolean;
    match(arg0: StringSegment, arg1: ParsedNumber): boolean;
    postProcess(arg0: ParsedNumber): void;
    smokeTest(arg0: StringSegment): boolean;
}