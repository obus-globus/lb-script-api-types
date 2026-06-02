import type { TruffleString$CodeRange } from '../../../../../../../com/oracle/truffle/api/strings/TruffleString$CodeRange.d.ts'
import type { AllTransitionsInOneTreeMatcher } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/AllTransitionsInOneTreeMatcher.d.ts'
import type { DFAAbstractStateNode } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/DFAAbstractStateNode.d.ts'
import type { Matchers } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/Matchers.d.ts'
import type { SequentialMatchers } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/SequentialMatchers.d.ts'
import type { TRegexDFAExecutorLocals } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/TRegexDFAExecutorLocals.d.ts'
import type { TRegexDFAExecutorNode } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/TRegexDFAExecutorNode.d.ts'
import type { JsonValue } from '../../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonValue.d.ts'
export class DFAStateNode extends DFAAbstractStateNode {
    static buildFlags(paramfinalState: boolean, paramanchoredFinalState: boolean, paramhasBackwardPrefixState: boolean, paramutf16MustDecode: boolean, paramguardedFinalState: boolean, paramguardedAnchoredFinalState: boolean): number;
    constructor(id: number, flags: number, loopTransitionIndex: number, indexOfNodeId: number, indexOfIsFast: number, successors: number[], matchers: Matchers, anchoredFinalSuccessor: number)
    readonly anchoredFinalSuccessor: number;
    // private flags: number;
    // private indexOfIsFast: number;
    readonly indexOfNodeId: number;
    // private loopTransitionIndex: number;
    readonly matchers: Matchers;
    afterIndexOf(locals: TRegexDFAExecutorLocals, executor: TRegexDFAExecutorNode, preLoopIndex: number, postLoopIndex: number, codeRange: TruffleString$CodeRange): void;
    atEnd(locals: TRegexDFAExecutorLocals, executor: TRegexDFAExecutorNode, inputAtEnd: boolean): void;
    beforeFindSuccessor(locals: TRegexDFAExecutorLocals, executor: TRegexDFAExecutorNode): boolean;
    canDoIndexOf(codeRange: TruffleString$CodeRange): boolean;
    checkFinalState(locals: TRegexDFAExecutorLocals, executor: TRegexDFAExecutorNode): boolean;
    // private flagIsSet(flag: number): boolean;
    getAnchoredFinalSuccessor(): number;
    getBackwardPrefixStateIndex(): number;
    getIndexOfNodeId(): number;
    getLoopToSelf(): number;
    getMatchers(): Matchers;
    getSequentialMatchers(): SequentialMatchers;
    getTreeMatcher(): AllTransitionsInOneTreeMatcher;
    hasBackwardPrefixState(): boolean;
    hasIndexOfNodeId(): boolean;
    hasLoopToSelf(): boolean;
    isAnchoredFinalState(): boolean;
    isFinalState(): boolean;
    isGuardedAnchoredFinalState(): boolean;
    isGuardedFinalState(): boolean;
    storeResult(locals: TRegexDFAExecutorLocals, executor: TRegexDFAExecutorNode, anchored: boolean): void;
    toJson(): JsonValue;
    toString(): string;
    treeTransitionMatching(): boolean;
    utf16MustDecode(): boolean;
}