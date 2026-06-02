import type { RBBINode } from '../../../../com/ibm/icu/text/RBBINode.d.ts'
import type { RBBIRuleBuilder } from '../../../../com/ibm/icu/text/RBBIRuleBuilder.d.ts'
import type { RBBIRuleBuilder$IntPair } from '../../../../com/ibm/icu/text/RBBIRuleBuilder$IntPair.d.ts'
import type { RBBISetBuilder$RangeDescriptor } from '../../../../com/ibm/icu/text/RBBISetBuilder$RangeDescriptor.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RBBISetBuilder extends Object {
    constructor(arg0: RBBIRuleBuilder)
    // private fDictCategoriesStart: number;
    // private fFrozenTrie: (Object | null)[];
    // private fGroupCount: number;
    // private fRB: RBBIRuleBuilder;
    // private fRangeList: RBBISetBuilder$RangeDescriptor;
    // private fSawBOF: boolean;
    // private fTrie: (Object | null)[];
    addValToSet(arg0: RBBINode, arg1: number): void;
    addValToSets(arg0: RBBINode[], arg1: number): void;
    buildRanges(): void;
    buildTrie(): void;
    freezeTrieIfNotYet(): void;
    getDictCategoriesStart(): number;
    getFirstChar(arg0: number): number;
    getNumCharCategories(): number;
    getTrieSize(): number;
    mergeCategories(arg0: RBBIRuleBuilder$IntPair): void;
    printRangeGroups(): void;
    printRanges(): void;
    printSets(): void;
    sawBOF(): boolean;
    serializeTrie(arg0: OutputStream): void;
}