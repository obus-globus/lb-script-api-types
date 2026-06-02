import type { ATN } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/ATN.d.ts'
import type { Transition } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/Transition.d.ts'
import type { IntervalSet } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/misc/IntervalSet.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class ATNState extends Object {
    static serializationNames: string[];
    constructor()
    atn: ATN;
    epsilonOnlyTransitions: boolean;
    nextTokenWithinRule: IntervalSet;
    ruleIndex: number;
    stateNumber: number;
    // private transitions: Transition[];
    addTransition(arg0: Transition): void;
    addTransition(arg0: number, arg1: Transition): void;
    equals(arg0: Object | null): boolean;
    getNumberOfTransitions(): number;
    getStateType(): number;
    hashCode(): number;
    onlyHasEpsilonTransitions(): boolean;
    removeTransition(arg0: number): Transition;
    toString(): string;
    transition(arg0: number): Transition;
}