import type { AbstractState } from '../../../../../../com/oracle/truffle/regex/tregex/automaton/AbstractState.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface AbstractTransition<S extends AbstractState<S, T>, T extends AbstractTransition<S, T>> extends Object{
    getId(): number;
    getSource(): S;
    getTarget(): S;
    getTarget(forward: boolean): S;
}