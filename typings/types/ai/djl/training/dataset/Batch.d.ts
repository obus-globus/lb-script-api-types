import type { Device } from '../../../../ai/djl/Device.d.ts'
import type { NDManager } from '../../../../ai/djl/ndarray/NDManager.d.ts'
import type { Batchifier } from '../../../../ai/djl/translate/Batchifier.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Batch extends Object implements AutoCloseable {
    constructor(arg0: NDManager, arg1: (Object | null)[], arg2: (Object | null)[], arg3: number, arg4: Batchifier, arg5: Batchifier, arg6: number, arg7: number)
    constructor(arg0: NDManager, arg1: (Object | null)[], arg2: (Object | null)[], arg3: number, arg4: Batchifier, arg5: Batchifier, arg6: number, arg7: number, arg8: (Object | null)[])
    readonly data: (Object | null)[];
    // private dataBatchifier: Batchifier;
    readonly indices: (Object | null)[];
    // private labelBatchifier: Batchifier;
    readonly labels: (Object | null)[];
    readonly manager: NDManager;
    readonly progress: number;
    readonly progressTotal: number;
    readonly size: number;
    close(): void;
    getData(): (Object | null)[];
    getIndices(): (Object | null)[];
    getLabels(): (Object | null)[];
    getManager(): NDManager;
    getProgress(): number;
    getProgressTotal(): number;
    getSize(): number;
    // private split(arg0: (Object | null)[], arg1: Batchifier, arg2: number, arg3: boolean): (Object | null)[][];
    split(arg0: Device[], arg1: boolean): Batch[];
}