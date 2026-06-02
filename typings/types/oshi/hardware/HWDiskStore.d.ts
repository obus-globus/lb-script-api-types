import type { Object } from '../../java/lang/Object.d.ts'
import type { HWPartition } from '../../oshi/hardware/HWPartition.d.ts'
export interface HWDiskStore extends Object{
    getCurrentQueueLength(): number;
    getModel(): string;
    getName(): string;
    getPartitions(): HWPartition[];
    getReadBytes(): number;
    getReads(): number;
    getSerial(): string;
    getSize(): number;
    getTimeStamp(): number;
    getTransferTime(): number;
    getWriteBytes(): number;
    getWrites(): number;
    updateAttributes(): boolean;
}