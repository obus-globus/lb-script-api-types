import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { ParsePosition } from '../../../../../../../java/text/ParsePosition.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { RBBINode } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RBBINode.d.ts'
import type { RBBIRuleScanner } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RBBIRuleScanner.d.ts'
import type { RBBISymbolTable$RBBISymbolTableEntry } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RBBISymbolTable$RBBISymbolTableEntry.d.ts'
import type { SymbolTable } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/SymbolTable.d.ts'
import type { UnicodeMatcher } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/UnicodeMatcher.d.ts'
export class RBBISymbolTable extends Object implements SymbolTable {
    static SYMBOL_REF: string;
    constructor(rs: RBBIRuleScanner)
    // private fCachedSetLookup: string[];
    // private fHashTable: JavaMap<string, RBBISymbolTable$RBBISymbolTableEntry>;
    // private fRuleScanner: RBBIRuleScanner;
    // private ffffString: string;
    addEntry(key: string, val: RBBINode): void;
    lookup(s: string): string[];
    lookupMatcher(ch: number): UnicodeMatcher;
    lookupNode(key: string): RBBINode;
    parseReference(text: string, pos: ParsePosition, limit: number): string;
    rbbiSymtablePrint(): void;
}