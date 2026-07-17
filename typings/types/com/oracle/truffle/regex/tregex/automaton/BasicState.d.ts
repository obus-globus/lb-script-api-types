import type { AbstractState } from '../../../../../../com/oracle/truffle/regex/tregex/automaton/AbstractState.d.ts'
import type { AbstractTransition } from '../../../../../../com/oracle/truffle/regex/tregex/automaton/AbstractTransition.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class BasicState<S extends BasicState<S, T>, T extends AbstractTransition<S, T>> extends Object implements AbstractState<S, T> {
    static isAnchoredFinalState(paramflags: number): boolean;
    static isUnAnchoredFinalState(paramflags: number): boolean;
    constructor(original: BasicState<S, T>)
    constructor(id: number, emptyTransitions: T[])
    constructor(id: number, flags: number, emptyTransitions: T[])
    readonly flags: number;
    readonly id: number;
    // private nPredecessors: number;
    readonly predecessors: T[];
    readonly successors: T[];
    addPredecessor(predecessor: T): void;
    // private addPredecessor(predecessor: T, unchecked: boolean): void;
    addPredecessorUnchecked(predecessor: T): void;
    createTransitionsArray(length: number): T[];
    decPredecessors(): void;
    getFlag(flag: number): boolean;
    getFlags(): number;
    getId(): number;
    getNPredecessors(): number;
    getPredecessors(): T[];
    getPredecessors(forward: boolean): T[];
    getSuccessors(): T[];
    getSuccessors(forward: boolean): T[];
    hasPredecessors(): boolean;
    hasSuccessors(): boolean;
    hasUnGuardedTransitionToUnAnchoredFinalState(forward: boolean): boolean;
    incPredecessors(): void;
    isAnchoredFinalState(): boolean;
    isAnchoredFinalState(forward: boolean): boolean;
    isAnchoredInitialState(): boolean;
    isAnchoredInitialState(forward: boolean): boolean;
    isDead(forward: boolean): boolean;
    isFinalState(): boolean;
    isFinalState(forward: boolean): boolean;
    isGuardedAnchoredFinalState(): boolean;
    isGuardedFinalState(): boolean;
    isGuardedFinalState(forward: boolean): boolean;
    isGuardedUnAnchoredFinalState(): boolean;
    isInitialState(): boolean;
    isInitialState(forward: boolean): boolean;
    isUnAnchoredFinalState(): boolean;
    isUnAnchoredFinalState(forward: boolean): boolean;
    isUnAnchoredInitialState(): boolean;
    isUnAnchoredInitialState(forward: boolean): boolean;
    setAnchoredFinalState(): void;
    setAnchoredInitialState(): void;
    setFlag(flag: number): void;
    setFlag(flag: number, value: boolean): void;
    setGuardedAnchoredFinalState(value: boolean): void;
    setGuardedUnAnchoredFinalState(value: boolean): void;
    setPredecessors(predecessors: T[]): void;
    setSuccessors(successors: T[]): void;
    setUnAnchoredFinalState(): void;
    setUnAnchoredInitialState(): void;
    setUnAnchoredInitialState(value: boolean): void;
}