import type { DecisionState } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/DecisionState.d.ts'
import type { StarLoopbackState } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/StarLoopbackState.d.ts'
export class StarLoopEntryState extends DecisionState {
    static serializationNames: string[];
    constructor()
    isPrecedenceDecision: boolean;
    loopBackState: StarLoopbackState;
    getStateType(): number;
}