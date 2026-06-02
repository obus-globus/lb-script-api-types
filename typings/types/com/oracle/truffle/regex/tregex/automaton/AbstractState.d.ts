import type { AbstractTransition } from '../../../../../../com/oracle/truffle/regex/tregex/automaton/AbstractTransition.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface AbstractState<S extends AbstractState<S, T>, T extends AbstractTransition<S, T>> extends Object{
    getId(): number;
}