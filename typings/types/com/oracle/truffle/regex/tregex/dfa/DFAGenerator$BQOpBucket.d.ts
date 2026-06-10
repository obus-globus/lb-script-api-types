import type { DFAGenerator } from '../../../../../../com/oracle/truffle/regex/tregex/dfa/DFAGenerator.d.ts'
import type { DFAStateTransitionBuilder } from '../../../../../../com/oracle/truffle/regex/tregex/dfa/DFAStateTransitionBuilder.d.ts'
import type { DFAAbstractNode } from '../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/DFAAbstractNode.d.ts'
import type { DFABQTrackingTransitionOpsNode } from '../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/DFABQTrackingTransitionOpsNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DFAGenerator$BQOpBucket extends Object {
    private constructor()
    // private bqTransition: DFABQTrackingTransitionOpsNode;
    // private parent: DFAGenerator$BQOpBucket;
    // private transitions: DFAStateTransitionBuilder[];
    getBQTransition(dfaGen: DFAGenerator, nodes: DFAAbstractNode[], t: DFAStateTransitionBuilder, curLevel: number): DFABQTrackingTransitionOpsNode;
}