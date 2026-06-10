import type { ATNState } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/ATNState.d.ts'
import type { Transition } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/Transition.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
export class WildcardTransition extends Transition {
    static serializationNames: string[];
    static serializationTypes: Map<Class<Transition>, number>;
    constructor(arg0: ATNState)
    getSerializationType(): number;
    matches(arg0: number, arg1: number, arg2: number): boolean;
    toString(): string;
}