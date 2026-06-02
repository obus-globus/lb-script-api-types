import type { PriorityQueue } from '../../../../../../../../it/unimi/dsi/fastutil/PriorityQueue.d.ts'
import type { ByteBuffer } from '../../../../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { FallbackStagingBuffer } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gl/arena/staging/FallbackStagingBuffer.d.ts'
import type { MappedStagingBuffer$CopyCommand } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gl/arena/staging/MappedStagingBuffer$CopyCommand.d.ts'
import type { MappedStagingBuffer$FencedMemoryRegion } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gl/arena/staging/MappedStagingBuffer$FencedMemoryRegion.d.ts'
import type { MappedStagingBuffer$MappedBuffer } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gl/arena/staging/MappedStagingBuffer$MappedBuffer.d.ts'
import type { StagingBuffer } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gl/arena/staging/StagingBuffer.d.ts'
import type { GlBuffer } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gl/buffer/GlBuffer.d.ts'
import type { CommandList } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gl/device/CommandList.d.ts'
import type { RenderDevice } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gl/device/RenderDevice.d.ts'
export class MappedStagingBuffer extends Object implements StagingBuffer {
    static isSupported(paramarg0: RenderDevice): boolean;
    constructor(arg0: CommandList)
    constructor(arg0: CommandList, arg1: number)
    // private capacity: number;
    // private fallbackStagingBuffer: FallbackStagingBuffer;
    // private fencedRegions: PriorityQueue<MappedStagingBuffer$FencedMemoryRegion>;
    // private mappedBuffer: MappedStagingBuffer$MappedBuffer;
    // private pendingCopies: PriorityQueue<MappedStagingBuffer$CopyCommand>;
    // private pos: number;
    // private remaining: number;
    // private start: number;
    // private addTransfer(arg0: ByteBuffer, arg1: GlBuffer, arg2: number, arg3: number): void;
    delete(arg0: CommandList): void;
    enqueueCopy(arg0: CommandList, arg1: ByteBuffer, arg2: GlBuffer, arg3: number): void;
    flip(): void;
    flush(arg0: CommandList): void;
    getUploadSizeLimit(arg0: number): number;
    toString(): string;
}