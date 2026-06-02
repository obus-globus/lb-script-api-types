import type { Perfstat$perfstat_disk_t } from '../../../../../com/sun/jna/platform/unix/aix/Perfstat$perfstat_disk_t.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { HWDiskStore } from '../../../../../oshi/hardware/HWDiskStore.d.ts'
import type { HWPartition } from '../../../../../oshi/hardware/HWPartition.d.ts'
import type { AbstractHWDiskStore } from '../../../../../oshi/hardware/common/AbstractHWDiskStore.d.ts'
export class AixHWDiskStore extends AbstractHWDiskStore {
    static getDisks(paramarg0: () => (Object | null)[]): HWDiskStore[];
    private constructor(arg0: string, arg1: string, arg2: string, arg3: number, arg4: () => Perfstat$perfstat_disk_t[])
    readonly currentQueueLength: number;
    // private diskStats: () => Perfstat$perfstat_disk_t[];
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