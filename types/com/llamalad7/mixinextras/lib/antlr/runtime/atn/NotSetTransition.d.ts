import type { ATNState } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/ATNState.d.ts'
import type { SetTransition } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/SetTransition.d.ts'
import type { IntervalSet } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/misc/IntervalSet.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class NotSetTransition extends SetTransition {
    static serializationNames: string[];
    static serializationTypes: Map<Object | null, number>;
    constructor(arg0: ATNState, arg1: IntervalSet)
    getSerializationType(): number;
    matches(arg0: number, arg1: number, arg2: number): boolean;
    toString(): string;
}