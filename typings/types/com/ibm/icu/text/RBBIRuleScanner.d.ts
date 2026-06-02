import type { RBBINode } from '../../../../com/ibm/icu/text/RBBINode.d.ts'
import type { RBBIRuleBuilder } from '../../../../com/ibm/icu/text/RBBIRuleBuilder.d.ts'
import type { RBBIRuleScanner$RBBIRuleChar } from '../../../../com/ibm/icu/text/RBBIRuleScanner$RBBIRuleChar.d.ts'
import type { RBBIRuleScanner$RBBISetTableEl } from '../../../../com/ibm/icu/text/RBBIRuleScanner$RBBISetTableEl.d.ts'
import type { RBBISymbolTable } from '../../../../com/ibm/icu/text/RBBISymbolTable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RBBIRuleScanner extends Object {
    constructor(arg0: RBBIRuleBuilder)
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
    doParseActions(arg0: number): boolean;
    error(arg0: number): void;
    findSetFor(arg0: string, arg1: RBBINode, arg2: string[]): void;
    fixOpStack(arg0: number): void;
    nextChar(arg0: RBBIRuleScanner$RBBIRuleChar): void;
    nextCharLL(): number;
    numRules(): number;
    parse(): void;
    printNodeStack(arg0: string): void;
    pushNewNode(arg0: number): RBBINode;
    scanSet(): void;
}