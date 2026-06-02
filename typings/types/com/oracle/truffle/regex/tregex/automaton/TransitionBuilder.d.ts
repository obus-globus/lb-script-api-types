import type { AbstractState } from '../../../../../../com/oracle/truffle/regex/tregex/automaton/AbstractState.d.ts'
import type { AbstractTransition } from '../../../../../../com/oracle/truffle/regex/tregex/automaton/AbstractTransition.d.ts'
import type { StateIndex } from '../../../../../../com/oracle/truffle/regex/tregex/automaton/StateIndex.d.ts'
import type { TransitionSet } from '../../../../../../com/oracle/truffle/regex/tregex/automaton/TransitionSet.d.ts'
import type { DFABQTrackingTransitionOpsNode } from '../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/DFABQTrackingTransitionOpsNode.d.ts'
import type { JsonConvertible } from '../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonConvertible.d.ts'
import type { JsonValue } from '../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonValue.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TransitionBuilder<SI extends StateIndex<S>, S extends AbstractState<S, T>, T extends AbstractTransition<S, T>> extends Object implements JsonConvertible {
    constructor(transitionSet: TransitionSet<SI, S, T>, matcherBuilder: (Object | null)[], constraints: number[], operations: number[])
    constructor(transitions: T[], targetStateSet: S[], matcherBuilder: (Object | null)[], constraints: number[], operations: number[])
    readonly bqTransition: DFABQTrackingTransitionOpsNode;
    readonly constraints: number[];
    // private cps: (Object | null)[];
    readonly operations: number[];
    readonly transitionSet: TransitionSet<SI, S, T>;
    getBqTransition(): DFABQTrackingTransitionOpsNode;
    getCodePointSet(): (Object | null)[];
    getConstraints(): number[];
    getOperations(): number[];
    getTransitionSet(): TransitionSet<SI, S, T>;
    hasBqTransition(): boolean;
    hasConstraints(): boolean;
    hasNoConstraints(): boolean;
    hasOperations(): boolean;
    setBqTransition(bqTransition: DFABQTrackingTransitionOpsNode): void;
    setConstraints(constraints: number[]): void;
    setMatcherBuilder(cps: (Object | null)[]): void;
    setOperations(operations: number[]): void;
    toJson(): JsonValue;
}