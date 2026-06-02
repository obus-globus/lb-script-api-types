import type { RBBIDataWrapper$RBBIStateTable } from '../../../../com/ibm/icu/impl/RBBIDataWrapper$RBBIStateTable.d.ts'
import type { RBBINode } from '../../../../com/ibm/icu/text/RBBINode.d.ts'
import type { RBBIRuleBuilder } from '../../../../com/ibm/icu/text/RBBIRuleBuilder.d.ts'
import type { RBBIRuleBuilder$IntPair } from '../../../../com/ibm/icu/text/RBBIRuleBuilder$IntPair.d.ts'
import type { RBBITableBuilder$RBBIStateDescriptor } from '../../../../com/ibm/icu/text/RBBITableBuilder$RBBIStateDescriptor.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RBBITableBuilder extends Object {
    constructor(arg0: RBBIRuleBuilder, arg1: number)
    // private fDStates: RBBITableBuilder$RBBIStateDescriptor[];
    // private fLASlotsInUse: number;
    // private fLookAheadRuleMap: number[];
    // private fRB: RBBIRuleBuilder;
    // private fRootIx: number;
    // private fSafeTable: number[][];
    addRuleRootNodes(arg0: RBBINode[], arg1: RBBINode): void;
    bofFixup(): void;
    buildForwardTable(): void;
    buildSafeReverseTable(): void;
    buildStateTable(): void;
    calcChainedFollowPos(arg0: RBBINode, arg1: RBBINode): void;
    calcFirstPos(arg0: RBBINode): void;
    calcFollowPos(arg0: RBBINode): void;
    calcLastPos(arg0: RBBINode): void;
    calcNullable(arg0: RBBINode): void;
    exportSafeTable(): RBBIDataWrapper$RBBIStateTable;
    exportTable(): RBBIDataWrapper$RBBIStateTable;
    findDuplCharClassFrom(arg0: RBBIRuleBuilder$IntPair): boolean;
    findDuplicateSafeState(arg0: RBBIRuleBuilder$IntPair): boolean;
    findDuplicateState(arg0: RBBIRuleBuilder$IntPair): boolean;
    flagAcceptingStates(): void;
    flagLookAheadStates(): void;
    flagTaggedStates(): void;
    getSafeTableSize(): number;
    getTableSize(): number;
    mapLookAheadRules(): void;
    mergeRuleStatusVals(): void;
    printPosSets(arg0: RBBINode): void;
    printReverseTable(): void;
    printRuleStatusTable(): void;
    printSet(arg0: E[]): void;
    printStates(): void;
    removeColumn(arg0: number): void;
    removeDuplicateStates(): number;
    removeSafeState(arg0: RBBIRuleBuilder$IntPair): void;
    removeState(arg0: RBBIRuleBuilder$IntPair): void;
}