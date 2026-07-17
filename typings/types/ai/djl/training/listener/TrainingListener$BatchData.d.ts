import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Device } from '../../../../ai/djl/Device.d.ts'
import type { Batch } from '../../../../ai/djl/training/dataset/Batch.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TrainingListener$BatchData extends Object {
    constructor(arg0: Batch, arg1: JavaMap<Device, (Object | null)[]>, arg2: JavaMap<Device, (Object | null)[]>)
    readonly batch: Batch;
    readonly labels: JavaMap<Device, (Object | null)[]>;
    readonly predictions: JavaMap<Device, (Object | null)[]>;
    getBatch(): Batch;
    getLabels(): JavaMap<Device, (Object | null)[]>;
    getPredictions(): JavaMap<Device, (Object | null)[]>;
}