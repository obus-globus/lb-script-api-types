import type { Device } from '../../../ai/djl/Device.d.ts'
import type { Model } from '../../../ai/djl/Model.d.ts'
import type { StreamingTranslator$StreamOutput } from '../../../ai/djl/inference/streaming/StreamingTranslator$StreamOutput.d.ts'
import type { Dimension } from '../../../ai/djl/metric/Dimension.d.ts'
import type { Metrics } from '../../../ai/djl/metric/Metrics.d.ts'
import type { NDManager } from '../../../ai/djl/ndarray/NDManager.d.ts'
import type { Block } from '../../../ai/djl/nn/Block.d.ts'
import type { ParameterStore } from '../../../ai/djl/training/ParameterStore.d.ts'
import type { Translator } from '../../../ai/djl/translate/Translator.d.ts'
import type { TranslatorContext } from '../../../ai/djl/translate/TranslatorContext.d.ts'
import type { AutoCloseable } from '../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Predictor<I extends unknown, O extends unknown> extends Object implements AutoCloseable {
    constructor(arg0: Model, arg1: Translator<I, O>, arg2: Device, arg3: boolean)
    // private block: Block;
    // private dimension: Dimension;
    // private manager: NDManager;
    metrics: Metrics;
    // private model: Model;
    // private parameterStore: ParameterStore;
    // private prepared: boolean;
    // private timestamp: number;
    // private translator: Translator<I, O>;
    batchPredict(arg0: I[]): O[];
    close(): void;
    finalize(): void;
    // private postProcessEnd(arg0: number, arg1: number): void;
    predict(arg0: I): O;
    // private predictEnd(arg0: (Object | null)[], arg1: number): void;
    predictInternal(arg0: TranslatorContext, arg1: (Object | null)[]): (Object | null)[];
    // private preprocessEnd(arg0: (Object | null)[], arg1: number): void;
    // private processInputs(arg0: TranslatorContext, arg1: I[]): (Object | null)[];
    setMetrics(arg0: Metrics): void;
    streamingPredict(arg0: I): StreamingTranslator$StreamOutput<O>;
    // private streamingSupportError(): string;
    supportsStreaming(): boolean;
    // private waitToRead(arg0: (Object | null)[]): void;
}