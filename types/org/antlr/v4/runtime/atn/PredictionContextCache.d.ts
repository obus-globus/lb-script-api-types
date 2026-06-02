import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PredictionContext } from '../../../../../org/antlr/v4/runtime/atn/PredictionContext.d.ts'
export class PredictionContextCache extends Object {
    constructor()
    // private cache: Map<PredictionContext, PredictionContext>;
    add(arg0: PredictionContext): PredictionContext;
    get(arg0: PredictionContext): PredictionContext;
    size(): number;
}