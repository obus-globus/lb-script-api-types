import type { TruffleString$CodeRange } from '../../../../../../../com/oracle/truffle/api/strings/TruffleString$CodeRange.d.ts'
import type { DFASimpleCGTransition } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/DFASimpleCGTransition.d.ts'
import type { DFAStateNode } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/DFAStateNode.d.ts'
import type { Matchers } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/Matchers.d.ts'
import type { TRegexDFAExecutorLocals } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/TRegexDFAExecutorLocals.d.ts'
import type { TRegexDFAExecutorNode } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/TRegexDFAExecutorNode.d.ts'
export class DFASimpleCGTrackingStateNode extends DFAStateNode {
    static buildFlags(paramfinalState: boolean, paramanchoredFinalState: boolean, paramhasBackwardPrefixState: boolean, paramutf16MustDecode: boolean, paramguardedFinalState: boolean, paramguardedAnchoredFinalState: boolean): number;
    constructor(id: number, flags: number, loopTransitionIndex: number, indexOfNodeId: number, indexOfIsFast: number, successors: number[], matchers: Matchers, transitionToFinalState: DFASimpleCGTransition, anchoredFinalSuccessor: number)
    // private transitionToFinalState: DFASimpleCGTransition;
    afterIndexOf(locals: TRegexDFAExecutorLocals, executor: TRegexDFAExecutorNode, preLoopIndex: number, postLoopIndex: number, codeRange: TruffleString$CodeRange): void;
    // private applySimpleCGFinalTransition(executor: TRegexDFAExecutorNode, locals: TRegexDFAExecutorLocals): void;
    atEnd(locals: TRegexDFAExecutorLocals, executor: TRegexDFAExecutorNode, inputAtEnd: boolean): void;
    checkFinalState(locals: TRegexDFAExecutorLocals, executor: TRegexDFAExecutorNode): boolean;
    storeResult(locals: TRegexDFAExecutorLocals, executor: TRegexDFAExecutorNode, anchored: boolean): void;
}