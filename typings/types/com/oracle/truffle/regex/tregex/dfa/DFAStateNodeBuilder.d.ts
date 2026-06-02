import type { BasicState } from '../../../../../../com/oracle/truffle/regex/tregex/automaton/BasicState.d.ts'
import type { TransitionSet } from '../../../../../../com/oracle/truffle/regex/tregex/automaton/TransitionSet.d.ts'
import type { CompilationBuffer } from '../../../../../../com/oracle/truffle/regex/tregex/buffer/CompilationBuffer.d.ts'
import type { DFAGenerator } from '../../../../../../com/oracle/truffle/regex/tregex/dfa/DFAGenerator.d.ts'
import type { DFAStateTransitionBuilder } from '../../../../../../com/oracle/truffle/regex/tregex/dfa/DFAStateTransitionBuilder.d.ts'
import type { NFA } from '../../../../../../com/oracle/truffle/regex/tregex/nfa/NFA.d.ts'
import type { NFAState } from '../../../../../../com/oracle/truffle/regex/tregex/nfa/NFAState.d.ts'
import type { NFAStateTransition } from '../../../../../../com/oracle/truffle/regex/tregex/nfa/NFAStateTransition.d.ts'
import type { DFACaptureGroupLazyTransition } from '../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/DFACaptureGroupLazyTransition.d.ts'
import type { JsonConvertible } from '../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonConvertible.d.ts'
import type { JsonValue } from '../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonValue.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DFAStateNodeBuilder extends BasicState<DFAStateNodeBuilder, DFAStateTransitionBuilder> implements JsonConvertible {
    constructor(id: number, nfaStateSet: TransitionSet<NFA, NFAState, NFAStateTransition>, isBackwardPrefixState: boolean, isInitialState: boolean, forward: boolean, prioritySensitive: boolean)
    readonly anchoredFinalConstraints: number[][];
    readonly anchoredFinalStateTransition: NFAStateTransition;
    readonly backwardPrefixState: number;
    readonly lazyTransitions: DFACaptureGroupLazyTransition[];
    readonly nfaTransitionSet: TransitionSet<NFA, NFAState, NFAStateTransition>;
    readonly preCalculatedAnchoredResult: number;
    readonly preCalculatedUnAnchoredResult: number;
    readonly unAnchoredFinalConstraints: number[][];
    readonly unAnchoredFinalStateTransition: NFAStateTransition;
    clearPreCalculatedResults(): void;
    // private computeAnchoredFinalConstraints(): void;
    // private computeUnAnchoredFinalConstraints(): void;
    coversFullCharSpace(compilationBuffer: CompilationBuffer): boolean;
    createTransitionsArray(length: number): DFAStateTransitionBuilder[];
    equals(obj: Object | null): boolean;
    // private findNextLo(indices: number[], findLo: number): number;
    getAnchoredFinalConstraints(): number[][];
    getAnchoredFinalStateTransition(): NFAStateTransition;
    getBackwardPrefixState(): number;
    getLazyTransitions(): DFACaptureGroupLazyTransition[];
    getNfaTransitionSet(): TransitionSet<NFA, NFAState, NFAStateTransition>;
    getPreCalculatedAnchoredResult(): number;
    getPreCalculatedUnAnchoredResult(): number;
    getUnAnchoredFinalConstraints(): number[][];
    getUnAnchoredFinalStateTransition(): NFAStateTransition;
    hasBackwardPrefixState(): boolean;
    hasUnGuardedTransitionToUnAnchoredFinalState(forward: boolean): boolean;
    hashCode(): number;
    isBackwardPrefixState(): boolean;
    isFinalState(): boolean;
    isFinalStateSuccessor(): boolean;
    isForward(): boolean;
    isPrioritySensitive(): boolean;
    isReachable(): boolean;
    isUnAnchoredFinalState(): boolean;
    setAnchoredFinalStateTransition(anchoredFinalStateTransition: NFAStateTransition): void;
    setBackwardPrefixState(backwardPrefixState: number): void;
    setFinalStateSuccessor(): void;
    setIsBackwardPrefixState(backwardPrefixState: boolean): void;
    setLazyTransitions(lazyTransitions: DFACaptureGroupLazyTransition[]): void;
    setNfaTransitionSet(nfaTransitionSet: TransitionSet<NFA, NFAState, NFAStateTransition>): void;
    setOverrideFinalState(overrideFinalState: boolean): void;
    setReachable(): void;
    setUnAnchoredFinalStateTransition(unAnchoredFinalStateTransition: NFAStateTransition): void;
    stateSetToString(): string;
    toJson(): JsonValue;
    toString(): string;
    updateFinalStateData(dfaGenerator: DFAGenerator): DFAStateNodeBuilder;
    // private updatePreCalcAnchoredResult(newResult: number): void;
    updatePreCalcUnAnchoredResult(newResult: number): void;
}