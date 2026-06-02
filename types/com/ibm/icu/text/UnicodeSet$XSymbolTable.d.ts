import type { SymbolTable } from '../../../../com/ibm/icu/text/SymbolTable.d.ts'
import type { UnicodeMatcher } from '../../../../com/ibm/icu/text/UnicodeMatcher.d.ts'
import type { ParsePosition } from '../../../../java/text/ParsePosition.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class UnicodeSet$XSymbolTable extends Object implements SymbolTable {
    static SYMBOL_REF: string;
    constructor()
    applyPropertyAlias(arg0: string, arg1: string, arg2: string[]): boolean;
    lookup(arg0: string): string[];
    lookupMatcher(arg0: number): UnicodeMatcher;
    parseReference(arg0: string, arg1: ParsePosition, arg2: number): string;
}