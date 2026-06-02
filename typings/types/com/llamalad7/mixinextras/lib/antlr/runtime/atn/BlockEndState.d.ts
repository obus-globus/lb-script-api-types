import type { ATNState } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/ATNState.d.ts'
import type { BlockStartState } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/BlockStartState.d.ts'
export class BlockEndState extends ATNState {
    static serializationNames: string[];
    constructor()
    startState: BlockStartState;
    getStateType(): number;
}