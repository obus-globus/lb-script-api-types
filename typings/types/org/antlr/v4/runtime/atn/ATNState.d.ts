import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ATN } from '../../../../../org/antlr/v4/runtime/atn/ATN.d.ts'
import type { Transition } from '../../../../../org/antlr/v4/runtime/atn/Transition.d.ts'
import type { IntervalSet } from '../../../../../org/antlr/v4/runtime/misc/IntervalSet.d.ts'
export abstract class ATNState extends Object {
    static BASIC: number;
    static BLOCK_END: number;
    static BLOCK_START: number;
    static INITIAL_NUM_TRANSITIONS: number;
    static INVALID_STATE_NUMBER: number;
    static INVALID_TYPE: number;
    static LOOP_END: number;
    static PLUS_BLOCK_START: number;
    static PLUS_LOOP_BACK: number;
    static RULE_START: number;
    static RULE_STOP: number;
    static STAR_BLOCK_START: number;
    static STAR_LOOP_BACK: number;
    static STAR_LOOP_ENTRY: number;
    static TOKEN_START: number;
    static serializationNames: string[];
    constructor()
    atn: ATN;
    epsilonOnlyTransitions: boolean;
    nextTokenWithinRule: IntervalSet;
    ruleIndex: number;
    stateNumber: number;
    readonly transitions: Transition[];
    addTransition(arg0: number, arg1: Transition): void;
    addTransition(arg0: Transition): void;
    equals(arg0: Object | null): boolean;
    getNumberOfTransitions(): number;
    getStateType(): number;
    getTransitions(): Transition[];
    hashCode(): number;
    isNonGreedyExitState(): boolean;
    onlyHasEpsilonTransitions(): boolean;
    removeTransition(arg0: number): Transition;
    setRuleIndex(arg0: number): void;
    setTransition(arg0: number, arg1: Transition): void;
    toString(): string;
    transition(arg0: number): Transition;
}