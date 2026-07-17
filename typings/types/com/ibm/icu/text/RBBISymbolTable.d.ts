import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { RBBINode } from '../../../../com/ibm/icu/text/RBBINode.d.ts'
import type { RBBIRuleScanner } from '../../../../com/ibm/icu/text/RBBIRuleScanner.d.ts'
import type { RBBISymbolTable$RBBISymbolTableEntry } from '../../../../com/ibm/icu/text/RBBISymbolTable$RBBISymbolTableEntry.d.ts'
import type { SymbolTable } from '../../../../com/ibm/icu/text/SymbolTable.d.ts'
import type { UnicodeMatcher } from '../../../../com/ibm/icu/text/UnicodeMatcher.d.ts'
import type { ParsePosition } from '../../../../java/text/ParsePosition.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RBBISymbolTable extends Object implements SymbolTable {
    static SYMBOL_REF: string;
    constructor(arg0: RBBIRuleScanner)
    // private fCachedSetLookup: string[];
    // private fHashTable: JavaMap<string, RBBISymbolTable$RBBISymbolTableEntry>;
    // private fRuleScanner: RBBIRuleScanner;
    // private ffffString: string;
    addEntry(arg0: string, arg1: RBBINode): void;
    lookup(arg0: string): string[];
    lookupMatcher(arg0: number): UnicodeMatcher;
    lookupNode(arg0: string): RBBINode;
    parseReference(arg0: string, arg1: ParsePosition, arg2: number): string;
    rbbiSymtablePrint(): void;
}