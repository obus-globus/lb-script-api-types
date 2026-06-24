import type { GpuBuffer } from '../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { GpuBufferSlice } from '../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class StaticGpuBufferPool extends Object {
    static cleanup(): void;
    static release(paramarg0: GpuBuffer): void;
    static upload(paramarg0: () => string, paramarg1: number, paramarg2: ByteBuffer): GpuBufferSlice;
    private constructor()
}