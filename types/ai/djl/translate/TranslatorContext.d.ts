import type { Model } from '../../../ai/djl/Model.d.ts'
import type { Metrics } from '../../../ai/djl/metric/Metrics.d.ts'
import type { NDManager } from '../../../ai/djl/ndarray/NDManager.d.ts'
import type { Block } from '../../../ai/djl/nn/Block.d.ts'
import type { AutoCloseable } from '../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface TranslatorContext extends AutoCloseable, Object{
    close(): void;
    getAttachment(arg0: string): Object;
    getBlock(): Block;
    getMetrics(): Metrics;
    getModel(): Model;
    getNDManager(): NDManager;
    getPredictorManager(): NDManager;
    setAttachment(arg0: string, arg1: Object): void;
}