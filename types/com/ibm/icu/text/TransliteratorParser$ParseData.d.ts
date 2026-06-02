import type { SymbolTable } from '../../../../com/ibm/icu/text/SymbolTable.d.ts'
import type { UnicodeMatcher } from '../../../../com/ibm/icu/text/UnicodeMatcher.d.ts'
import type { ParsePosition } from '../../../../java/text/ParsePosition.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TransliteratorParser$ParseData extends Object implements SymbolTable {
    static SYMBOL_REF: string;
    private constructor(null_: TransliteratorParser$ParseData)
    isMatcher(arg0: number): boolean;
    isReplacer(arg0: number): boolean;
    lookup(arg0: string): string[];
    lookupMatcher(arg0: number): UnicodeMatcher;
    parseReference(arg0: string, arg1: ParsePosition, arg2: number): string;
}