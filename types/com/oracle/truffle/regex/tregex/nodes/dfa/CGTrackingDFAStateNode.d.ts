import type { TruffleString$CodeRange } from '../../../../../../../com/oracle/truffle/api/strings/TruffleString$CodeRange.d.ts'
import type { DFACaptureGroupLazyTransition } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/DFACaptureGroupLazyTransition.d.ts'
import type { DFACaptureGroupPartialTransition } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/DFACaptureGroupPartialTransition.d.ts'
import type { DFAStateNode } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/DFAStateNode.d.ts'
import type { Matchers } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/Matchers.d.ts'
import type { TRegexDFAExecutorLocals } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/TRegexDFAExecutorLocals.d.ts'
import type { TRegexDFAExecutorNode } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/TRegexDFAExecutorNode.d.ts'
export class CGTrackingDFAStateNode extends DFAStateNode {
    static buildFlags(paramfinalState: boolean, paramanchoredFinalState: boolean, paramhasBackwardPrefixState: boolean, paramutf16MustDecode: boolean, paramguardedFinalState: boolean, paramguardedAnchoredFinalState: boolean): number;
    constructor(id: number, flags: number, loopTransitionIndex: number, indexOfNodeId: number, indexOfIsFast: number, successors: number[], matchers: Matchers, anchoredFinalSuccessor: number, preUnAnchoredFinalStateTransition: DFACaptureGroupLazyTransition, unAnchoredFinalStateTransition: DFACaptureGroupPartialTransition, cgLoopToSelf: DFACaptureGroupPartialTransition, cgLoopToSelfHasDependency: boolean)
    // private cgLoopToSelf: DFACaptureGroupPartialTransition;
    // private cgLoopToSelfHasDependency: boolean;
    // private preUnAnchoredFinalStateTransition: DFACaptureGroupLazyTransition;
    // private unAnchoredFinalStateTransition: DFACaptureGroupPartialTransition;
    afterIndexOf(locals: TRegexDFAExecutorLocals, executor: TRegexDFAExecutorNode, preLoopIndex: number, postLoopIndex: number, codeRange: TruffleString$CodeRange): void;
    atEnd(frame: TRegexDFAExecutorLocals, executor: TRegexDFAExecutorNode, inputAtEnd: boolean): void;
    beforeFindSuccessor(locals: TRegexDFAExecutorLocals, executor: TRegexDFAExecutorNode): boolean;
    // private checkFinalStateCG(locals: TRegexDFAExecutorLocals, executor: TRegexDFAExecutorNode): void;
    getCGTrackingCost(): number;
    // private getCGTransitionToSelf(): DFACaptureGroupPartialTransition;
}