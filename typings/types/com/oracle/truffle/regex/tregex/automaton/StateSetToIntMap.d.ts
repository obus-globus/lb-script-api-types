import type { AbstractState } from '../../../../../../com/oracle/truffle/regex/tregex/automaton/AbstractState.d.ts'
import type { AbstractTransition } from '../../../../../../com/oracle/truffle/regex/tregex/automaton/AbstractTransition.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class StateSetToIntMap<S extends AbstractState<S, T>, T extends AbstractTransition<S, T>> extends Object {
    static create(paramsingleState: Object | null): StateSetToIntMap<Object, Object>;
    static create(paramstateSet: (Object | null)[]): StateSetToIntMap<Object, Object>;
    private constructor(keys: number[])
    // private keys: number[];
    // private usedValues: number[];
    // private values: number[];
    fillRest(): void;
    getKey(state: S): number;
    getKey(stateID: number): number;
    getValue(state: S): number;
    getValue(stateID: number): number;
    isValueUsed(value: number): boolean;
    put(state: S, value: number): void;
    put(stateID: number, value: number): void;
}