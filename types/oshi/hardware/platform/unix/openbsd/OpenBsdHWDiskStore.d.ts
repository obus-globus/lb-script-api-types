import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { HWDiskStore } from '../../../../../oshi/hardware/HWDiskStore.d.ts'
import type { HWPartition } from '../../../../../oshi/hardware/HWPartition.d.ts'
import type { AbstractHWDiskStore } from '../../../../../oshi/hardware/common/AbstractHWDiskStore.d.ts'
export class OpenBsdHWDiskStore extends AbstractHWDiskStore {
    static getDisks(): HWDiskStore[];
    private constructor(arg0: string, arg1: string, arg2: string, arg3: number)
    readonly currentQueueLength: number;
    // private iostat: () => string[];
    // private partitionList: HWPartition[];
    readonly readBytes: number;
    readonly reads: number;
    readonly timeStamp: number;
    readonly transferTime: number;
    readonly writeBytes: number;
    readonly writes: number;
    getCurrentQueueLength(): number;
    getPartitions(): HWPartition[];
    getReadBytes(): number;
    getReads(): number;
    getTimeStamp(): number;
    getTransferTime(): number;
    getWriteBytes(): number;
    getWrites(): number;
    updateAttributes(): boolean;
}