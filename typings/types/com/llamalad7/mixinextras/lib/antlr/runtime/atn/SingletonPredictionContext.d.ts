import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Recognizer } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/Recognizer.d.ts'
import type { RuleContext } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/RuleContext.d.ts'
import type { ATN } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/ATN.d.ts'
import type { ArrayPredictionContext } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/ArrayPredictionContext.d.ts'
import type { PredictionContext } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/PredictionContext.d.ts'
import type { PredictionContextCache } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/PredictionContextCache.d.ts'
import type { DoubleKeyMap } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/misc/DoubleKeyMap.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class SingletonPredictionContext extends PredictionContext {
    static create(paramarg0: PredictionContext, paramarg1: number): SingletonPredictionContext;
    static fromRuleContext(paramarg0: ATN, paramarg1: RuleContext): PredictionContext;
    static getCachedContext(paramarg0: PredictionContext, paramarg1: PredictionContextCache, paramarg2: JavaMap<PredictionContext, PredictionContext>): PredictionContext;
    static merge(paramarg0: PredictionContext, paramarg1: PredictionContext, paramarg2: boolean, paramarg3: DoubleKeyMap<PredictionContext, PredictionContext, PredictionContext>): PredictionContext;
    static mergeArrays(paramarg0: ArrayPredictionContext, paramarg1: ArrayPredictionContext, paramarg2: boolean, paramarg3: DoubleKeyMap<PredictionContext, PredictionContext, PredictionContext>): PredictionContext;
    static mergeRoot(paramarg0: SingletonPredictionContext, paramarg1: SingletonPredictionContext, paramarg2: boolean): PredictionContext;
    static mergeSingletons(paramarg0: SingletonPredictionContext, paramarg1: SingletonPredictionContext, paramarg2: boolean, paramarg3: DoubleKeyMap<PredictionContext, PredictionContext, PredictionContext>): PredictionContext;
    constructor(arg0: PredictionContext, arg1: number)
    readonly parent: PredictionContext;
    readonly returnState: number;
    equals(arg0: Object | null): boolean;
    getParent(arg0: number): PredictionContext;
    getReturnState(arg0: number): number;
    size(): number;
    toString(): string;
    toString(arg0: Recognizer<Object, any>): string;
}