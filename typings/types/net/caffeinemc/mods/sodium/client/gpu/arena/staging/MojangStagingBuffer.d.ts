import type { GpuBuffer } from '../../../../../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { ByteBuffer } from '../../../../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { MappedStagingBuffer } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gpu/arena/staging/MappedStagingBuffer.d.ts'
import type { StagingBuffer } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gpu/arena/staging/StagingBuffer.d.ts'
export class MojangStagingBuffer extends Object implements StagingBuffer {
    constructor(arg0: number)
    // private staging: MappedStagingBuffer;
    delete(): void;
    enqueueCopy(arg0: ByteBuffer, arg1: GpuBuffer, arg2: number): void;
    flip(): void;
    flush(): void;
    getUploadSizeLimit(arg0: number): number;
    toString(): string;
}