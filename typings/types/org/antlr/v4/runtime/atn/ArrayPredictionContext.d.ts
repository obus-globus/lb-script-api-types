import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Recognizer } from '../../../../../org/antlr/v4/runtime/Recognizer.d.ts'
import type { RuleContext } from '../../../../../org/antlr/v4/runtime/RuleContext.d.ts'
import type { ATN } from '../../../../../org/antlr/v4/runtime/atn/ATN.d.ts'
import type { PredictionContext } from '../../../../../org/antlr/v4/runtime/atn/PredictionContext.d.ts'
import type { PredictionContextCache } from '../../../../../org/antlr/v4/runtime/atn/PredictionContextCache.d.ts'
import type { SingletonPredictionContext } from '../../../../../org/antlr/v4/runtime/atn/SingletonPredictionContext.d.ts'
import type { DoubleKeyMap } from '../../../../../org/antlr/v4/runtime/misc/DoubleKeyMap.d.ts'
export class ArrayPredictionContext extends PredictionContext {
    static EMPTY_RETURN_STATE: number;
    static fromRuleContext(paramarg0: ATN, paramarg1: RuleContext): PredictionContext;
    static getAllContextNodes(paramarg0: PredictionContext): PredictionContext[];
    static getAllContextNodes_(paramarg0: PredictionContext, paramarg1: PredictionContext[], paramarg2: Map<PredictionContext, PredictionContext>): void;
    static getCachedContext(paramarg0: PredictionContext, paramarg1: PredictionContextCache, paramarg2: Map<PredictionContext, PredictionContext>): PredictionContext;
    static merge(paramarg0: PredictionContext, paramarg1: PredictionContext, paramarg2: boolean, paramarg3: DoubleKeyMap<PredictionContext, PredictionContext, PredictionContext>): PredictionContext;
    static mergeArrays(paramarg0: ArrayPredictionContext, paramarg1: ArrayPredictionContext, paramarg2: boolean, paramarg3: DoubleKeyMap<PredictionContext, PredictionContext, PredictionContext>): PredictionContext;
    static mergeRoot(paramarg0: SingletonPredictionContext, paramarg1: SingletonPredictionContext, paramarg2: boolean): PredictionContext;
    static mergeSingletons(paramarg0: SingletonPredictionContext, paramarg1: SingletonPredictionContext, paramarg2: boolean, paramarg3: DoubleKeyMap<PredictionContext, PredictionContext, PredictionContext>): PredictionContext;
    static toDOTString(paramarg0: PredictionContext): string;
    constructor(arg0: PredictionContext[], arg1: number[])
    constructor(arg0: SingletonPredictionContext)
    parents: PredictionContext[];
    returnStates: number[];
    equals(arg0: Object | null): boolean;
    getParent(arg0: number): PredictionContext;
    getReturnState(arg0: number): number;
    isEmpty(): boolean;
    size(): number;
    toString(): string;
    toString(arg0: Recognizer<Object, any>): string;
}