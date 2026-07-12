import type { GpuBuffer } from '../../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { GpuFence } from '../../../../../com/mojang/blaze3d/buffers/GpuFence.d.ts'
import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class GpuBufferDeferredCloser$PendingClose extends Record implements AutoCloseable {
    private constructor(buffers: GpuBuffer[], fence: GpuFence)
    // private buffers: GpuBuffer[];
    // private fence: GpuFence;
    buffers(): GpuBuffer[];
    close(): void;
    equals(arg0: Object | null): boolean;
    fence(): GpuFence;
    hashCode(): number;
    toString(): string;
}