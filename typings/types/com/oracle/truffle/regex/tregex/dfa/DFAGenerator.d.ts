import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { TruffleString$CodePointSet } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$CodePointSet.d.ts'
import type { RegexOptions } from '../../../../../../com/oracle/truffle/regex/RegexOptions.d.ts'
import type { TRegexCompilationRequest } from '../../../../../../com/oracle/truffle/regex/tregex/TRegexCompilationRequest.d.ts'
import type { TransitionSet } from '../../../../../../com/oracle/truffle/regex/tregex/automaton/TransitionSet.d.ts'
import type { CompilationBuffer } from '../../../../../../com/oracle/truffle/regex/tregex/buffer/CompilationBuffer.d.ts'
import type { DFACaptureGroupLazyTransitionBuilder } from '../../../../../../com/oracle/truffle/regex/tregex/dfa/DFACaptureGroupLazyTransitionBuilder.d.ts'
import type { DFACaptureGroupTransitionBuilder } from '../../../../../../com/oracle/truffle/regex/tregex/dfa/DFACaptureGroupTransitionBuilder.d.ts'
import type { DFACaptureGroupTransitionBuilder$PartialTransitionDebugInfo } from '../../../../../../com/oracle/truffle/regex/tregex/dfa/DFACaptureGroupTransitionBuilder$PartialTransitionDebugInfo.d.ts'
import type { DFAStateNodeBuilder } from '../../../../../../com/oracle/truffle/regex/tregex/dfa/DFAStateNodeBuilder.d.ts'
import type { DFAStateTransitionBuilder } from '../../../../../../com/oracle/truffle/regex/tregex/dfa/DFAStateTransitionBuilder.d.ts'
import type { DFATransitionCanonicalizer } from '../../../../../../com/oracle/truffle/regex/tregex/dfa/DFATransitionCanonicalizer.d.ts'
import type { NFA } from '../../../../../../com/oracle/truffle/regex/tregex/nfa/NFA.d.ts'
import type { NFAState } from '../../../../../../com/oracle/truffle/regex/tregex/nfa/NFAState.d.ts'
import type { NFAStateTransition } from '../../../../../../com/oracle/truffle/regex/tregex/nfa/NFAStateTransition.d.ts'
import type { AllTransitionsInOneTreeMatcher } from '../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/AllTransitionsInOneTreeMatcher.d.ts'
import type { CGTrackingDFAStateNode } from '../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/CGTrackingDFAStateNode.d.ts'
import type { DFAAbstractNode } from '../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/DFAAbstractNode.d.ts'
import type { DFAAbstractStateNode } from '../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/DFAAbstractStateNode.d.ts'
import type { DFAAbstractTransitionNode } from '../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/DFAAbstractTransitionNode.d.ts'
import type { DFACaptureGroupLazyTransition } from '../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/DFACaptureGroupLazyTransition.d.ts'
import type { DFACaptureGroupLazyTransition$BranchesDirect } from '../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/DFACaptureGroupLazyTransition$BranchesDirect.d.ts'
import type { DFACaptureGroupPartialTransition } from '../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/DFACaptureGroupPartialTransition.d.ts'
import type { DFASimpleCGTransition } from '../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/DFASimpleCGTransition.d.ts'
import type { Matchers } from '../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/Matchers.d.ts'
import type { SequentialMatchers$Builder } from '../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/SequentialMatchers$Builder.d.ts'
import type { TRegexDFAExecutorNode } from '../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/TRegexDFAExecutorNode.d.ts'
import type { TRegexDFAExecutorProperties } from '../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/TRegexDFAExecutorProperties.d.ts'
import type { Counter } from '../../../../../../com/oracle/truffle/regex/tregex/parser/Counter.d.ts'
import type { Encodings$Encoding } from '../../../../../../com/oracle/truffle/regex/tregex/string/Encodings$Encoding.d.ts'
import type { JsonConvertible } from '../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonConvertible.d.ts'
import type { JsonValue } from '../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonValue.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { EconomicMap } from '../../../../../../org/graalvm/collections/EconomicMap.d.ts'
export class DFAGenerator extends Object implements JsonConvertible {
    constructor(compilationRequest: TRegexCompilationRequest, nfa: NFA, executorProps: TRegexDFAExecutorProperties, compilationBuffer: CompilationBuffer)
    // private bfsTraversalCur: DFAStateTransitionBuilder[][];
    // private bfsTraversalNext: DFAStateTransitionBuilder[][];
    // private boundedQuantifierTrackerSizes: number[];
    // private bqTrivialAlwaysReEnter: number[];
    // private bqTrivialNeverReEnter: number[];
    // private canonicalizer: DFATransitionCanonicalizer;
    readonly cgPartialTransitionIDCounter: Counter;
    // private cgPartialTransitions: DFACaptureGroupTransitionBuilder$PartialTransitionDebugInfo[];
    readonly compilationBuffer: CompilationBuffer;
    // private compilationRequest: TRegexCompilationRequest;
    // private dfaTransitionsDedupMap: JavaMap<DFAAbstractTransitionNode, DFAAbstractTransitionNode>;
    // private doSimpleCG: boolean;
    readonly entryStates: DFAStateNodeBuilder[];
    // private executorProps: TRegexDFAExecutorProperties;
    // private expansionQueue: DFAStateNodeBuilder[];
    // private hasAmbiguousStates: boolean;
    // private indexOfParams: TruffleString$CodePointSet[];
    // private initialCGTransitions: DFACaptureGroupTransitionBuilder[];
    // private innerLiteralPrefixMatcher: TRegexDFAExecutorNode;
    // private lookupDummyState: DFAStateNodeBuilder;
    // private matchersBuilder: SequentialMatchers$Builder;
    // private maxNumberOfNfaStates: number;
    // private nextID: number;
    readonly nfa: NFA;
    // private nfaFirstStates: NFAState[];
    // private pruneUnambiguousPaths: boolean;
    // private simpleCGMustCopy: boolean;
    // private stateIndexMap: DFAStateNodeBuilder[];
    readonly stateMap: JavaMap<DFAStateNodeBuilder, DFAStateNodeBuilder>;
    // private stateReplacements: EconomicMap<number, DFAAbstractStateNode>;
    // private transitionIDCounter: Counter;
    // private addSuccessors(stateSet: NFAState[], state: NFAState): void;
    // private bfsExpand(s: DFAStateNodeBuilder): void;
    // private bfsSwapLists(): void;
    // private calcCGLoopToSelfDependency(cgLoopToSelf: DFACaptureGroupPartialTransition): boolean;
    calcDFA(): void;
    // private checkTrivialQuantifiers(): void;
    // private createAllTransitionsInOneTreeMatcher(state: DFAStateNodeBuilder, coversCharSpace: boolean): AllTransitionsInOneTreeMatcher;
    // private createAndDedupSimpleCGTransition(nodes: DFAAbstractNode[], successor: number, nfaTransition: NFAStateTransition): number;
    // private createBQTransitions(nodes: DFAAbstractNode[]): void;
    // private createBranchesDirect(s: DFAStateNodeBuilder, maps: EconomicMap<DFACaptureGroupPartialTransition, number[]>[], i: number): DFACaptureGroupLazyTransition$BranchesDirect;
    // private createCGFinalTransition(transition: NFAStateTransition): DFACaptureGroupPartialTransition;
    // private createCGTrackingDFAState(nodes: DFAAbstractNode[], s: DFAStateNodeBuilder, id: number, matchers: Matchers, successors: number[], indexOfNodeId: number, indexOfIsFast: number, loopToSelf: number, flags: number): CGTrackingDFAStateNode;
    createDFAExecutor(): TRegexDFAExecutorNode;
    // private createDFAExecutorStates(): DFAAbstractNode[];
    // private createInitialCGTransition(target: DFAStateNodeBuilder): DFACaptureGroupTransitionBuilder;
    // private createInitialState(transition: DFAStateTransitionBuilder): DFAStateNodeBuilder;
    // private createInitialStateBackward(...entries: NFAStateTransition[]): DFAStateNodeBuilder;
    // private createInitialStatesBackward(): void;
    // private createInitialStatesForward(): void;
    // private createNFATransitionSet(initialTransition: NFAStateTransition): TransitionSet<NFA, NFAState, NFAStateTransition>;
    // private createNFATransitionSet(t1: NFAStateTransition, t2: NFAStateTransition): TransitionSet<NFA, NFAState, NFAStateTransition>;
    // private createSimpleCGTransition(id: number, successor: number, nfaTransition: NFAStateTransition): DFASimpleCGTransition;
    // private createState(transitionSet: TransitionSet<NFA, NFAState, NFAStateTransition>, isBackwardPrefixState: boolean, isInitialState: boolean): DFAStateNodeBuilder;
    // private createStateIndexMap(size: number): void;
    // private createTransitionBuilder(transitionSet: TransitionSet<NFA, NFAState, NFAStateTransition>): DFAStateTransitionBuilder;
    // private createWithLookup(s: DFAStateNodeBuilder, maps: EconomicMap<DFACaptureGroupPartialTransition, number[]>[], i: number): DFACaptureGroupLazyTransition;
    // private debugMode(): boolean;
    // private dedupDFATransition(nodes: DFAAbstractNode[], successor: number, t: DFAAbstractTransitionNode): number;
    // private expandState(state: DFAStateNodeBuilder): void;
    // private getAnchoredInitialState(): DFAStateNodeBuilder;
    getCgPartialTransitionIDCounter(): Counter;
    getCompilationBuffer(): CompilationBuffer;
    getDebugDumpName(): string;
    getDebugDumpName(name: string): string;
    // private getEncoding(): Encodings$Encoding;
    getEntryStates(): DFAStateNodeBuilder[];
    // private getLazyTransitionBuilder(precedingTransitions: DFAStateTransitionBuilder): DFACaptureGroupLazyTransitionBuilder;
    // private getMaxOffsetAnchoredInitialState(): DFAStateNodeBuilder;
    getNfa(): NFA;
    getOptions(): RegexOptions;
    getProps(): TRegexDFAExecutorProperties;
    // private getReplacement(id: number): DFAAbstractStateNode;
    getState(stateNodeID: number): DFAStateNodeBuilder;
    // private getStateIndexMap(): DFAStateNodeBuilder[];
    getStateMap(): JavaMap<DFAStateNodeBuilder, DFAStateNodeBuilder>;
    // private getUnanchoredInitialState(): DFAStateNodeBuilder;
    // private innerLiteralCanFindMatchStart(unanchoredInitialState: DFAStateNodeBuilder, literalLastDFAState: DFAStateNodeBuilder): boolean;
    // private innerLiteralMatchesPrefix(prefixNFAStates: NFAState[]): boolean;
    // private innerLiteralTryMatchPrefix(prefixNFAStates: NFAState[], start: NFAState[]): boolean;
    // private isBooleanMatch(): boolean;
    isForward(): boolean;
    isGenericCG(): boolean;
    isSearching(): boolean;
    // private lookupState(transitionSet: TransitionSet<NFA, NFAState, NFAStateTransition>, isBackWardPrefixState: boolean): DFAStateNodeBuilder;
    // private needBFSTraversalLists(): boolean;
    // private optimizeBoundedQuantifierDataMapping(): void;
    // private optimizeDFA(): void;
    // private reScheduleFinalStateSuccessor(finalStateSuccessor: DFAStateNodeBuilder): void;
    // private reScheduleFinalStateSuccessors(state: DFAStateNodeBuilder, successorState: DFAStateNodeBuilder): void;
    registerCGPartialTransitionDebugInfo(partialTransition: DFACaptureGroupTransitionBuilder$PartialTransitionDebugInfo): void;
    // private registerStateReplacement(id: number, replacement: DFAAbstractStateNode): void;
    toJson(): JsonValue;
    // private trackBoundedQuantifiers(): boolean;
    // private trackPredecessors(): boolean;
    // private tryInnerLiteralOptimization(): void;
    // private tryPruneTraceFinderState(state: DFAStateNodeBuilder): boolean;
    updateMaxNumberOfNFAStatesInOneTransition(value: number): void;
}