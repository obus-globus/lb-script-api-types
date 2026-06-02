import type { ATN } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/ATN.d.ts'
import type { PredictionContext } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/PredictionContext.d.ts'
import type { PredictionContextCache } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/PredictionContextCache.d.ts'
import type { DFAState } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/dfa/DFAState.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class ATNSimulator extends Object {
    static ERROR: DFAState;
    constructor(arg0: ATN, arg1: PredictionContextCache)
    atn: ATN;
    // private sharedContextCache: PredictionContextCache;
    getCachedContext(arg0: PredictionContext): PredictionContext;
    reset(): void;
}