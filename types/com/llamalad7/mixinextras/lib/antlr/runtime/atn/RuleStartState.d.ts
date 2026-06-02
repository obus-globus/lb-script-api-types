import type { ATNState } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/ATNState.d.ts'
import type { RuleStopState } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/RuleStopState.d.ts'
export class RuleStartState extends ATNState {
    static serializationNames: string[];
    constructor()
    isLeftRecursiveRule: boolean;
    stopState: RuleStopState;
    getStateType(): number;
}