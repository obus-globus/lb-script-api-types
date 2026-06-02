import type { Device } from '../../../../ai/djl/Device.d.ts'
import type { Batch } from '../../../../ai/djl/training/dataset/Batch.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TrainingListener$BatchData extends Object {
    constructor(arg0: Batch, arg1: Map<Device, (Object | null)[]>, arg2: Map<Device, (Object | null)[]>)
    readonly batch: Batch;
    readonly labels: Map<Device, (Object | null)[]>;
    readonly predictions: Map<Device, (Object | null)[]>;
    getBatch(): Batch;
    getLabels(): Map<Device, (Object | null)[]>;
    getPredictions(): Map<Device, (Object | null)[]>;
}