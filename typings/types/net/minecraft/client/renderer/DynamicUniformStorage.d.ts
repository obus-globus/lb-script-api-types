import type { GpuBufferSlice } from '../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DynamicUniformStorage$DynamicUniform } from '../../../../net/minecraft/client/renderer/DynamicUniformStorage$DynamicUniform.d.ts'
import type { MappableRingBuffer } from '../../../../net/minecraft/client/renderer/MappableRingBuffer.d.ts'
export class DynamicUniformStorage<T extends DynamicUniformStorage$DynamicUniform> extends Object implements AutoCloseable {
    constructor(label: string, uboSize: number, initialCapacity: number)
    // private blockSize: number;
    // private capacity: number;
    // private label: string;
    // private lastUniform: T;
    // private nextBlock: number;
    // private oldBuffers: MappableRingBuffer[];
    // private ringBuffer: MappableRingBuffer;
    close(): void;
    endFrame(): void;
    // private resizeBuffers(newCapacity: number): void;
    writeUniform(uniform: T): GpuBufferSlice;
    writeUniforms(uniforms: T[]): GpuBufferSlice[];
}