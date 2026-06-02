import type { AbstractState } from '../../../../../../com/oracle/truffle/regex/tregex/automaton/AbstractState.d.ts'
import type { AbstractTransition } from '../../../../../../com/oracle/truffle/regex/tregex/automaton/AbstractTransition.d.ts'
import type { StateIndex } from '../../../../../../com/oracle/truffle/regex/tregex/automaton/StateIndex.d.ts'
import type { StateTransitionCanonicalizer$ConstraintDeduplicationKey } from '../../../../../../com/oracle/truffle/regex/tregex/automaton/StateTransitionCanonicalizer$ConstraintDeduplicationKey.d.ts'
import type { TransitionBuilder } from '../../../../../../com/oracle/truffle/regex/tregex/automaton/TransitionBuilder.d.ts'
import type { CompilationBuffer } from '../../../../../../com/oracle/truffle/regex/tregex/buffer/CompilationBuffer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class StateTransitionCanonicalizer<SI extends StateIndex<S>, S extends AbstractState<S, T>, T extends AbstractTransition<S, T>, TB extends TransitionBuilder<SI, S, T>> extends Object {
    constructor(stateIndex: SI, forward: boolean, prioritySensitive: boolean, booleanMatch: boolean)
    // private anyArgConstraints: boolean;
    // private argCharSets: T[];
    // private argConstraints: T[];
    // private argOperations: T[];
    // private argTransitions: T[];
    // private booleanMatch: boolean;
    // private constraintBuilder: number[][];
    // private constraintDeduplicationSet: StateTransitionCanonicalizer$ConstraintDeduplicationKey[];
    // private forward: boolean;
    // private intersectingArgs: number[][];
    // private leadsToFinalState: number[];
    // private matcherBuilders: (Object | null)[][];
    // private operationLists: number[][];
    // private prioritySensitive: boolean;
    // private resultLength: number;
    // private resultLengthStage1: number;
    // private skipStack: number[];
    // private stack: number[];
    // private stateIndex: SI;
    // private targetStateSets: S[][];
    // private transitionLists: T[][];
    addArgument(transition: T, charSet: (Object | null)[], constraintsArg: number[], operations: number[]): void;
    // private addToStack(transition: T, charSet: (Object | null)[], constraints: number[], operations: number[], j: number): void;
    // private addTransitionTo(i: number, transition: T, operations: number[]): void;
    // private addTransitionToStage1(iArg: number, i: number, transition: T, operations: number[]): void;
    // private calcDisjointTransitions(compilationBuffer: CompilationBuffer): void;
    canMerge(a: TB, b: TB): boolean;
    createResultArray(size: number): TB[];
    // private createSlot(): void;
    createTransitionArray(size: number): T[];
    createTransitionBuilder(transitions: T[], targetStateSet: S[], matcherBuilder: (Object | null)[], constraints: number[], operations: number[]): TB;
    // private duplicateSlot(i: number, matcher: (Object | null)[], constraints: number[]): void;
    isBooleanMatch(): boolean;
    isPrioritySensitive(): boolean;
    // private mergeSameTargets(compilationBuffer: CompilationBuffer): TB[];
    run(compilationBuffer: CompilationBuffer): TB[];
    shouldPruneAfterFinalState(): boolean;
}