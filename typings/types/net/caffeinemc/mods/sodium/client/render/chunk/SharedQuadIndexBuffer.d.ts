import type { GpuBuffer } from '../../../../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { SharedQuadIndexBuffer$IndexFormat } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/SharedQuadIndexBuffer$IndexFormat.d.ts'
import type { NativeBuffer } from '../../../../../../../net/caffeinemc/mods/sodium/client/util/NativeBuffer.d.ts'
export class SharedQuadIndexBuffer extends Object {
    static createIndexBuffer(paramarg0: SharedQuadIndexBuffer$IndexFormat, paramarg1: number): NativeBuffer;
    constructor(arg0: SharedQuadIndexBuffer$IndexFormat)
    // private buffer: GpuBuffer;
    // private indexFormat: SharedQuadIndexBuffer$IndexFormat;
    // private maxPrimitives: number;
    delete(): void;
    ensureCapacity(arg0: number): void;
    getBufferObject(): GpuBuffer;
    // private getNextSize(arg0: number): number;
    // private grow(arg0: number): void;
}