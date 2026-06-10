import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { RBBIDataWrapper$RBBIStateTable } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/RBBIDataWrapper$RBBIStateTable.d.ts'
import type { RBBINode } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RBBINode.d.ts'
import type { RBBIRuleBuilder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RBBIRuleBuilder.d.ts'
import type { RBBIRuleBuilder$IntPair } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RBBIRuleBuilder$IntPair.d.ts'
import type { RBBITableBuilder$RBBIStateDescriptor } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RBBITableBuilder$RBBIStateDescriptor.d.ts'
export class RBBITableBuilder extends Object {
    constructor(rb: RBBIRuleBuilder, rootNodeIx: number)
    // private fDStates: RBBITableBuilder$RBBIStateDescriptor[];
    // private fLASlotsInUse: number;
    // private fLookAheadRuleMap: number[];
    // private fRB: RBBIRuleBuilder;
    // private fRootIx: number;
    // private fSafeTable: number[][];
    addRuleRootNodes(dest: RBBINode[], node: RBBINode): void;
    bofFixup(): void;
    buildForwardTable(): void;
    buildSafeReverseTable(): void;
    buildStateTable(): void;
    calcChainedFollowPos(tree: RBBINode, endMarkNode: RBBINode): void;
    calcFirstPos(n: RBBINode): void;
    calcFollowPos(n: RBBINode): void;
    calcLastPos(n: RBBINode): void;
    calcNullable(n: RBBINode): void;
    exportSafeTable(): RBBIDataWrapper$RBBIStateTable;
    exportTable(): RBBIDataWrapper$RBBIStateTable;
    findDuplCharClassFrom(categories: RBBIRuleBuilder$IntPair): boolean;
    findDuplicateSafeState(states: RBBIRuleBuilder$IntPair): boolean;
    findDuplicateState(states: RBBIRuleBuilder$IntPair): boolean;
    flagAcceptingStates(): void;
    flagLookAheadStates(): void;
    flagTaggedStates(): void;
    getSafeTableSize(): number;
    getTableSize(): number;
    mapLookAheadRules(): void;
    mergeRuleStatusVals(): void;
    printPosSets(n: RBBINode): void;
    printReverseTable(): void;
    printRuleStatusTable(): void;
    printSet(s: RBBINode[]): void;
    printStates(): void;
    removeColumn(column: number): void;
    removeDuplicateStates(): number;
    removeSafeState(duplStates: RBBIRuleBuilder$IntPair): void;
    removeState(duplStates: RBBIRuleBuilder$IntPair): void;
}