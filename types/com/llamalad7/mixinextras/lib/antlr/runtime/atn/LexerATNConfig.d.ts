import type { ATNConfig } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/ATNConfig.d.ts'
import type { ATNState } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/ATNState.d.ts'
import type { LexerActionExecutor } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/LexerActionExecutor.d.ts'
import type { PredictionContext } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/PredictionContext.d.ts'
export class LexerATNConfig extends ATNConfig {
    constructor(arg0: ATNState, arg1: number, arg2: PredictionContext)
    constructor(arg0: LexerATNConfig, arg1: ATNState)
    constructor(arg0: LexerATNConfig, arg1: ATNState, arg2: LexerActionExecutor)
    constructor(arg0: LexerATNConfig, arg1: ATNState, arg2: PredictionContext)
    readonly lexerActionExecutor: LexerActionExecutor;
    // private passedThroughNonGreedyDecision: boolean;
    equals(arg0: ATNConfig): boolean;
    getLexerActionExecutor(): LexerActionExecutor;
    hasPassedThroughNonGreedyDecision(): boolean;
    hashCode(): number;
}