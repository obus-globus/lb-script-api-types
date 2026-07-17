import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { ATNState } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/ATNState.d.ts'
import type { IntervalSet } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/misc/IntervalSet.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class Transition extends Object {
    static serializationNames: string[];
    static serializationTypes: JavaMap<Class<Transition>, number>;
    constructor(arg0: ATNState)
    target: ATNState;
    getSerializationType(): number;
    isEpsilon(): boolean;
    label(): IntervalSet;
    matches(arg0: number, arg1: number, arg2: number): boolean;
}