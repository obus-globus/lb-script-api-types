import type { MaterializedFrame } from '../../../../../../../com/oracle/truffle/api/frame/MaterializedFrame.d.ts'
import type { VirtualFrame } from '../../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { TruffleString } from '../../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$ByteIndexOfStringNode } from '../../../../../../../com/oracle/truffle/api/strings/TruffleString$ByteIndexOfStringNode.d.ts'
import type { TruffleString$CodeRange } from '../../../../../../../com/oracle/truffle/api/strings/TruffleString$CodeRange.d.ts'
import type { TruffleString$RegionEqualByteIndexNode } from '../../../../../../../com/oracle/truffle/api/strings/TruffleString$RegionEqualByteIndexNode.d.ts'
import type { CompilationBuffer } from '../../../../../../../com/oracle/truffle/regex/tregex/buffer/CompilationBuffer.d.ts'
import type { IntRingBuffer } from '../../../../../../../com/oracle/truffle/regex/tregex/buffer/IntRingBuffer.d.ts'
import type { PureNFA } from '../../../../../../../com/oracle/truffle/regex/tregex/nfa/PureNFA.d.ts'
import type { TRegexExecutorBaseNode } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/TRegexExecutorBaseNode.d.ts'
import type { TRegexExecutorLocals } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/TRegexExecutorLocals.d.ts'
import type { TRegexBacktrackerSubExecutorNode } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/nfa/TRegexBacktrackerSubExecutorNode.d.ts'
import type { TRegexBacktrackingNFAExecutorLocals } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/nfa/TRegexBacktrackingNFAExecutorLocals.d.ts'
import type { CaseFoldData$CaseFoldAlgorithm } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/CaseFoldData$CaseFoldAlgorithm.d.ts'
import type { RegexFlavor$EqualsIgnoreCasePredicate } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/RegexFlavor$EqualsIgnoreCasePredicate.d.ts'
import type { InnerLiteral } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/InnerLiteral.d.ts'
import type { RegexAST } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexAST.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class TRegexBacktrackingNFAExecutorNode extends TRegexBacktrackerSubExecutorNode {
    static ASTRAL_PROBABILITY: number;
    static BMP_PROBABILITY: number;
    static CONTINUE_PROBABILITY: number;
    static EXIT_PROBABILITY: number;
    static LATIN1_PROBABILITY: number;
    static NO_SUB_EXECUTORS: TRegexExecutorBaseNode[];
    static create(paramast: RegexAST, paramnfa: PureNFA, paramnumberOfStates: number, paramnumberOfTransitions: number, paramsubExecutors: TRegexExecutorBaseNode[], parammustAdvance: boolean, paramcompilationBuffer: CompilationBuffer): TRegexBacktrackingNFAExecutorNode;
    static inputIncRaw(paramindex: number, paramoffset: number, paramforward: boolean): number;
    private constructor(copy: TRegexBacktrackingNFAExecutorNode)
    private constructor(ast: RegexAST, numberOfTransitions: number, subExecutors: TRegexExecutorBaseNode[], compactNFA: number[], matchers: number[], groupBoundaries: number[], guards: number[], quantifiers: number[], zeroWidthQuantifiers: number[], backRefNumbers: number[], fixedWidth: number, anchoredInitialStateRecord: number, unAnchoredInitialStateRecord: number, numberOfStates: number, maxNTransitions: number, flags: number, innerLiteral: InnerLiteral, zeroWidthTermEnclosedCGLow: number[], zeroWidthQuantifierCGOffsets: number[], equalsIgnoreCase: (param0: number, param1: number, param2: boolean) => boolean, loopbackInitialStateMatcherRef: number, multiCharacterExpansionCaseFoldAlgorithm: CaseFoldData$CaseFoldAlgorithm)
    // private anchoredInitialStateRecord: number;
    // private backRefNumbers: number[];
    // private equalsIgnoreCase: (param0: number, param1: number, param2: boolean) => boolean;
    // private fixedWidth: number;
    // private flags: number;
    // private groupBoundaries: number[];
    // private guards: number[];
    // private indexOfNode: TruffleString$ByteIndexOfStringNode;
    // private innerLiteral: InnerLiteral;
    // private loopbackInitialStateMatcherRef: number;
    // private matchers: number[];
    // private maxNTransitions: number;
    // private multiCharacterExpansionCaseFoldAlgorithm: CaseFoldData$CaseFoldAlgorithm;
    // private nfa: number[];
    readonly numberOfStates: number;
    // private quantifiers: number[];
    // private regionMatchesNode: TruffleString$RegionEqualByteIndexNode;
    // private unAnchoredInitialStateRecord: number;
    // private zeroWidthQuantifierCGOffsets: number[];
    // private zeroWidthQuantifiers: number[];
    // private zeroWidthTermEnclosedCGLow: number[];
    // private canInlineBackReferenceIntoTransition(backReferenceStateRecord: number): boolean;
    // private canInlineLookAroundIntoTransition(stateRecord: number): boolean;
    // private checkSubMatcherInline(frame: VirtualFrame, locals: TRegexBacktrackingNFAExecutorLocals, codeRange: TruffleString$CodeRange, transitionRecord: number, targetStateRecord: number): boolean;
    createLocals(input: TruffleString, fromIndex: number, maxIndex: number, regionFrom: number, regionTo: number, index: number): TRegexExecutorLocals;
    // private equalsIgnoreCase(a: number, b: number, alternativeMode: boolean): boolean;
    execute(frame: VirtualFrame, abstractLocals: TRegexExecutorLocals, codeRange: TruffleString$CodeRange): Object;
    // private findInnerLiteral(locals: TRegexBacktrackingNFAExecutorLocals): number;
    // private getBackRefBounds(locals: TRegexBacktrackingNFAExecutorLocals, backReferenceStateRecord: number): number;
    // private getBackRefBounds(locals: TRegexBacktrackingNFAExecutorLocals, backReferenceStateRecord: number, transitionRecord: number, index: number): number;
    // private getGuardCount(guardRecord: number): number;
    // private getIndexOfNode(): TruffleString$ByteIndexOfStringNode;
    getName(): string;
    // private getNewIndex(locals: TRegexBacktrackingNFAExecutorLocals, targetStateRecord: number, index: number): number;
    getNumberOfStates(): number;
    // private getQuantifierIndexOfZeroWidthQuantifier(zeroWidthQuantifierIndex: number): number;
    // private getQuantifierMax(guard: number): number;
    // private getQuantifierMin(guard: number): number;
    // private getRegionMatchesNode(): TruffleString$RegionEqualByteIndexNode;
    // private getStateData(stateRecord: number): number;
    // private getStateDirectoryLength(): number;
    // private getStateFlags(stateRecord: number): number;
    // private getStateKind(stateRecord: number): number;
    // private getStateRecord(stateIndex: number): number;
    // private getStateTransitionCount(stateRecord: number): number;
    // private getSubExecutor(stateRecord: number): TRegexExecutorBaseNode;
    // private getTransitionFlags(transitionRecord: number): number;
    // private getTransitionGroupBoundaries(transitionRecord: number): number;
    // private getTransitionGuards(transitionRecord: number): number;
    // private getTransitionTargetStateRecord(transitionRecord: number): number;
    // private getZeroWidthQuantifierMin(zeroWidthQuantifierIndex: number): number;
    // private guardAt(guardRecord: number, i: number): number;
    // private hasCaretGuard(transitionRecord: number): boolean;
    // private hasDollarGuard(transitionRecord: number): boolean;
    // private hasMatchBeginGuard(transitionRecord: number): boolean;
    // private hasMatchEndGuard(transitionRecord: number): boolean;
    // private inputBoundsCheck(i: number, min: number, max: number): boolean;
    // private isAcceptableFinalState(stateRecord: number, locals: TRegexBacktrackingNFAExecutorLocals): boolean;
    // private isAnchoredFinalState(stateRecord: number): boolean;
    // private isBackReference(stateRecord: number): boolean;
    isBackrefWithNullTargetFails(): boolean;
    isBackreferenceIgnoreCaseMultiCharExpansion(): boolean;
    // private isCharacterClass(stateRecord: number): boolean;
    // private isDeterministic(stateRecord: number): boolean;
    isEmptyChecksOnMandatoryLoopIterations(): boolean;
    // private isFinalState(stateRecord: number): boolean;
    // private isFlagSet(flag: number): boolean;
    isForward(): boolean;
    // private isIgnoreCaseReference(stateRecord: number): boolean;
    // private isIgnoreCaseReferenceAlternativeMode(stateRecord: number): boolean;
    isLoneSurrogates(): boolean;
    // private isLookAround(stateRecord: number): boolean;
    isLoopbackInitialState(): boolean;
    isMatchBoundaryAssertions(): boolean;
    isMonitorCaptureGroupsInEmptyCheck(): boolean;
    isMustAdvance(): boolean;
    isRecursiveBackreferences(): boolean;
    // private isRecursiveReference(stateRecord: number): boolean;
    isRewindFixedWidthLookBehind(): boolean;
    // private isSubMatcher(stateRecord: number): boolean;
    // private isSubMatcherNegated(stateRecord: number): boolean;
    isTrackLastGroup(): boolean;
    isTransitionMatchesStepByStep(): boolean;
    // private isUnAnchoredFinalState(stateRecord: number): boolean;
    isUseMergeExplode(): boolean;
    // private lookAroundExecutorIsLiteral(stateRecord: number): boolean;
    // private matchBackReferenceGeneric(locals: TRegexBacktrackingNFAExecutorLocals, backReferenceStateRecord: number, codeRange: TruffleString$CodeRange): number;
    // private matchBackReferenceSimple(locals: TRegexBacktrackingNFAExecutorLocals, backReferenceStateRecord: number, transitionRecord: number, index: number): boolean;
    // private matchBackreferenceGenericMultiCharExpansion(locals: TRegexBacktrackingNFAExecutorLocals, codeRange: TruffleString$CodeRange, backrefStart: number, backrefEnd: number): number;
    // private matchBackreferenceGenericMultiCharExpansionAddFolded(buf: IntRingBuffer, codePoint: number): void;
    // private matchBackreferenceGenericSingleChars(locals: TRegexBacktrackingNFAExecutorLocals, backReferenceStateRecord: number, codeRange: TruffleString$CodeRange, backrefStart: number, backrefEnd: number): number;
    returnsFirstGroup(): boolean;
    // private runMergeExplode(frame: VirtualFrame, locals: TRegexBacktrackingNFAExecutorLocals, codeRange: TruffleString$CodeRange): void;
    // private runSlowPath(frame: MaterializedFrame, locals: TRegexBacktrackingNFAExecutorLocals, codeRange: TruffleString$CodeRange): void;
    // private runState(frame: VirtualFrame, locals: TRegexBacktrackingNFAExecutorLocals, codeRange: TruffleString$CodeRange, stateRecord: number): number;
    // private runSubMatcher(frame: VirtualFrame, subLocals: TRegexBacktrackingNFAExecutorLocals, codeRange: TruffleString$CodeRange, stateRecord: number): number[];
    shallowCopy(): TRegexBacktrackerSubExecutorNode;
    // private subExecutorReturnsFirstGroup(stateRecord: number): boolean;
    // private subMatchFailed(stateRecord: number, subMatchResult: Object): boolean;
    // private transitionMatches(frame: VirtualFrame, locals: TRegexBacktrackingNFAExecutorLocals, codeRange: TruffleString$CodeRange, transitionRecord: number, targetStateRecord: number, index: number, atEnd: boolean, c: number): boolean;
    // private tryUpdateState(frame: VirtualFrame, locals: TRegexBacktrackingNFAExecutorLocals, codeRange: TruffleString$CodeRange, transitionRecord: number, targetStateRecord: number, index: number, atEnd: boolean, c: number): boolean;
    // private updateState(locals: TRegexBacktrackingNFAExecutorLocals, transitionRecord: number, targetStateRecord: number, index: number): void;
    writesCaptureGroups(): boolean;
}