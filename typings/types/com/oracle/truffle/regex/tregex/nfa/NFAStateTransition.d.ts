import type { AbstractState } from '../../../../../../com/oracle/truffle/regex/tregex/automaton/AbstractState.d.ts'
import type { AbstractTransition } from '../../../../../../com/oracle/truffle/regex/tregex/automaton/AbstractTransition.d.ts'
import type { NFAState } from '../../../../../../com/oracle/truffle/regex/tregex/nfa/NFAState.d.ts'
import type { GroupBoundaries } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/GroupBoundaries.d.ts'
import type { JsonConvertible } from '../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonConvertible.d.ts'
import type { JsonValue } from '../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonValue.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class NFAStateTransition extends Object implements AbstractTransition<NFAState, NFAStateTransition>, JsonConvertible {
    constructor(original: NFAStateTransition)
    constructor(id: number, source: NFAState, target: NFAState, codePointSet: (Object | null)[], groupBoundaries: GroupBoundaries, constraints: number[], operations: number[])
    readonly codePointSet: (Object | null)[];
    readonly constraints: number[];
    readonly groupBoundaries: GroupBoundaries;
    readonly id: number;
    readonly operations: number[];
    readonly source: NFAState;
    readonly target: NFAState;
    equals(o: Object | null): boolean;
    getCodePointSet(): (Object | null)[];
    getConstraints(): number[];
    getGroupBoundaries(): GroupBoundaries;
    getId(): number;
    getOperations(): number[];
    getSource(): NFAState;
    getSource(forward: boolean): NFAState;
    getTarget<S extends AbstractState<S, T>>(forward: boolean): S;
    getTarget(): NFAState;
    getTarget(forward: boolean): NFAState;
    hasConstraints(): boolean;
    hashCode(): number;
    setSource(source: NFAState): void;
    setTarget(target: NFAState): void;
    toJson(): JsonValue;
    toJson(forward: boolean): JsonValue;
    toString(): string;
}