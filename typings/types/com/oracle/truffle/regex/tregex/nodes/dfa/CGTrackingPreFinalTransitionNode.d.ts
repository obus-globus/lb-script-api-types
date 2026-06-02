import type { CGTrackingAbstractTransitionNode } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/CGTrackingAbstractTransitionNode.d.ts'
import type { DFACaptureGroupLazyTransition } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/DFACaptureGroupLazyTransition.d.ts'
import type { TRegexDFAExecutorLocals } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/TRegexDFAExecutorLocals.d.ts'
import type { TRegexDFAExecutorNode } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/TRegexDFAExecutorNode.d.ts'
export class CGTrackingPreFinalTransitionNode extends CGTrackingAbstractTransitionNode {
    static create(paramid: number, paramsuccessor: number, paramtransition: DFACaptureGroupLazyTransition): CGTrackingPreFinalTransitionNode;
    private constructor(id: number, successor: number, transition: DFACaptureGroupLazyTransition)
    // private transition: DFACaptureGroupLazyTransition;
    apply(locals: TRegexDFAExecutorLocals, executor: TRegexDFAExecutorNode): void;
    getCGTrackingCost(): number;
}