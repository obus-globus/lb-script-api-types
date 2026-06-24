import type { GpuBuffer } from '../../../../../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { ByteBuffer } from '../../../../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export interface StagingBuffer extends Object{
    delete(): void;
    enqueueCopy(arg0: ByteBuffer, arg1: GpuBuffer, arg2: number): void;
    flip(): void;
    flush(): void;
    getUploadSizeLimit(arg0: number): number;
}