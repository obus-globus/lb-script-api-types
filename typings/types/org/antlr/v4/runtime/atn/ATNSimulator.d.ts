import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ATN } from '../../../../../org/antlr/v4/runtime/atn/ATN.d.ts'
import type { PredictionContext } from '../../../../../org/antlr/v4/runtime/atn/PredictionContext.d.ts'
import type { PredictionContextCache } from '../../../../../org/antlr/v4/runtime/atn/PredictionContextCache.d.ts'
import type { DFAState } from '../../../../../org/antlr/v4/runtime/dfa/DFAState.d.ts'
export abstract class ATNSimulator extends Object {
    static ERROR: DFAState;
    constructor(arg0: ATN, arg1: PredictionContextCache)
    atn: ATN;
    readonly sharedContextCache: PredictionContextCache;
    clearDFA(): void;
    getCachedContext(arg0: PredictionContext): PredictionContext;
    getSharedContextCache(): PredictionContextCache;
    reset(): void;
}