import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Recognizer } from '../../../../../org/antlr/v4/runtime/Recognizer.d.ts'
import type { ATNState } from '../../../../../org/antlr/v4/runtime/atn/ATNState.d.ts'
import type { PredictionContext } from '../../../../../org/antlr/v4/runtime/atn/PredictionContext.d.ts'
import type { SemanticContext } from '../../../../../org/antlr/v4/runtime/atn/SemanticContext.d.ts'
export class ATNConfig extends Object {
    constructor(arg0: ATNConfig)
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
    equals(arg0: Object | null): boolean;
    equals(arg0: ATNConfig): boolean;
    getOuterContextDepth(): number;
    hashCode(): number;
    isPrecedenceFilterSuppressed(): boolean;
    setPrecedenceFilterSuppressed(arg0: boolean): void;
    toString(): string;
    toString(arg0: Recognizer<Object, any>, arg1: boolean): string;
}