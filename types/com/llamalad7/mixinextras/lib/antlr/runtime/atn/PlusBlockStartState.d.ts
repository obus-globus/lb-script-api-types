import type { BlockStartState } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/BlockStartState.d.ts'
import type { PlusLoopbackState } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/PlusLoopbackState.d.ts'
export class PlusBlockStartState extends BlockStartState {
    static serializationNames: string[];
    constructor()
    loopBackState: PlusLoopbackState;
    getStateType(): number;
}