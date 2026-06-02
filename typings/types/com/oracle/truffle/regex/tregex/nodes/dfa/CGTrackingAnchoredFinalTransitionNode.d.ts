import type { CGTrackingAbstractTransitionNode } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/CGTrackingAbstractTransitionNode.d.ts'
import type { DFACaptureGroupPartialTransition } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/DFACaptureGroupPartialTransition.d.ts'
import type { TRegexDFAExecutorLocals } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/TRegexDFAExecutorLocals.d.ts'
import type { TRegexDFAExecutorNode } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/TRegexDFAExecutorNode.d.ts'
export class CGTrackingAnchoredFinalTransitionNode extends CGTrackingAbstractTransitionNode {
    constructor(id: number, anchoredFinalStateTransition: DFACaptureGroupPartialTransition)
    // private anchoredFinalStateTransition: DFACaptureGroupPartialTransition;
    apply(locals: TRegexDFAExecutorLocals, executor: TRegexDFAExecutorNode): void;
    getCGTrackingCost(): number;
}