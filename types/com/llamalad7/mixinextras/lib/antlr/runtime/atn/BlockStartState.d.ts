import type { BlockEndState } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/BlockEndState.d.ts'
import type { DecisionState } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/DecisionState.d.ts'
export abstract class BlockStartState extends DecisionState {
    static serializationNames: string[];
    constructor()
    endState: BlockEndState;
}