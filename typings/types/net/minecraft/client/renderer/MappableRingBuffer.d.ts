import type { GpuBuffer } from '../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { GpuFence } from '../../../../com/mojang/blaze3d/buffers/GpuFence.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MappableRingBufferAddition } from '../../../../net/ccbluex/liquidbounce/additions/MappableRingBufferAddition.d.ts'
export class MappableRingBuffer extends Object implements AutoCloseable, MappableRingBufferAddition {
    constructor(label: () => string, usage: number, size: number)
    // private buffers: GpuBuffer[];
    // private current: number;
    // private fences: GpuFence[];
    // private size: number;
    close(): void;
    currentBuffer(): GpuBuffer;
    liquidBounce$awaitAndRotate(): void;
    liquidBounce$isSafeForClose(): boolean;
    rotate(): void;
    size(): number;
}