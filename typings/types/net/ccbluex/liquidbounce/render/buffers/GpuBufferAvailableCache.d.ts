import type { GpuBuffer } from '../../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class GpuBufferAvailableCache extends Object implements AutoCloseable {
    constructor()
    // private available: GpuBuffer[];
    add(arg0: GpuBuffer): void;
    close(): void;
    discardSmallerThan(arg0: number): void;
    takeBest(arg0: number, arg1: number): GpuBuffer;
    trimTo(arg0: number): void;
}