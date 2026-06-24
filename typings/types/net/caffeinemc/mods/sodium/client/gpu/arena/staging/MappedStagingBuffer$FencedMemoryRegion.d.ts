import type { GpuFence } from '../../../../../../../../com/mojang/blaze3d/buffers/GpuFence.d.ts'
import type { Record } from '../../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class MappedStagingBuffer$FencedMemoryRegion extends Record {
    private constructor(fence: GpuFence, length: number)
    // private fence: GpuFence;
    // private length: number;
    equals(arg0: Object | null): boolean;
    fence(): GpuFence;
    hashCode(): number;
    length(): number;
    toString(): string;
}