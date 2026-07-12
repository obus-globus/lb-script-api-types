import type { GpuBufferSlice } from '../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DynamicUniformStorage } from '../../../../net/minecraft/client/renderer/DynamicUniformStorage.d.ts'
import type { DynamicUniforms$ChunkSectionInfo } from '../../../../net/minecraft/client/renderer/DynamicUniforms$ChunkSectionInfo.d.ts'
import type { DynamicUniforms$Transform } from '../../../../net/minecraft/client/renderer/DynamicUniforms$Transform.d.ts'
import type { Matrix4f } from '../../../../org/joml/Matrix4f.d.ts'
import type { Vector3f } from '../../../../org/joml/Vector3f.d.ts'
import type { Vector4f } from '../../../../org/joml/Vector4f.d.ts'
export class DynamicUniforms extends Object implements AutoCloseable {
    static CHUNK_SECTION_UBO_SIZE: number;
    static TRANSFORM_UBO_SIZE: number;
    constructor()
    // private chunkSections: DynamicUniformStorage<DynamicUniforms$ChunkSectionInfo>;
    // private transforms: DynamicUniformStorage<DynamicUniforms$Transform>;
    close(): void;
    reset(): void;
    writeChunkSections(...infos: DynamicUniforms$ChunkSectionInfo[]): GpuBufferSlice[];
    writeTransform(uniform: DynamicUniforms$Transform): GpuBufferSlice;
    writeTransform(modelView: Matrix4f): GpuBufferSlice;
    writeTransform(modelView: Matrix4f, textureMatrix: Matrix4f): GpuBufferSlice;
    writeTransform(modelView: Matrix4f, colorModulator: Vector4f): GpuBufferSlice;
    writeTransform(modelView: Matrix4f, colorModulator: Vector4f, modelOffset: Vector3f, textureMatrix: Matrix4f): GpuBufferSlice;
    writeTransforms(...transforms: DynamicUniforms$Transform[]): GpuBufferSlice[];
}