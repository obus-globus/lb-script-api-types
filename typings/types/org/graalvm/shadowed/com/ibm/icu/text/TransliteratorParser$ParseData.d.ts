import type { ParsePosition } from '../../../../../../../java/text/ParsePosition.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { SymbolTable } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/SymbolTable.d.ts'
import type { TransliteratorParser } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/TransliteratorParser.d.ts'
import type { UnicodeMatcher } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/UnicodeMatcher.d.ts'
export class TransliteratorParser$ParseData extends Object implements SymbolTable {
    static SYMBOL_REF: string;
    private constructor(null_: TransliteratorParser)
    isMatcher(ch: number): boolean;
    isReplacer(ch: number): boolean;
    lookup(name: string): string[];
    lookupMatcher(ch: number): UnicodeMatcher;
    parseReference(text: string, pos: ParsePosition, limit: number): string;
}