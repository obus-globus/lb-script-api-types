import type { ATNState } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/ATNState.d.ts'
import type { Transition } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/Transition.d.ts'
import type { IntervalSet } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/misc/IntervalSet.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class RangeTransition extends Transition {
    static serializationNames: string[];
    static serializationTypes: Map<Object | null, number>;
    constructor(arg0: ATNState, arg1: number, arg2: number)
    from: number;
    to: number;
    getSerializationType(): number;
    label(): IntervalSet;
    matches(arg0: number, arg1: number, arg2: number): boolean;
    toString(): string;
}