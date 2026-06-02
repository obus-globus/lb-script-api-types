import type { DFAStateNode } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/DFAStateNode.d.ts'
import type { Matchers } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/Matchers.d.ts'
import type { TRegexDFAExecutorLocals } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/TRegexDFAExecutorLocals.d.ts'
import type { TRegexDFAExecutorNode } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/TRegexDFAExecutorNode.d.ts'
export class TraceFinderDFAStateNode extends DFAStateNode {
    static NO_PRE_CALC_RESULT: number;
    static buildFlags(paramfinalState: boolean, paramanchoredFinalState: boolean, paramhasBackwardPrefixState: boolean, paramutf16MustDecode: boolean, paramguardedFinalState: boolean, paramguardedAnchoredFinalState: boolean): number;
    constructor(id: number, flags: number, loopTransitionIndex: number, indexOfNodeId: number, indexOfIsFast: number, successors: number[], matchers: Matchers, preCalculatedUnAnchoredResult: number, preCalculatedAnchoredResult: number)
    // private preCalculatedAnchoredResult: number;
    // private preCalculatedUnAnchoredResult: number;
    // private getPreCalculatedAnchoredResult(): number;
    // private getPreCalculatedUnAnchoredResult(): number;
    // private hasPreCalculatedAnchoredResult(): boolean;
    // private hasPreCalculatedUnAnchoredResult(): boolean;
    storeResult(locals: TRegexDFAExecutorLocals, executor: TRegexDFAExecutorNode, anchored: boolean): void;
}