import type { DFAStateNode } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/DFAStateNode.d.ts'
import type { Matchers } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/Matchers.d.ts'
import type { TRegexDFAExecutorLocals } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/TRegexDFAExecutorLocals.d.ts'
import type { TRegexDFAExecutorNode } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/TRegexDFAExecutorNode.d.ts'
export class DFABQTrackingStateNode extends DFAStateNode {
    static buildFlags(paramfinalState: boolean, paramanchoredFinalState: boolean, paramhasBackwardPrefixState: boolean, paramutf16MustDecode: boolean, paramguardedFinalState: boolean, paramguardedAnchoredFinalState: boolean): number;
    constructor(id: number, flags: number, loopTransitionIndex: number, indexOfNodeId: number, indexOfIsFast: number, successors: number[], matchers: Matchers, unAnchoredFinalConstraints: number[][], anchoredFinalConstraints: number[][])
    // private anchoredFinalConstraints: number[][];
    // private unAnchoredFinalConstraints: number[][];
    atEnd(locals: TRegexDFAExecutorLocals, executor: TRegexDFAExecutorNode, inputAtEnd: boolean): void;
    checkFinalState(locals: TRegexDFAExecutorLocals, executor: TRegexDFAExecutorNode): boolean;
}