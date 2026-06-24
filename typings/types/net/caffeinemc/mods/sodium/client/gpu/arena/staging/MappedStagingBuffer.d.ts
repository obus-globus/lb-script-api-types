import type { GpuBuffer } from '../../../../../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { PriorityQueue } from '../../../../../../../../it/unimi/dsi/fastutil/PriorityQueue.d.ts'
import type { ByteBuffer } from '../../../../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { MappedStagingBuffer$CopyCommand } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gpu/arena/staging/MappedStagingBuffer$CopyCommand.d.ts'
import type { MappedStagingBuffer$FencedMemoryRegion } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gpu/arena/staging/MappedStagingBuffer$FencedMemoryRegion.d.ts'
import type { MappedStagingBuffer$MappedBuffer } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gpu/arena/staging/MappedStagingBuffer$MappedBuffer.d.ts'
import type { StagingBuffer } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gpu/arena/staging/StagingBuffer.d.ts'
export class MappedStagingBuffer extends Object implements StagingBuffer {
    constructor(arg0: number)
    // private capacity: number;
    // private fencedRegions: PriorityQueue<MappedStagingBuffer$FencedMemoryRegion>;
    // private mappedBuffer: MappedStagingBuffer$MappedBuffer;
    // private pendingCopies: PriorityQueue<MappedStagingBuffer$CopyCommand>;
    // private pos: number;
    // private remaining: number;
    // private start: number;
    // private addTransfer(arg0: ByteBuffer, arg1: GpuBuffer, arg2: number, arg3: number): void;
    delete(): void;
    enqueueCopy(arg0: ByteBuffer, arg1: GpuBuffer, arg2: number): void;
    flip(): void;
    flush(): void;
    getUploadSizeLimit(arg0: number): number;
    toString(): string;
}