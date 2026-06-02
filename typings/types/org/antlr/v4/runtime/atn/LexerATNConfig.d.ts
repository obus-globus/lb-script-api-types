import type { ATNConfig } from '../../../../../org/antlr/v4/runtime/atn/ATNConfig.d.ts'
import type { ATNState } from '../../../../../org/antlr/v4/runtime/atn/ATNState.d.ts'
import type { LexerActionExecutor } from '../../../../../org/antlr/v4/runtime/atn/LexerActionExecutor.d.ts'
import type { PredictionContext } from '../../../../../org/antlr/v4/runtime/atn/PredictionContext.d.ts'
export class LexerATNConfig extends ATNConfig {
    constructor(arg0: ATNState, arg1: number, arg2: PredictionContext)
    constructor(arg0: ATNState, arg1: number, arg2: PredictionContext, arg3: LexerActionExecutor)
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