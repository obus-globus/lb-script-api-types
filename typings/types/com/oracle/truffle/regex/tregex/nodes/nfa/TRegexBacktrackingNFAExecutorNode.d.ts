import type { MaterializedFrame } from '../../../../../../../com/oracle/truffle/api/frame/MaterializedFrame.d.ts'
import type { VirtualFrame } from '../../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { TruffleString } from '../../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$ByteIndexOfStringNode } from '../../../../../../../com/oracle/truffle/api/strings/TruffleString$ByteIndexOfStringNode.d.ts'
import type { TruffleString$CodeRange } from '../../../../../../../com/oracle/truffle/api/strings/TruffleString$CodeRange.d.ts'
import type { TruffleString$RegionEqualByteIndexNode } from '../../../../../../../com/oracle/truffle/api/strings/TruffleString$RegionEqualByteIndexNode.d.ts'
import type { CompilationBuffer } from '../../../../../../../com/oracle/truffle/regex/tregex/buffer/CompilationBuffer.d.ts'
import type { IntRingBuffer } from '../../../../../../../com/oracle/truffle/regex/tregex/buffer/IntRingBuffer.d.ts'
import type { CharMatcher } from '../../../../../../../com/oracle/truffle/regex/tregex/matchers/CharMatcher.d.ts'
import type { PureNFA } from '../../../../../../../com/oracle/truffle/regex/tregex/nfa/PureNFA.d.ts'
import type { PureNFAState } from '../../../../../../../com/oracle/truffle/regex/tregex/nfa/PureNFAState.d.ts'
import type { PureNFATransition } from '../../../../../../../com/oracle/truffle/regex/tregex/nfa/PureNFATransition.d.ts'
import type { TRegexExecutorBaseNode } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/TRegexExecutorBaseNode.d.ts'
import type { TRegexExecutorLocals } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/TRegexExecutorLocals.d.ts'
import type { TRegexBacktrackerSubExecutorNode } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/nfa/TRegexBacktrackerSubExecutorNode.d.ts'
import type { TRegexBacktrackingNFAExecutorLocals } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/nfa/TRegexBacktrackingNFAExecutorLocals.d.ts'
import type { CaseFoldData$CaseFoldAlgorithm } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/CaseFoldData$CaseFoldAlgorithm.d.ts'
import type { RegexFlavor$EqualsIgnoreCasePredicate } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/RegexFlavor$EqualsIgnoreCasePredicate.d.ts'
import type { Token$Quantifier } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/Token$Quantifier.d.ts'
import type { InnerLiteral } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/InnerLiteral.d.ts'
import type { RegexAST } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexAST.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../../../../org/graalvm/collections/Pair.d.ts'
export class TRegexBacktrackingNFAExecutorNode extends TRegexBacktrackerSubExecutorNode {
    static ASTRAL_PROBABILITY: number;
    static BMP_PROBABILITY: number;
    static CONTINUE_PROBABILITY: number;
    static EXIT_PROBABILITY: number;
    static LATIN1_PROBABILITY: number;
    static NO_SUB_EXECUTORS: (Object | null)[];
    static inputIncRaw(paramindex: number, paramoffset: number, paramforward: boolean): number;
    constructor(ast: RegexAST, nfa: PureNFA, numberOfStates: number, numberOfTransitions: number, subExecutors: TRegexExecutorBaseNode[], mustAdvance: boolean, compilationBuffer: CompilationBuffer)
    // private equalsIgnoreCase: (param0: number, param1: number, param2: boolean) => boolean;
    // private flags: number;
    // private indexOfNode: TruffleString$ByteIndexOfStringNode;
    // private innerLiteral: InnerLiteral;
    // private loopbackInitialStateMatcher: CharMatcher;
    // private matchers: CharMatcher[];
    // private maxNTransitions: number;
    // private multiCharacterExpansionCaseFoldAlgorithm: CaseFoldData$CaseFoldAlgorithm;
    // private nQuantifiers: number;
    // private nZeroWidthQuantifiers: number;
    // private nfa: PureNFA;
    readonly numberOfStates: number;
    // private quantifiers: Token$Quantifier[];
    // private regionMatchesNode: TruffleString$RegionEqualByteIndexNode;
    // private zeroWidthQuantifierCGOffsets: number[];
    // private zeroWidthQuantifiers: Token$Quantifier[];
    // private zeroWidthTermEnclosedCGLow: number[];
    // private canInlineBackReferenceIntoTransition(backRef: PureNFAState): boolean;
    // private canInlineLookAroundIntoTransition(s: PureNFAState): boolean;
    // private checkSubMatcherInline(frame: VirtualFrame, locals: TRegexBacktrackingNFAExecutorLocals, codeRange: TruffleString$CodeRange, transition: PureNFATransition, target: PureNFAState): boolean;
    createLocals(input: TruffleString, fromIndex: number, maxIndex: number, regionFrom: number, regionTo: number, index: number): TRegexExecutorLocals;
    // private equalsIgnoreCase(a: number, b: number, alternativeMode: boolean): boolean;
    execute(frame: VirtualFrame, abstractLocals: TRegexExecutorLocals, codeRange: TruffleString$CodeRange): Object;
    // private findInnerLiteral(locals: TRegexBacktrackingNFAExecutorLocals): number;
    // private getBackRefBounds(locals: TRegexBacktrackingNFAExecutorLocals, backReference: PureNFAState): Pair<number, number>;
    // private getBackRefBounds(locals: TRegexBacktrackingNFAExecutorLocals, backReference: PureNFAState, transition: PureNFATransition, index: number): Pair<number, number>;
    // private getIndexOfNode(): TruffleString$ByteIndexOfStringNode;
    getName(): string;
    // private getNewIndex(locals: TRegexBacktrackingNFAExecutorLocals, target: PureNFAState, index: number): number;
    getNumberOfStates(): number;
    // private getQuantifier(guard: number): Token$Quantifier;
    // private getRegionMatchesNode(): TruffleString$RegionEqualByteIndexNode;
    // private getSubExecutor(subMatcherState: PureNFAState): TRegexExecutorBaseNode;
    // private getZeroWidthQuantifier(guard: number): Token$Quantifier;
    // private inputBoundsCheck(i: number, min: number, max: number): boolean;
    // private isAcceptableFinalState(state: PureNFAState, locals: TRegexBacktrackingNFAExecutorLocals): boolean;
    isBackrefWithNullTargetFails(): boolean;
    isBackreferenceIgnoreCaseMultiCharExpansion(): boolean;
    isEmptyChecksOnMandatoryLoopIterations(): boolean;
    // private isFlagSet(flag: number): boolean;
    isForward(): boolean;
    isLoneSurrogates(): boolean;
    isLoopbackInitialState(): boolean;
    isMatchBoundaryAssertions(): boolean;
    isMonitorCaptureGroupsInEmptyCheck(): boolean;
    isMustAdvance(): boolean;
    isRecursiveBackreferences(): boolean;
    isRewindFixedWidthLookBehind(): boolean;
    isTrackLastGroup(): boolean;
    isTransitionMatchesStepByStep(): boolean;
    isUseMergeExplode(): boolean;
    // private lookAroundExecutorIsLiteral(s: PureNFAState): boolean;
    // private matchBackReferenceGeneric(locals: TRegexBacktrackingNFAExecutorLocals, backReference: PureNFAState, codeRange: TruffleString$CodeRange): number;
    // private matchBackReferenceSimple(locals: TRegexBacktrackingNFAExecutorLocals, backReference: PureNFAState, transition: PureNFATransition, index: number): boolean;
    // private matchBackreferenceGenericMultiCharExpansion(locals: TRegexBacktrackingNFAExecutorLocals, codeRange: TruffleString$CodeRange, backrefStart: number, backrefEnd: number): number;
    // private matchBackreferenceGenericMultiCharExpansionAddFolded(buf: IntRingBuffer, codePoint: number): void;
    // private matchBackreferenceGenericSingleChars(locals: TRegexBacktrackingNFAExecutorLocals, backReference: PureNFAState, codeRange: TruffleString$CodeRange, backrefStart: number, backrefEnd: number): number;
    returnsFirstGroup(): boolean;
    // private runMergeExplode(frame: VirtualFrame, locals: TRegexBacktrackingNFAExecutorLocals, codeRange: TruffleString$CodeRange): void;
    // private runSlowPath(frame: MaterializedFrame, locals: TRegexBacktrackingNFAExecutorLocals, codeRange: TruffleString$CodeRange): void;
    // private runState(frame: VirtualFrame, locals: TRegexBacktrackingNFAExecutorLocals, codeRange: TruffleString$CodeRange, curState: PureNFAState): number;
    // private runSubMatcher(frame: VirtualFrame, subLocals: TRegexBacktrackingNFAExecutorLocals, codeRange: TruffleString$CodeRange, subMatcherState: PureNFAState): number[];
    shallowCopy(): TRegexBacktrackerSubExecutorNode;
    // private subExecutorReturnsFirstGroup(s: PureNFAState): boolean;
    // private transitionMatches(frame: VirtualFrame, locals: TRegexBacktrackingNFAExecutorLocals, codeRange: TruffleString$CodeRange, transition: PureNFATransition, index: number, atEnd: boolean, c: number): boolean;
    // private tryUpdateState(frame: VirtualFrame, locals: TRegexBacktrackingNFAExecutorLocals, codeRange: TruffleString$CodeRange, transition: PureNFATransition, index: number, atEnd: boolean, c: number): boolean;
    // private updateState(locals: TRegexBacktrackingNFAExecutorLocals, transition: PureNFATransition, index: number): void;
    writesCaptureGroups(): boolean;
}