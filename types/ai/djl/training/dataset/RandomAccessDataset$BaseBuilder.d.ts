import type { Device } from '../../../../ai/djl/Device.d.ts'
import type { Sampler } from '../../../../ai/djl/training/dataset/Sampler.d.ts'
import type { Batchifier } from '../../../../ai/djl/translate/Batchifier.d.ts'
import type { Pipeline } from '../../../../ai/djl/translate/Pipeline.d.ts'
import type { Transform } from '../../../../ai/djl/translate/Transform.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class RandomAccessDataset$BaseBuilder<T extends RandomAccessDataset$BaseBuilder<T>> extends Object {
    constructor()
    // private dataBatchifier: Batchifier;
    // private device: Device;
    // private labelBatchifier: Batchifier;
    // private limit: number;
    // private pipeline: Pipeline;
    // private prefetchNumber: number;
    sampler: Sampler;
    // private targetPipeline: Pipeline;
    addTargetTransform(arg0: Transform): T;
    addTransform(arg0: Transform): T;
    getSampler(): Sampler;
    optDataBatchifier(arg0: Batchifier): T;
    optDevice(arg0: Device): T;
    optLabelBatchifier(arg0: Batchifier): T;
    optLimit(arg0: number): T;
    optPipeline(arg0: Pipeline): T;
    optPrefetchNumber(arg0: number): T;
    optTargetPipeline(arg0: Pipeline): T;
    self(): T;
    setSampling(arg0: Sampler): T;
    setSampling(arg0: number, arg1: boolean): T;
    setSampling(arg0: number, arg1: boolean, arg2: boolean): T;
}