import type { OutputStream } from '../../../../../../../java/io/OutputStream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { RBBINode } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RBBINode.d.ts'
import type { RBBIRuleBuilder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RBBIRuleBuilder.d.ts'
import type { RBBIRuleBuilder$IntPair } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RBBIRuleBuilder$IntPair.d.ts'
import type { RBBISetBuilder$RangeDescriptor } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RBBISetBuilder$RangeDescriptor.d.ts'
export class RBBISetBuilder extends Object {
    constructor(rb: RBBIRuleBuilder)
    // private fDictCategoriesStart: number;
    // private fFrozenTrie: (Object | null)[];
    // private fGroupCount: number;
    // private fRB: RBBIRuleBuilder;
    // private fRangeList: RBBISetBuilder$RangeDescriptor;
    // private fSawBOF: boolean;
    // private fTrie: (Object | null)[];
    addValToSet(usetNode: RBBINode, val: number): void;
    addValToSets(sets: RBBINode[], val: number): void;
    buildRanges(): void;
    buildTrie(): void;
    freezeTrieIfNotYet(): void;
    getDictCategoriesStart(): number;
    getFirstChar(category: number): number;
    getNumCharCategories(): number;
    getTrieSize(): number;
    mergeCategories(categories: RBBIRuleBuilder$IntPair): void;
    printRangeGroups(): void;
    printRanges(): void;
    printSets(): void;
    sawBOF(): boolean;
    serializeTrie(os: OutputStream): void;
}