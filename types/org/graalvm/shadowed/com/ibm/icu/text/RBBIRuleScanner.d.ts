import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { RBBINode } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RBBINode.d.ts'
import type { RBBIRuleBuilder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RBBIRuleBuilder.d.ts'
import type { RBBIRuleScanner$RBBIRuleChar } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RBBIRuleScanner$RBBIRuleChar.d.ts'
import type { RBBIRuleScanner$RBBISetTableEl } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RBBIRuleScanner$RBBISetTableEl.d.ts'
import type { RBBISymbolTable } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RBBISymbolTable.d.ts'
export class RBBIRuleScanner extends Object {
    constructor(rb: RBBIRuleBuilder)
    // private fC: RBBIRuleScanner$RBBIRuleChar;
    // private fCharNum: number;
    // private fLastChar: number;
    // private fLineNum: number;
    // private fLookAheadRule: boolean;
    // private fNextIndex: number;
    // private fNoChainInRule: boolean;
    // private fNodeStack: RBBINode[];
    // private fNodeStackPtr: number;
    // private fOptionStart: number;
    // private fQuoteMode: boolean;
    // private fRB: RBBIRuleBuilder;
    // private fReverseRule: boolean;
    // private fRuleNum: number;
    // private fRuleSets: string[][];
    // private fScanIndex: number;
    // private fSetTable: { [key: string]: RBBIRuleScanner$RBBISetTableEl };
    // private fStack: number[];
    // private fStackPtr: number;
    // private fSymbolTable: RBBISymbolTable;
    doParseActions(action: number): boolean;
    error(e: number): void;
    findSetFor(s: string, node: RBBINode, setToAdopt: string[]): void;
    fixOpStack(p: number): void;
    nextChar(c: RBBIRuleScanner$RBBIRuleChar): void;
    nextCharLL(): number;
    numRules(): number;
    parse(): void;
    printNodeStack(title: string): void;
    pushNewNode(nodeType: number): RBBINode;
    scanSet(): void;
}