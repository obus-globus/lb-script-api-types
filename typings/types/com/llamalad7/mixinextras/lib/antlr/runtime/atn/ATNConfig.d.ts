import type { Recognizer } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/Recognizer.d.ts'
import type { ATNState } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/ATNState.d.ts'
import type { PredictionContext } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/PredictionContext.d.ts'
import type { SemanticContext } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/SemanticContext.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ATNConfig extends Object {
    constructor(arg0: ATNConfig, arg1: ATNState)
    constructor(arg0: ATNConfig, arg1: ATNState, arg2: PredictionContext)
    constructor(arg0: ATNConfig, arg1: ATNState, arg2: PredictionContext, arg3: SemanticContext)
    constructor(arg0: ATNConfig, arg1: ATNState, arg2: SemanticContext)
    constructor(arg0: ATNConfig, arg1: SemanticContext)
    constructor(arg0: ATNState, arg1: number, arg2: PredictionContext)
    constructor(arg0: ATNState, arg1: number, arg2: PredictionContext, arg3: SemanticContext)
    alt: number;
    context: PredictionContext;
    reachesIntoOuterContext: number;
    semanticContext: SemanticContext;
    state: ATNState;
    equals(arg0: ATNConfig): boolean;
    equals(arg0: Object | null): boolean;
    getOuterContextDepth(): number;
    hashCode(): number;
    isPrecedenceFilterSuppressed(): boolean;
    setPrecedenceFilterSuppressed(arg0: boolean): void;
    toString(): string;
    toString(arg0: Recognizer<Object, any>, arg1: boolean): string;
}