import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { ATNState } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/ATNState.d.ts'
import type { Transition } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/Transition.d.ts'
import type { IntervalSet } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/misc/IntervalSet.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
export class SetTransition extends Transition {
    static serializationNames: string[];
    static serializationTypes: JavaMap<Class<Transition>, number>;
    constructor(arg0: ATNState, arg1: IntervalSet)
    set: IntervalSet;
    getSerializationType(): number;
    label(): IntervalSet;
    matches(arg0: number, arg1: number, arg2: number): boolean;
    toString(): string;
}