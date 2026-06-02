import type { ATNState } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/ATNState.d.ts'
export abstract class DecisionState extends ATNState {
    static serializationNames: string[];
    constructor()
    decision: number;
    nonGreedy: boolean;
}