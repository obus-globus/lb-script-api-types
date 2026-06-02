import type { GpuBuffer } from '../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { RenderSystem$AutoStorageIndexBuffer$IndexGenerator } from '../../../../com/mojang/blaze3d/systems/RenderSystem$AutoStorageIndexBuffer$IndexGenerator.d.ts'
import type { VertexFormat$IndexType } from '../../../../com/mojang/blaze3d/vertex/VertexFormat$IndexType.d.ts'
import type { IntConsumer } from '../../../../it/unimi/dsi/fastutil/ints/IntConsumer.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RenderSystem$AutoStorageIndexBuffer extends Object {
    private constructor(vertexStride: number, indexStride: number, generator: RenderSystem$AutoStorageIndexBuffer$IndexGenerator)
    readonly buffer: GpuBuffer;
    // private generator: RenderSystem$AutoStorageIndexBuffer$IndexGenerator;
    // private indexCount: number;
    // private indexStride: number;
    // private type: VertexFormat$IndexType;
    // private vertexStride: number;
    // private ensureStorage(indexCount: number): void;
    getBuffer(indexCount: number): GpuBuffer;
    hasStorage(indexCount: number): boolean;
    // private intConsumer(buffer: ByteBuffer): (param0: number) => void;
    type(): VertexFormat$IndexType;
}