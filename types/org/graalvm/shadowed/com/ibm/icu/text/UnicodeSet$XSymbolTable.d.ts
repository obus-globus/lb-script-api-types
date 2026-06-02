import type { ParsePosition } from '../../../../../../../java/text/ParsePosition.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { SymbolTable } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/SymbolTable.d.ts'
import type { UnicodeMatcher } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/UnicodeMatcher.d.ts'
export abstract class UnicodeSet$XSymbolTable extends Object implements SymbolTable {
    static SYMBOL_REF: string;
    constructor()
    applyPropertyAlias(propertyName: string, propertyValue: string, result: string[]): boolean;
    lookup(s: string): string[];
    lookupMatcher(i: number): UnicodeMatcher;
    parseReference(text: string, pos: ParsePosition, limit: number): string;
}