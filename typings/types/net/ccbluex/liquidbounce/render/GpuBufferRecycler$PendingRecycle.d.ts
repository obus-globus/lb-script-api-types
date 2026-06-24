import type { GpuBuffer } from '../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { GpuFence } from '../../../../com/mojang/blaze3d/buffers/GpuFence.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class GpuBufferRecycler$PendingRecycle extends Record {
    private constructor(buffer: GpuBuffer, fence: GpuFence)
    // private buffer: GpuBuffer;
    // private fence: GpuFence;
    buffer(): GpuBuffer;
    equals(arg0: Object | null): boolean;
    fence(): GpuFence;
    hashCode(): number;
    toString(): string;
}