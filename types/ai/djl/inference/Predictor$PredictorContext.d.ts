import type { Model } from '../../../ai/djl/Model.d.ts'
import type { Metrics } from '../../../ai/djl/metric/Metrics.d.ts'
import type { NDManager } from '../../../ai/djl/ndarray/NDManager.d.ts'
import type { Block } from '../../../ai/djl/nn/Block.d.ts'
import type { TranslatorContext } from '../../../ai/djl/translate/TranslatorContext.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Predictor$PredictorContext extends Object implements TranslatorContext {
    constructor(arg0: Model, arg1: NDManager, arg2: Metrics)
    // private attachments: { [key: string]: Object };
    // private ctxManager: NDManager;
    readonly metrics: Metrics;
    readonly model: Model;
    readonly predictorManager: NDManager;
    close(): void;
    getAttachment(arg0: string): Object;
    getBlock(): Block;
    getMetrics(): Metrics;
    getModel(): Model;
    getNDManager(): NDManager;
    getPredictorManager(): NDManager;
    setAttachment(arg0: string, arg1: Object): void;
}